export interface IHashPassword{
    execute({ password }: { password: string }): Promise<string>;
}