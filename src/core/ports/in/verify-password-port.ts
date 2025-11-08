export interface IVerifyPassword{
    execute({ password }: { password: string, hash: string }): Promise<boolean>;
}