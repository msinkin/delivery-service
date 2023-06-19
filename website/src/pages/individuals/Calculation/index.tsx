import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";
import { useAccount, useContractWrite } from "wagmi";
import { abi } from "@contracts/Packages.json";
import { Token } from "@contracts/contract-address.json"
import { parseEther } from "viem";
import Alert from "@components/elements/Alert";
import { useState } from "react";

function CalculationPage() {
    let [searchParams] = useSearchParams();

    const [from, setFrom] = useState(searchParams.get("from") || "");
    const [to, setTo] = useState(searchParams.get("to") || "");
    const [weight, setWeight] = useState("");
    const [worth, setWorth] = useState("");

    const { t, i18n } = useTranslation("calculation");
    const { address } = useAccount();

    const { error, write } = useContractWrite({
        address: Token as `0x${string}`,
        abi: abi,
        functionName: 'createPackage'
    })

    return (
        <div className="max-w-screen-xl mx-auto flex flex-wrap">
            <div className="text-blue-300">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">{t("title")}</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 sm:text-xl">{t("description")}</p>
                <h2 className="text-4xl font-bold mb-4 text-blue-900">{}</h2>
                <div className="space-y-8">
                    <Textbox
                        label={t("fromAddress") || ""}
                        for="fromAddress"
                        value={from}
                        onChange={(e) => { setFrom(e.target.value); }}
                    />
                    <Textbox
                        label={t("toAddress") || ""}
                        for="toAddress"
                        value={to}
                        onChange={(e) => { setTo(e.target.value); }}
                    />
                    <div className="flex flex-wrap space-x-4">
                        <div className="grow">
                            <Textbox
                                label={t("weight") || ""}
                                placeholder={t("weight-placeholder") || ""}
                                for="weight"
                                value={weight}
                                onChange={(e) => { setWeight(e.target.value); }}
                            />
                        </div>
                        <div className="grow">
                            <Textbox
                                label={t("worth") || ""}
                                placeholder={t("worth-placeholder") || ""}
                                for="worth"
                                value={worth}
                                onChange={(e) => { setWorth(e.target.value); }}
                            />
                        </div>
                    </div>
                    <Button onClick={() => {
                        if (weight && worth)
                            write({
                                value: BigInt(1),
                                args: [from, to, weight, worth]
                            });
                    }}>{t("sendButton")}</Button>
                </div>
            </div>
            <Alert title={t("error", { ns: "alert" })} text={error?.message} />
        </div>
    )
}

export default CalculationPage;