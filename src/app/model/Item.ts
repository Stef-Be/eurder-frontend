export interface Item {
  name: string,
  price: number,
  image: string,
  urgency: Urgency,

}

  export enum Urgency{
    Green, Orange, Red
}

