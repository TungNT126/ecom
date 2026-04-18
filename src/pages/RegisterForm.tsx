import { createPortal } from "react-dom";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "../models/User";

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function RegisterForm({ isOpen, onClose }: FormProps) {
  type RegisterFormType = z.infer<typeof registerSchema>;

  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]") || [];

  const registerSchema = z.object({
    firstname: z.string().min(1, "Please insert information!"),
    lastname: z.string().min(1, "Please insert information!"),
    username: z
      .string()
      .min(1, "Please insert information!")
      .refine(
        (val) => {
          const isDuplicate = existingUsers.find((user: User) => {
            return user.username === val;
          });

          return !isDuplicate;
        },
        { message: "Username has existed!" },
      ),
    email: z
      .string()
      .min(1, "Please insert information!")
      .regex(EmailRegex, "Email invalid!")
      .refine(
        (val) => {
          const isDuplicate = existingUsers.find((user: User) => {
            return user.email === val;
          });

          return !isDuplicate;
        },
        { message: "Email has existed!" },
      ),
    password: z.string().min(1, "Please insert information!"),
    confirmPassword: z.string().min(1, "Please insert information!"),
  });

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    reset: resetSignup,
    formState: { errors: errorsSignup },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  function onSignupSubmit(data: RegisterFormType) {
    const { confirmPassword: _, ...newUser } = data;

    const updateUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updateUsers));

    resetSignup();
    onClose();
    alert("Sign up successfully🎉");
  }

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/50">
      <form
        onSubmit={handleSignupSubmit(onSignupSubmit)}
        className="relative border p-6 md:p-10 w-auto bg-white rounded-xl"
      >
        <button
          type="button"
          className="relative float-right text-3xl leading-5 hover:cursor-pointer"
          onClick={() => {
            onClose();
            resetSignup();
          }}
        >
          x
        </button>
        <h1 className="pt-3 font-bold text-3xl">Create an account</h1>

        <span className="block pb-2 font-thin text-xs text-gray-800">
          Already have an account? Login
        </span>
        <div className="flex flex-col  md:flex-row md:justify-between pt-3 md:py-3">
          <div className="mb-3 md:mb-0">
            <label htmlFor="" className="block text-sm mb-1">
              First name
            </label>
            <input
              className={`py-1 px-2 w-full border border-gray-300 rounded-md ${errorsSignup.firstname && "border-red-500"}`}
              {...registerSignup("firstname")}
              type="text"
              placeholder="enter first name"
            />

            {errorsSignup.firstname && (
              <span className="form-message text-red-600 text-sm">
                {errorsSignup.firstname.message}
              </span>
            )}
          </div>
          <div className="mb-3 md:mb-0">
            <label htmlFor="" className="block mb-1 text-sm">
              Last name
            </label>
            <input
              className={`py-1 px-2 w-full border border-gray-300 rounded-md ${errorsSignup.lastname && "border-red-500"}`}
              {...registerSignup("lastname")}
              type="text"
              placeholder="enter last name"
            />
            {errorsSignup.lastname && (
              <span className="form-message text-red-600 text-sm">
                {errorsSignup.lastname.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center mb-3 md:mb-0">
          <label htmlFor="" className="block mb-1 text-sm">
            Username
          </label>
          <input
            className={`py-1 px-2 border border-gray-300 rounded-md ${errorsSignup.firstname && "border-red-500"} w-auto md:w-full`}
            {...registerSignup("username")}
            type="text"
            placeholder="enter username"
          />
          {errorsSignup.username && (
            <span className="form-message text-red-600 text-sm">
              {errorsSignup.username.message}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center mb-3 md:mb-0">
          <label htmlFor="" className="block mb-1 text-sm">
            Email
          </label>
          <input
            className={`py-1 px-2 border border-gray-300 rounded-md ${errorsSignup.firstname && "border-red-500"} w-auto md:w-full`}
            {...registerSignup("email")}
            type="email"
            placeholder="enter email"
          />
          {errorsSignup.email && (
            <span className="form-message text-red-600 text-sm">
              {errorsSignup.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:py-3">
          <div className="mb-3 md:mb-0">
            <label htmlFor="" className="block mb-1 text-sm">
              Password
            </label>
            <input
              className={`py-1 px-2 mb-3 md:mb-0 w-full border border-gray-300 rounded-md ${errorsSignup.firstname && "border-red-500"}`}
              {...registerSignup("password")}
              type="password"
              placeholder="enter password"
            />
            {errorsSignup.password && (
              <span className="form-message text-red-600 text-sm">
                {errorsSignup.password.message}
              </span>
            )}
          </div>
          <div className="mb-3 md:mb-0">
            <label htmlFor="" className="block mb-1 text-sm">
              Confirm your password
            </label>
            <input
              className={`py-1 px-2 mb-3 md:mb-0 w-full border border-gray-300 rounded-md ${errorsSignup.firstname && "border-red-500"}`}
              {...registerSignup("confirmPassword")}
              type="password"
              placeholder="confirm password"
            />
            {errorsSignup.confirmPassword && (
              <span className="form-message text-red-600 text-sm">
                {errorsSignup.confirmPassword.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="py-3 px-6 mt-4 md:float-right w-full md:w-fit  bg-black text-white rounded-4xl border-2 hover:cursor-pointer hover:bg-white hover:text-black"
        >
          Register
        </button>
      </form>
    </div>,
    document.body,
  );
}

export default RegisterForm;
