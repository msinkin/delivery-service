export interface IObjects {
  coords: number[],
  name: string,
  address: string,
  weight: string,
  time: string[]
}

const objects: IObjects[] = [
  {
    coords: [56.018222, 92.979611],
    name: "Пункт KSK42",
    address: "улица Юности, 18",
    weight: "Вес: до 70 кг",
    time: ["Пн-Пт 10:00:00-20:00:00", "Сб-Вс 10:00:00-18:00:00"]
  },
  {
    coords: [56.028128, 92.871724],
    name: "Постамат 2023",
    address: "улица Чернышевского, 51А",
    weight: "Вес: до 30 кг",
    time: ["Пн-Вс 10:00:00-21:00:00"]
  }
]

export default objects;