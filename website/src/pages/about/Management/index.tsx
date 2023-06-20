import Person from "@components/elements/Person";

/*
Главный директор по логистике: ответственный за общее управление и координацию работы службы доставки.
Менеджер по персоналу: отвечает за подбор, обучение и мотивацию сотрудников службы доставки.
Менеджер по технике безопасности: контролирует соблюдение правил безопасности при выполнении задач по доставке грузов.
Менеджер по продажам: занимается развитием и расширением клиентской базы службы доставки.
Менеджер по маркетингу: создает и реализует стратегии маркетинга для привлечения новых клиентов и удержания старых.
Менеджер по транспортной логистике: отвечает за организацию и оптимизацию транспортных маршрутов для доставки грузов.
Менеджер по работе с клиентами: обеспечивает качественное обслуживание клиентов и решает возникающие проблемы.
Финансовый менеджер: отвечает за финансовый учет и планирование бюджета службы доставки.
*/

import person1 from '@images/persons/1.png'
import person2 from '@images/persons/2.png'
import person3 from '@images/persons/3.png'
import person4 from '@images/persons/4.png'
import person5 from '@images/persons/5.png'
import person7 from '@images/persons/7.png'
import person8 from '@images/persons/8.png'
import person9 from '@images/persons/9.png'
import { useTranslation } from "react-i18next";

function Management() {
    const { t } = useTranslation("managmeent");

    const persons = [
        {
            name: t("persons.0"),
            post: t("posts.chiefLogisticsOfficer"),
            avatar: person2
        },
        {
            name: t("persons.1"),
            post: t("posts.hrManager"),
            avatar: person1
        },
        {
            name: t("persons.2"),
            post: t("posts.safetyManager"),
            avatar: person7
        },
        {
            name: t("persons.3"),
            post: t("posts.salesManager"),
            avatar: person3
        },
        {
            name: t("persons.4"),
            post: t("posts.marketingManager"),
            avatar: person8
        },
        {
            name: t("persons.5"),
            post: t("posts.transportLogisticsManager"),
            avatar: person5
        },
        {
            name: t("persons.6"),
            post: t("posts.customerServiceManager"),
            avatar: person9
        },
        {
            name: t("persons.7"),
            post: t("posts.financialManager"),
            avatar: person4
        }
    ]

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900">{t("title")}</h2>
                    <p className="font-light text-gray-500 sm:text-xl text-blue-900">{t("description")}</p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {persons.map((person, index) =>
                        <Person
                            key={index}
                            name={person.name}
                            post={person.post}
                            avatar={person.avatar}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Management;