export interface IVerifyPasswordCrypto{
    verify({ password }: { password: string, hash: string }): Promise<boolean>;
}