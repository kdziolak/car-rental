import { CarType } from '../../utils/enums/car.type';
import { GearboxType } from '../../utils/enums/gearbox.type';
export class Car {
  constructor(
    public readonly brand: string,
    public readonly model: string,
    public readonly engineCapacity: string,
    public readonly color: string,
    public readonly gearboxType: GearboxType,
    public readonly carType: CarType,
    public readonly price: number
  ) {}
}
