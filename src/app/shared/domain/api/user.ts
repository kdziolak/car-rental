export class User {
  constructor(
    public readonly firstname: string,
    public readonly surname: string,
    public readonly email: string,
    public readonly password?: string,
    public readonly id?: number | null,
    public readonly tenant_id?: number | null
  ) {}
}
