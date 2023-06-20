import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useAccount, useContractRead, usePublicClient } from "wagmi";

import { packagesABI, usePackagesDeliveryEvent, usePackagesGetPackage, usePackagesOwner, usePackagesUpdatePackageStatus, usePackagesVerifyPacakge } from "../../../generated";
import { Token } from "@contracts/contract-address.json"
import { BaseError, getContract } from "viem";
import TimelineElement from "@components/elements/Timeline/TimelineElement";

import notFound from "@images/not-found.svg";
import Alert from "@components/elements/Alert";
import Dropdown from "@components/elements/Dropdown";

type Package = {
    sender: `0x${string}`;
    deliveryman: `0x${string}`;
    reciver: `0x${string}`;
    delivered: boolean;
    verified: boolean;
    from: string;
    to: string;
    weight: bigint;
    worth: bigint;
}

interface PackageEvent {
    sender: `0x${string}`;
    packageId: bigint;
    status: number;
    time: bigint;
}

function Track() {
    let { trackNumber } = useParams();
    const { t } = useTranslation("track");
    const [newTrackNumber, setNewTrackNumber] = useState("");
    const publicClient = usePublicClient();
    const [history, setHistory] = useState<PackageEvent[]>([]);
    const [pkg, setPkg] = useState<Package>();
    const [error, setError] = useState<Error>();
    const [status, setStatus] = useState(0);

    const { address } = useAccount();
    const packageStatus = usePackagesUpdatePackageStatus();
    const verifyPacakge = usePackagesVerifyPacakge();

    useEffect(() => {
        const fetch = async () => {
            try {
                if (!trackNumber) return;

                const contract = getContract({
                    address: Token as `0x${string}`,
                    abi: packagesABI,
                    publicClient,
                })

                const filter = await contract.createEventFilter.Delivery({
                    packageId: [BigInt(trackNumber)]
                }, {
                    fromBlock: 0n
                });

                const changes = await publicClient.getFilterLogs({ filter });

                var ar = changes[0];

                if (ar) {
                    let _pkg = await contract.read.getPackage([ar.args.packageId || 0n]);
                    setPkg(_pkg);
                    console.log(_pkg);
                }

                setHistory(changes.map((change) => change.args as PackageEvent));
            } catch (e: any) {
                setError(e);
            }
        }
        fetch()
    }, [trackNumber])

    const orderStatus = [
        t("created"),
        t("collecting"),
        t("ontheway"),
        t("delivered"),
        t("recived")
    ]

    const descriptions = [
        t("desc1"),
        t("desc2"),
        t("desc3"),
        t("desc4"),
        t("desc5")
    ]

    return (
        <div className="container mx-auto py-20 text-blue-900">
            <div className="flex flex-col sm:flex-row m-4 text-lg">
                <Textbox
                    value={newTrackNumber}
                    onChange={(e) => setNewTrackNumber(e.target.value)}
                    placeholder={t("trackInputPlaceholder", { ns: "hero" }) || ""}
                />
                <Link to={`/track/${newTrackNumber}`}>
                    <Button>{t("trackButton", { ns: "hero" })}</Button>
                </Link>
            </div>
            {history.length > 0 &&
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full">
                        <div className="p-6 m-4 bg-blue-300/5 rounded-3xl">
                            <div className="flex justify-between text-xl">
                                <div>№ {trackNumber}</div>
                                <div>{pkg?.from} - {pkg?.to}</div>
                                <div>{orderStatus[history[history.length - 1].status]}</div>
                            </div>
                            <hr className="border-blue-300 border-dashed my-5" />
                            <ol className="border-l-2 border-blue-500">
                                {
                                    history.map((h: PackageEvent, index: number) =>
                                        <TimelineElement key={index} title={orderStatus[h.status]} description={descriptions[h.status]} date={new Date(Number(h.time) * 1000)} />
                                    )
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="lg:w-[40rem]">
                        <div className="p-6 m-4 bg-blue-300/5 rounded-3xl space-y-4">
                            <h2 className="text-4xl font-bold text-blue-900">{t("info")}</h2>
                            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">{t("info-description")}</p>
                            <hr className="border-blue-300 border-dashed" />
                            <div>
                                <div className="flex justify-between">
                                    <p>{t("sender")}</p>
                                    <p className="font-bold text-blue-900 max-w-[60%] overflow-hidden text-ellipsis">{pkg?.sender}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>{t("reciver")}</p>
                                    <p className="font-bold text-blue-900 max-w-[60%] overflow-hidden text-ellipsis">{pkg?.reciver}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>{t("deliveryman")}</p>
                                    <p className="font-bold text-blue-900 max-w-[60%] overflow-hidden text-ellipsis">{pkg?.deliveryman}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>{t("weight")}</p>
                                    <p className="font-bold text-blue-900 max-w-[60%] overflow-hidden text-ellipsis">{pkg?.weight.toString()} g</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>{t("worth")}</p>
                                    <p className="font-bold text-blue-900 max-w-[60%] overflow-hidden text-ellipsis">{pkg?.worth.toString()} gwei</p>
                                </div>
                            </div>
                            <hr className="border-blue-300 border-dashed" />
                            {address === pkg?.deliveryman &&
                                <>
                                    <Dropdown values={[
                                        t("created"),
                                        t("collecting"),
                                        t("ontheway"),
                                        t("delivered"),
                                    ]} selecred={[status, setStatus]} />
                                    <Button onClick={() => {
                                        if (trackNumber)
                                            packageStatus.write({
                                                args: [BigInt(trackNumber), status]
                                            });
                                    }}>{t("updateStatus")}</Button>
                                </>
                            }
                            {address === pkg?.reciver &&
                                <Button onClick={() => {
                                    if (trackNumber)
                                        verifyPacakge.write({
                                            args: [BigInt(trackNumber)]
                                        });
                                }}>{t("verify")}</Button>
                            }
                        </div>
                    </div>
                </div>
            }

            <Alert title={t("error", { ns: "alert" })} text={error?.message || packageStatus.error?.message || verifyPacakge.error?.message} />
        </div>
    )
}

export default Track;