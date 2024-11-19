import logo from "./logo.svg";
import "./App.css";
import SwitchTheme from "./components/SwitchTheme";
import Todo from "./components/Todo";
import BooksList from "./components/BooksList";

function App() {
  return (
    <>
      <SwitchTheme>
        <Todo></Todo>
        <hr />
        <BooksList />
      </SwitchTheme>
    </>
  );
}

export default App;
