import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useContractRead, usePublicClient } from "wagmi";

import { packagesABI, usePackagesDeliveryEvent, usePackagesGetPackage, usePackagesOwner } from "../../generated";
import { Token } from "@contracts/contract-address.json"
import { BaseError, getContract } from "viem";
import TimelineElement from "@components/elements/Timeline/TimelineElement";

import notFound from "@images/not-found.svg";
import Alert from "@components/elements/Alert";

interface Package {
    sender: `0x${string}`;
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
    const { t } = useTranslation();
    const [newTrackNumber, setNewTrackNumber] = useState("");
    const publicClient = usePublicClient();
    const [history, setHistory] = useState<PackageEvent[]>([]);
    const [pkg, setPkg] = useState<Package>();
    const [error, setError] = useState<Error>();

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
        "Создано",
        "Принято в работу",
        "Передано в доставку"
    ]

    const descriptions = [
        "Заказ оплачен и ожидает обработки",
        "Принято в работу",
        "Передано в доставку",
    ]

    return (
        <div className="container m-auto text-blue-900">
            <div className="flex flex-col sm:flex-row m-5 mt-20 text-lg">
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
                <div className="bg-blue-300/5 p-6 m-5 rounded-3xl">
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
            }
            <Alert title={t("error", { ns: "alert"})} text={error?.message} />
        </div>
    )
}

export default Track;