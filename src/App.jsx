import { useContext } from "react";
import Todo from "./components/Todo";
import { AppContext } from "./contexts/AppContext";
import Modal from "./components/Modal";

const App = () => {
  const { light, view } = useContext(AppContext);

  return (
    <main
      className={`relative flex items-center justify-center min-h-screen ${
        light ? "bg-neutral-700" : "bg-white"
      } transition-all duration-200 ease-in-out`}
    >
      {view && (
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      )}

      {/* Main content */}
      <main
        className={`flex items-center justify-center min-h-screen ${
          light ? "bg-neutral-700" : "bg-white"
        } transition-all duration-200 ease-in-out`}
      >
        <Todo />
      </main>

      {/* Modal */}
      {view && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Modal />
        </div>
      )}
    </main>
  );
};

export default App;
