import { Request, Response } from "express";
import { appDataSource } from "../config/data-source";
import AlunoRepository from "../repositories/userRepository";

export class AlunoController {
    private alunoRepository: AlunoRepository;

    constructor() {
        this.alunoRepository = new AlunoRepository(appDataSource);
    }

    getAll = async (req: Request, res: Response): Promise<void> => {
        const aluno = await this.alunoRepository.getAll();
        res.status(200).json(aluno);
    };
  
}