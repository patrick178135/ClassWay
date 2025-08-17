import { Router } from "express";

const routes = Router();

// Rota de teste
routes.get("/", (req, res) => {
  res.json({ message: "API funcionando " });
});

export default routes;
