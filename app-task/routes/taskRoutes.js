const express = require("express");
const router = express.Router();

// Importe o controlador apropriado para lidar com as solicitações
const taskController = require("../controllers/taskController");

// Defina a rota GET para obter todas as tarefas
router.get("/tasks", taskController.getAllTasks);
router.post("/tasks", taskController.createTask);
router.put(`/tasks/:idTask`, taskController.updateTask);
router.delete("/tasks/:idTask", taskController.deleteTask);

// Defina outras rotas, se necessário...

module.exports = router;