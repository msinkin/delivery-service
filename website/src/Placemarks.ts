export interface IObjects {
  coords: number[],
  name: string,
  address: string,
  weight: string,
  time: string[]
}

const objects: IObjects[] = [
  {
    coords: [56.010569, 92.852572],
    name: "Пункт СДЭК KSK42",
    address: "ул. Кайф",
    weight: "Вес: до 70 кг",
    time: ["Пн-Пт 10:00:00-20:00:00", "Сб-Вс 10:00:00-18:00:00"]
  },
  {
    coords: [56.010569, 92.952572],
    name: "Постамат 2023",
    address: "ул. Тестовая 5А",
    weight: "Вес: до 30 кг",
    time: ["Пн-Вс 10:00:00-21:00:00"]
  }
]

export default objects;