import { CarType } from '../../utils/enums/car.type';
export class Order {
  constructor(
    public readonly termFrom: Date,
    public readonly termTo: Date,
    public readonly customerID: string,
    public readonly carID: string,
    public readonly totalCost: number,
    public readonly didSettle: CarType,
    public readonly didRent: number,
    public readonly wasReturned: number,
    public readonly additionalInsurance: number,
    public readonly notes: string
  ) {}
}
