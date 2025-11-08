export interface IHashPasswordCrypto{
    cifrar({ password }: { password: string }): Promise<string>;
}