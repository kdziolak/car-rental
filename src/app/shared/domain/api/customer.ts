export class Customer {
  constructor(
    public readonly name: string,
    public readonly surname: string,
    public readonly age: number,
    public readonly drivingLicenseNumber: string,
    public readonly street: string,
    public readonly houseNumber: string,
    public readonly flatNumber: number,
    public readonly city: string,
    public readonly postcode: string
  ) {}
}
