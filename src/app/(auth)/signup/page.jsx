'use client';
import { useState } from "react";
import { useRegister } from "@/hooks/use-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function SignupPage() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const registerMutation = useRegister();
  const router = useRouter();
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
    } else if(!emailRegex.test(email)){
      validationErrors.email = "Please enter a valid email address.";
    }
    if(!password){
      validationErrors.password = "Password is required.";
    }
    if(!confirmPassword){
      validationErrors.confirmPassword = "Password confirmation is required.";
    } else if(password !== confirmPassword){
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
        onSuccess:()=>{
          router.push('/login');
        },
        onError:(error)=>{
          const message =
          error.response?.data?.message || "Registration failed. Please try again.";
          setServerError([message])
        }
      }
    );
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <form onSubmit={SignupSubmitHandler} className="bg-card p-6 rounded-lg shadow-sm dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] dark:border-gray-700 border border-border">
          <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="userName" className="block text-foreground font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your name"
              value={userName}
              onChange={(e)=>setName(e.target.value)}
            />
            {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-foreground font-semibold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-foreground font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full border border-border p-2 pr-10 rounded-md"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-foreground font-semibold mb-2">
              Password Confirmation
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-border p-2 pr-10 rounded-md"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground p-2 cursor-pointer rounded-md hover:opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
