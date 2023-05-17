import Button from "@components/elements/Button";
import Textarea from "@components/elements/Textarea";
import Textbox from "@components/elements/Textbox";
import { useTranslation } from "react-i18next";

function Contacts() {
    const { t, i18n } = useTranslation();

    return (
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-items-center">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <Textbox
                        label="Your name"
                        for="name"
                        placeholder="Ivan Ivanov"
                        required
                    />
                    <Textbox
                        label="Your email"
                        for="email"
                        placeholder="name@flowbite.com"
                        required
                    />
                    <Textbox
                        label="Subject"
                        for="subject"
                        placeholder="Let us know how we can help you"
                        required
                    />
                    <Textarea
                        label="Your message"
                        for="message"
                        placeholder="Leave a comment..."
                    />
                    <Button type="submit">Send message</Button>
                </form>
            </div>
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4 text-blue-900">Инфо</h1>
                <ul>
                    <li>dasd@gmail.com</li>
                    <li>+24 23 43 323</li>
                    <li>address</li>
                    <li>09:00 - 18:00</li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts;