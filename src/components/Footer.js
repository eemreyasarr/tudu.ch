import { useTodos } from "../context/TodoContext";

function Footer() {
    const { todos, completedCount } = useTodos();

    return (
        <footer className="footer">
            <span></span>
            <span>
                {completedCount} of {todos.length} tasks completed
            </span>
            {/* <span>You&apos;re doing great! 🎉</span> */}
        </footer>
    );
}

export default Footer;