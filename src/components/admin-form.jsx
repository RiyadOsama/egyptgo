'use client'
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { useCreateUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function AdminForm() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const createUser = useCreateUser();


  const isFormValid =
  userName.trim() !== "" &&
  (email.trim() !== "" && email.includes("@")) &&
  password.trim() !== "";


  const createUserHandler = (e)=>{
    e.preventDefault();
    let role = "admin";
    
    createUser.mutate(
      {userName, email, password, role },
      {
        onSuccess:()=>{
          router.push('/dashboard');
        }
      }
    );
    setName("");
    setEmail("");
    setPassword("");
  }



  return (
    <div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="name">UserName</Label>
        <Input 
          id="name" 
          type="text" 
          placeholder="admin123" 
          value={userName} 
          onChange={(e)=>setName(e.target.value)} 
          />
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          className="border rounded-md p-2"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button 
        type="submit"
        onClick={createUserHandler}
        className={`
          bg-primary text-primary-foreground px-4 py-2 rounded-md transition duration-300
        ${isFormValid
          ? "cursor-pointer hover:opacity-90"
          : "cursor-not-allowed opacity-60"
        }`
        }
        disabled={!isFormValid || createUser.isLoading}
        >
        {createUser.isLoading ? "Creating..." : "Add Admin"}
      </button>
    </div>
  );
}
