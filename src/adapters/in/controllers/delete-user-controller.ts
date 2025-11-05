import type { IDeleteUser } from "../../../core/ports/in/delete-user-port.js";

export class DeleteUserController{
    constructor(private deleteUser: IDeleteUser){}
    async delete({ username }: { username: string }): Promise<string>{
        return await this.deleteUser.execute({ username })
    }
}