import express from 'express'   
import { AlunoController } from '../controllers/userController'

const alunoController = new AlunoController();
const router = express.Router()

router.get('/alunos', alunoController.getAll)

export default router
