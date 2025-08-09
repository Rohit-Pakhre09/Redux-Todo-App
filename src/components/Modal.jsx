import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const Modal = () => {
  const { light, toggleView } = useContext(AppContext);

  return (
    <section
      className={`h-50 w-75 md:h-50 md:w-100 rounded-lg flex flex-col gap-5 ${
        light
          ? "bg-neutral-700 shadow-amber-700 shadow-md"
          : "bg-white shadow-xl"
      } p-5 text-center transition-all duration-300 ease-in-out`}
    >
      {/* Modal Part */}
      <div className="flex flex-col items-center justify-between">
        {/* Header part */}
        <section className="flex items-center justify-between w-full">
          <p
            className={`font-bold ${
              light ? "text-neutral-400" : "text-neutral-700"
            } text-lg md:text-2xl transition-all duration-300 ease-in-out`}
          >
            View Todo
          </p>
          <button onClick={toggleView} className={`flex justify-center items-center p-3 rounded-full ${light ? "bg-amber-400 hover:bg-amber-500 text-neutral-600" : "bg-blue-200 hover:bg-blue-400"} shadow-md cursor-pointer  transition-all duration-200 ease-in-out`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
          </button>
        </section>
        <hr className={`${light ? "border-white opacity-20" : "opacity-20"} border mt-5 w-full`} />
      </div>
    </section>
  );
};

export default Modal;
