import { Router } from "express";
import { 
    addTodo, 
    deleteTodo, 
    editTodo,
    getAllCompletedTodos,
    getAllIncompleteTodos,
    isComplete,
} from "../controllers/todo.controller.js";

const router = Router()

router.route("/add-todo").post(addTodo)
router.route("/edit-todo/:todoId").patch(editTodo)
router.route("/delete-todo/:todoId").delete(deleteTodo)
router.route("/complete/:todoId").put(isComplete)
router.route("/all-complete-todos").get(getAllCompletedTodos)
router.route("/all-incomplete-todos").get(getAllIncompleteTodos)

export default router
