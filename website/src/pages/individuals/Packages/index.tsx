import { useEffect, useState } from "react";
import { packagesABI } from "src/generated";
import { getContract } from "viem";
import { useAccount, usePublicClient } from "wagmi";
import { Token } from "@contracts/contract-address.json";
import { useTranslation } from "react-i18next";
import Table from "@components/elements/Table";
import Alert from "@components/elements/Alert";

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

function Packages() {
    const header = ["id", "Address", "Date", "Price", "Status"];

    const { address } = useAccount();
    const publicClient = usePublicClient();

    const { t } = useTranslation("track");

    const [history, setHistory] = useState<PackageEvent[]>([]);
    const [values, setValues] = useState([[]]);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetch = async () => {
            try {
                const contract = getContract({
                    address: Token as `0x${string}`,
                    abi: packagesABI,
                    publicClient,
                })

                const packages = await contract.read.getMyPackages();

                console.log(packages)

                packages.forEach(async (p) => {
                    const filter = await contract.createEventFilter.Delivery({
                        packageId: p
                    }, {
                        fromBlock: 0n
                    });
                    const changes = await publicClient.getFilterLogs({ filter });

                    var ar = changes[changes.length - 1];

                    console.log(ar);
                })

                /*if (ar) {
                    let _pkg = await contract.read.getPackage([ar.args.packageId || 0n]);
                    setPkg(_pkg);
                    console.log(_pkg);
                }*/

                //setHistory(changes.map((change) => change.args as PackageEvent));
            } catch (e: any) {
                setError(e);
            }
        }
        fetch()
    }, [address])

    return (
        <div className="container mx-auto">
            <Table header={header} values={values} />
            <Alert title={t("error", { ns: "alert" })} text={error?.message} />
        </div>
    )
}

export default Packages;