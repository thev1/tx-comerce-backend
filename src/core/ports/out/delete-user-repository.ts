export interface IDeleteUserRepository{
    delete({username}: {username: string}): Promise<string>;
}