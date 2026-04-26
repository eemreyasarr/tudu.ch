import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoInput() {
    const [title, setTitle] = useState("");
    const { addTodo } = useTodos();

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(title);
        setTitle("");
    }

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
            />
            <button type="submit">+</button>
        </form>
    );
}

export default TodoInput;