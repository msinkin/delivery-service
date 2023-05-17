import TimelineElement from "./TimelineElement";

function Timeline() {
    return (
        <ol className="border-l-2 border-blue-500">
            <TimelineElement title="Создано" description="Заказ оплачен и ожидает обработки" date={new Date("12 february 2023")} />
            <TimelineElement title="Принято в работу" description="Заказ оплачен. На данном этапе комплектация и упаковка товаров" date={new Date("13 february 2023")} />
            <TimelineElement title="Передано в доставку" description="На данном этапе происходить транспортировка товаров до пункта выдачи" date={new Date("24 february 2023")} />
        </ol>
    )
}

export default Timeline;