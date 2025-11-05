
import type { User } from "../../../core/entities/user.js";
import type { ICreateUser } from "../../../core/ports/in/create-user-port.js";

export class CreateUserController{

    constructor(private createUser: ICreateUser){}
    async criar({user}: {user: User}): Promise<string>{
        return await this.createUser.execute( {user})
    }
}