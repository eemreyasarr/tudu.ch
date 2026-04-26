import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./styles/App.css"

function App() {
  return (
    <main className="page">
      <section className="todo-card">
        <Header />
        <TodoInput />
        <FilterBar />
        <TodoList />
        <Footer />
      </section>
    </main>
  );
}

export default App;