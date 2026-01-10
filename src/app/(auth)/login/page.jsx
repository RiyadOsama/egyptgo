'use client'
import { useState } from "react";
import Link from "next/link";
import { useLogin } from "@/hooks/use-auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const loginMutation = useLogin();

  const LoginSubmitHandler = (e)=>{
    e.preventDefault();
    const validationErrors = {}
    if(!email){
      validationErrors.email = "Email is required.";
    }
    if(!password){
      validationErrors.password = "Password is required.";
    }
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      setServerError("");
      return;
    }

    setErrors({});
    setServerError("");

    loginMutation.mutate(
      {email,password},
      {
        onSuccess:(data)=>{
          setTimeout(() => {
            if(email.startsWith("admin")){
              window.location.href = '/dashboard';
            }else{
              window.location.href = '/';
            }
          }, 300);
        },onError:(error)=>{
          if(error.response?.status === 401){
            setServerError("Invalid email or password.");
          }
        }
      }
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <form className="bg-card p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-foreground font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-foreground font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            {serverError && <p className="text-red-500 text-sm mt-1">{serverError}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:opacity-90 transition cursor-pointer duration-300"
            onClick={LoginSubmitHandler}
          >
            {loginMutation.isPending ? "Loading..." : "Login"}
          </button>
          <div>
            <Link href="/signup" className="text-primary-black hover:underline mt-4 block text-center">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
