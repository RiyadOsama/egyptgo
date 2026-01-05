'use client';
import { useState } from "react";
import { useRegister } from "@/hooks/use-auth";
import Link from "next/link";

export default function SignupPage() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState([]);
  const registerMutation = useRegister();
  const SignupSubmitHandler = (e)=>{
    e.preventDefault();
    const validationErrors = {}
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!userName){
      validationErrors.userName = "Name is required.";
    }
    if(!email){
      validationErrors.email = "Email is required.";
    }
    if(!password){
      validationErrors.password = "Password is required.";
    }
    if(!confirmPassword){
      validationErrors.confirmPassword = "Password confirmation is required.";
    }
    if(password !== confirmPassword){
      validationErrors.confirmPassword = "Passwords do not match.";
    }
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      setServerError([]);
      return;
    }

    setErrors({});
    setServerError([]);

    registerMutation.mutate(
      {email,userName,password,confirmPassword},
      {
        onError:(error)=>{
          if(error.response?.data.statusCode === 400){
            setServerError(error.response.data.message || ["Registration failed. Please try again."]);
        }
        }
      }
    );
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <form className="bg-card p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-foreground font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your name"
              value={userName}
              onChange={(e)=>setName(e.target.value)}
            />
            {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
          </div>

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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-foreground font-semibold mb-2">
              Password Confirmation
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground p-2 cursor-pointer rounded-md hover:opacity-90 transition duration-300"
            onClick={SignupSubmitHandler}
            disabled={password !== confirmPassword}
          >
            {registerMutation.isPending ? "Loading..." : "Signup"}
          </button>
          {serverError.map((err, index) => (
              <p key={index} className="text-red-500 text-sm mt-1">{err}</p>
            ))}
          <div>
            <Link href="/login" className="text-primary-black hover:underline mt-4 block text-center">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
