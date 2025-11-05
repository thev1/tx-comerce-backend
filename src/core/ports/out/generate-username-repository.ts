export interface IGenerateUsernameRepository{
    get({ username }: { username: string }):Promise<string>
}