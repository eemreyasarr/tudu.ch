import { useTodos } from "../context/TodoContext";

const filters = ["All", "Active", "Completed", "Today"];

function FilterBar() {
    // const { filter, setFilter, clearCompleted } = useTodos();
    const { filter, setFilter } = useTodos();

    return (
        <div className="filter-bar">
            <div>
                {filters.map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={filter === item ? "active" : ""}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* <button className="clear-btn" onClick={clearCompleted}>
                Clear Completed 🗑
            </button> */}
        </div>
    );
}

export default FilterBar;