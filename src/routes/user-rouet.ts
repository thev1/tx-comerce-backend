import { Router } from "express";
import { CreateUser } from "../core/usecases/create-user.js";
import { User } from "../core/entities/user.js";
import { CreateUserRepository } from "../infra/repos/create-user-repository.js";
import { CreateUserController } from "../adapters/in/controllers/create-user-contrioller.js";

const userRoute = Router();

userRoute.get("/user", (req, res) => {
    res.json({ message: "API de listagem de users" });
});

userRoute.post("/user", async (req, res) => {
    try {
        const user: User = new User(req.body?.name, req.body?.lastname, req.body?.name + '.' + req.body?.lastname, 'changeme');
        res.status(201).json({ message: await new CreateUserController(new CreateUser(new CreateUserRepository())).criar({ user }) });
    } catch (error) {
        if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro desconhecido no servidor." });
    }
    }

});

export default userRoute;
