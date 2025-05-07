import { BiError } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";

const FormMessage = ({ message, center, type }) => {
  return (
    <div
      className={`flex-v-center border w-full p-2 !gap-2 rounded bg-bg
        ${center && "!justify-center"}
        ${type === "error" ? "border-red-600" : "border-neon"}`}
    >
      {type === "error" ? (
        <BiError className="text-error text-[1.25em]" />
      ) : (
        <FaRegCheckCircle className="text-neon text-[1.25em]" />
      )}
      <p className={type === "error" ? "text-red-600" : "text-neon"}>
        {message}
      </p>
    </div>
  );
};

export default FormMessage;
