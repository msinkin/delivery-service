import Button from "@components/elements/Button";
import Textarea from "@components/elements/Textarea";
import Textbox from "@components/elements/Textbox";
import { useTranslation } from "react-i18next";

function Contacts() {
    const { t } = useTranslation("contacts");

    return (
        <div className="py-16 max-w-screen-xl mx-auto flex flex-wrap justify-items-center">
            <div className="mb-16 px-6 mx-auto max-w-screen-md">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">{t("title")}</h2>
                <p className="mb-10 font-light text-xl text-blue-900">{t("description")}</p>
                <form action="mailto:info@mydelivery.com" method="get" encType="text/plain" className="space-y-8">
                    <Textbox
                        label={t("fullname") || ""}
                        htmlFor="name"
                        name="fullname"
                        placeholder={t("fullname-placeholder") || ""}
                        required
                    />
                    <Textbox
                        label={t("email") || ""}
                        htmlFor="email"
                        name="email"
                        placeholder={t("email-placeholder") || ""}
                        required
                    />
                    <Textbox
                        label={t("subject") || ""}
                        htmlFor="subject"
                        name="subject"
                        placeholder={t("subject-placeholder") || ""}
                        required
                    />
                    <Textarea
                        label={t("message") || ""}
                        htmlFor="message"
                        name="body"
                        placeholder={t("message-placeholder") || ""}
                    />
                    <Button type="submit">{t("send")}</Button>
                </form>
            </div>
            <div className="flex-1 px-6 mx-auto max-w-screen-md">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">{t("information")}</h2>
                <div className="font-light text-xl text-blue-900">
                    <p>{t("information-description")}</p>
                    <br/>
                    <p>{t("phone-information")}</p>
                    <p>{t("email-information")}</p>
                    <br/>
                    <p>{t("clock-information")}</p>
                    <p>{t("clock1")}</p>
                    <p>{t("clock2")}</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts;