import { DataSource, In, Repository } from "typeorm";
import AlunoEntity from "../entities/user";

class AlunoRepository implements AlunoRepository {
    private repository: Repository<AlunoEntity>

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(AlunoEntity)
    }

    async getAll(): Promise<AlunoEntity[]> {
        return this.repository.find()
    }

}

export default AlunoRepository