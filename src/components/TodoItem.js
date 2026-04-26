import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo } = useTodos();

    return (
        <div className={`todo-item ${todo.priority}`}>
            <button
                className={`check ${todo.completed ? "checked" : ""}`}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.completed ? "✓" : ""}
            </button>

            <div className="todo-content">
                <h3 className={todo.completed ? "done-text" : ""}>{todo.title}</h3>
                <span className={`tag ${todo.priority}`}>{todo.tag}</span>
            </div>

            <button className="star">☆</button>

            <button className="delete" onClick={() => deleteTodo(todo.id)}>
                ⋮
            </button>
        </div>
    );
}

export default TodoItem;