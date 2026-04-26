import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodos = [
    { id: 1, title: "Buy groceries", completed: false, tag: "Today", priority: "normal" },
    { id: 2, title: "Finish React project", completed: false, tag: "High Priority", priority: "high" },
    { id: 3, title: "Morning workout", completed: true, tag: "Completed", priority: "done" },
    { id: 4, title: "Read documentation", completed: false, tag: "Tomorrow", priority: "normal" },
    { id: 5, title: "Design new UI", completed: false, tag: "Low Priority", priority: "low" },
    { id: 6, title: "Learn Context API", completed: true, tag: "Completed", priority: "done" },
];

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(initialTodos);
    const [filter, setFilter] = useState("All");

    function addTodo(title) {
        if (!title.trim()) return;

        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
            tag: "Today",
            priority: "normal",
        };

        setTodos([newTodo, ...todos]);
    }

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function clearCompleted() {
        setTodos(todos.filter((todo) => !todo.completed));
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        if (filter === "Today") return todo.tag === "Today";
        return true;
    });

    const completedCount = todos.filter((todo) => todo.completed).length;

    return (
        <TodoContext.Provider
            value={{
                todos,
                filteredTodos,
                filter,
                setFilter,
                addTodo,
                toggleTodo,
                deleteTodo,
                clearCompleted,
                completedCount,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    return useContext(TodoContext);
}