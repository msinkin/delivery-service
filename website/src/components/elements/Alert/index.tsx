import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface AlertProps {
    title?: string | null,
    text?: string | null
}

function Alert({ title, text }: AlertProps) {
    const { t } = useTranslation();
    const [isShow, setShow] = useState(false);

    useEffect(() => {
        if (text != null) setShow(true);
    }, [text]);

    return (
        <Transition appear show={isShow} as={Fragment}>
            <Dialog as="div" className="relative z-10 bg-black" onClose={() => { setShow(false) }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h1"
                                    className="text-2xl font-bold tracking-tight text-blue-900"
                                >
                                    {title}
                                </Dialog.Title>

                                <p className="text-base text-blue-300 py-2">
                                    {text}
                                </p>

                                <Button onClick={() => { setShow(false); }}>
                                    {t("ok", { ns: "alert" })}
                                </Button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Alert;