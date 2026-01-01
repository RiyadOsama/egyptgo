'use client'
import { useState } from "react";
import Link from "next/link";
import { useLogin } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const router = useRouter();

  const LoginSubmitHandler = (e)=>{
    e.preventDefault();
    loginMutation.mutate(
      {email,password},
      {
        onSuccess:(data)=>{
          console.log("Login success, redirecting...", email);
          console.log("Cookies:", document.cookie);
          // Use window.location for full page reload to ensure cookies are sent
          setTimeout(() => {
            if(email.startsWith("admin")){
              console.log("Redirecting to dashboard");
              window.location.href = '/dashboard';
            }else{
              console.log("Redirecting to home");
              window.location.href = '/';
            }
          }, 300);
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
            <Link href="/reset-password" className="text-primary hover:underline mt-4 block">
              Forgot Password?
            </Link>
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
