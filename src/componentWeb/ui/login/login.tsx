import { useState } from "react";
import { LogInIcon } from "lucide-react";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:px-2 lg:py-1 text-black/60"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="text-white font-bold">
          <LogInIcon size={24} className="text-black/60" />
        </span>
      </button>
      <div
        className={`lg:absolute right-0 top-12 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-10"
        }`}
      >
        <ul className={`${isOpen ? "block" : "hidden"}`}>
          <li>
            <a href="/signin" className="block px-4 py-2 hover:bg-gray-100">
              Sign in
            </a>
          </li>
          <li>
            <a href="/signup" className="block px-4 py-2 hover:bg-gray-100">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
