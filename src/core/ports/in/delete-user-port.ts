export interface IDeleteUser{
    execute({ username }: { username: string }): Promise<string>;
}