import type { ICreateUser } from "../../../core/contracts/create-user.js";
import type { User } from "../../../core/entities/user.js";

export class CriarUtilizadorContrioller{

    constructor(private createUser: ICreateUser){}
    async criar({user}: {user: User}): Promise<string>{
        return await this.createUser.execute( {user})
    }
}