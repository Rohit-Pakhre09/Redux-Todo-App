import { useContext } from "react";
import Todo from "./components/Todo";
import { ThemeContext } from "./contexts/themeContext";

const App = () => {
  const {light} = useContext(ThemeContext);
  return (
    <main className={`flex items-center justify-center min-h-screen ${light ? "bg-neutral-700" : "bg-white"}`}>
      <Todo />
    </main>
  );
};

export default App;
