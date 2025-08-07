import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Todo = () => {
  const { light, toggleTheme } = useContext(ThemeContext);
  return (
    <section className={`w-80 sm:w-sm md:w-md lg:w-lg rounded-lg ${light ? "bg-amber-200 shadow-white shadow-sm" : "bg-blue-200 shadow-lg"} h-150 md:h-200 p-5`}>
      {/* Title & Theme Toggle */}
      <section className="flex items-center justify-between">
        <p className="font-bold text-4xl">Todo App</p>

        {/* Theme Toggle */}
        <div>
          <button onClick={toggleTheme} className={`p-2 flex items-center justify-center ${light ? "bg-amber-600 shadow-lg" : "bg-white shadow-lg"} rounded-full cursor-pointer`}>
            {light ?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="icon icon-tabler icons-tabler-filled icon-tabler-sun"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
              <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
              <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
              <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
              <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
              <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
              <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
              <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
              <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              className="icon icon-tabler icons-tabler-filled icon-tabler-moon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
            </svg>}
          </button>
        </div>
      </section>
      <p className="italic text-sm text-neutral-700 mt-4">
        ~ Tame Your Day, One Todo at a Time.
      </p>
      <hr className="opacity-30 mt-3" />
    </section>
  );
};

export default Todo;
