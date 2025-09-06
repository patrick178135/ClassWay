import express, {Application} from "express"
import cors from "cors"
import errorHandler from "./middlewares/erroHandler"
import routerAlunos from "./routes/usersRoute"


const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/api/", routerAlunos)

app.use(errorHandler);

export default app