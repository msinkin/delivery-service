import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useContractWrite, useFeeData, useWaitForTransaction } from "wagmi";
import { abi } from "@contracts/Packages.json";
import { Token } from "@contracts/contract-address.json"
import { parseEther, parseGwei } from "viem";
import Alert from "@components/elements/Alert";
import { useState } from "react";
import BigDecimal from "./bigdecimal";
import { packagesABI, usePackagesCreatePackage, usePreparePackagesCreatePackage } from "src/generated";

function CalculationPage() {
    let [searchParams] = useSearchParams();

    const [from, setFrom] = useState(searchParams.get("from") || "");
    const [to, setTo] = useState(searchParams.get("to") || "");
    const [weight, setWeight] = useState("");
    const [worth, setWorth] = useState("");
    const [price, setPrice] = useState<{ value: bigint, total: bigint, formattedValue: string, formattedTotal: string }>();
    const [reciver, setReciver] = useState("");

    const { t } = useTranslation("calculation");

    const fee = useFeeData();

    const packageCreate = usePackagesCreatePackage();

    const waitForTransaction = useWaitForTransaction({
        hash: packageCreate.data?.hash,
        onSettled(data, error) {
            console.log(data);
        }
    })

    function calculate({ _weight, _worth }: { _weight?: string, _worth?: string }) {
        let value = (BigInt(_weight || weight) * parseEther("0.0006")) + (BigInt(_worth || worth) * parseEther("0.0006"));
        let total = value + (fee.data?.gasPrice || 0n);

        setPrice({
            value,
            total,
            formattedValue: BigDecimal.fromBigInt(value).divide(BigDecimal.fromBigInt(parseEther("1"))).toString(),
            formattedTotal: BigDecimal.fromBigInt(total).divide(BigDecimal.fromBigInt(parseEther("1"))).toString(),
        });
    }

    return (
        <div className="text-blue-300 py-20 mx-auto max-w-screen-xl flex flex-col lg:flex-row">
            <div className="grow bg-blue-300/5 p-6 rounded-3xl m-2">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">{t("title")}</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 sm:text-xl">{t("description")}</p>
                <div className="space-y-8">
                    <Textbox
                        label={t("fromAddress")}
                        htmlFor="fromAddress"
                        value={from}
                        required
                        onChange={(e) => { setFrom(e.target.value); }}
                    />
                    <Textbox
                        label={t("toAddress")}
                        htmlFor="toAddress"
                        value={to}
                        required
                        onChange={(e) => { setTo(e.target.value); }}
                    />
                    <div className="flex flex-wrap">
                        <div className="grow">
                            <Textbox
                                label={t("weight")}
                                placeholder={t("weight-placeholder")}
                                htmlFor="weight"
                                value={weight}
                                required
                                onChange={(e) => { setWeight(e.target.value); calculate({ _weight: e.target.value }) }}
                            />
                        </div>
                        <div className="grow">
                            <Textbox
                                label={t("worth")}
                                placeholder={t("worth-placeholder")}
                                htmlFor="worth"
                                value={worth}
                                required
                                onChange={(e) => { setWorth(e.target.value); calculate({ _worth: e.target.value }) }}
                            />
                        </div>
                    </div>
                    <Textbox
                        label={t("reciverAddress")}
                        htmlFor="reciverAddress"
                        value={reciver}
                        required
                        onChange={(e) => { setReciver(e.target.value); }}
                    />
                </div>
            </div>
            <div className="bg-blue-300/5 p-6 rounded-3xl m-2 lg:w-[30rem] w-full space-y-4">
                <h2 className="text-4xl font-bold text-blue-900">{t("summary")}</h2>
                <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">{t("summary-description")}</p>
                <hr className="border-blue-300 border-dashed" />
                <div>
                    <div className="flex justify-between">
                        <p>{t("price")}</p>
                        <p className="font-bold text-blue-900">{price?.formattedValue} ETH</p>
                    </div>
                    <div className="flex justify-between">
                        <p>{t("gasPrice")}</p>
                        <p className="font-bold text-blue-900">{fee.data?.formatted.gasPrice} gwei</p>
                    </div>
                    <div className="flex justify-between">
                        <p>{t("maxFeePerGas")}</p>
                        <p className="font-bold text-blue-900">{fee.data?.formatted.maxFeePerGas} gwei</p>
                    </div>
                    <div className="flex justify-between">
                        <p>{t("maxPriorityFeePerGas")}</p>
                        <p className="font-bold text-blue-900">{fee.data?.formatted.maxPriorityFeePerGas} gwei</p>
                    </div>
                </div>
                <hr className="border-blue-300 border-dashed" />
                <div className="flex justify-between">
                    <p>{t("total")}</p>
                    <p className="font-bold text-blue-900">{price?.formattedTotal} ETH</p>
                </div>
                <Button onClick={() => {
                    if (weight && worth)
                        packageCreate.write({
                            value: price?.value,
                            args: [reciver as `0x${string}`, from, to, BigInt(weight), BigInt(worth)]
                        });
                }}>{t("sendButton")}</Button>
            </div>
            <Alert title={t("error", { ns: "alert" })} text={packageCreate.error?.message} />
        </div>
    )
}

export default CalculationPage;