
import type { User } from "../../../core/entities/user.js";
import type { IGenerateUsername } from "../../../core/ports/in/generate-username-port.js";

export class GenerateUsernameController{

    constructor(private generateUsername: IGenerateUsername){}
    async criar({ name, lastname }: { name: string, lastname: string }): Promise<string>{
        return await this.generateUsername.execute({ name, lastname })
    }
}