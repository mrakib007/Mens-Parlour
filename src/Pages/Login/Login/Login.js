import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleGoogleSingIn = () =>{}
  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="lg:flex lg:flex-row flex-col justify-between gap-5">
        <div className="lg:w-6/12 w-full">
          <img
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=826&t=st=1687153913~exp=1687154513~hmac=21f01e05a82aca8b8f32c13158c06bf421039684e26abd6388436307f34e5112"
            alt=""
            className="rounded-xl hidden md:block lg:block lg:w-[670px]"
          />
        </div>
        <div className="lg:w-6/12 w-full ml-5">
            <h1 className="text-4xl font-semibold text-center">Login</h1>
            <div class="inline-flex items-center justify-center w-full">
        <hr class="w-56 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900"></div>
      </div>
          <form
          className="my-5 lg:flex lg:flex-col lg:justify-center lg:items-center" onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full bg-slate-300 text-black"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full bg-slate-300 text-black"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must contain at least 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input className="btn btn-accent w-full" value='Login' type="submit"/>
          </form>
          <p>New to Men's Parlour? <Link to={'/signup'} className="text-secondary">Create New Account</Link></p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSingIn} className="btn btn-outline w-full">Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
