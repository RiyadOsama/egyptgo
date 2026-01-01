import { useMutation } from "@tanstack/react-query";
import { login, register } from "@/services/auth";

export function useLogin(){
    return useMutation({
        mutationFn: login,
        onSuccess:(data)=>{
            localStorage.setItem('token', data?.data.token);
            document.cookie = `token=${data?.data.token}; path=/;`;
            document.cookie = `email=${data?.data.user.email}; path=/;`;
            console.log("Login successful:", data);
        },
        onError:(error)=>{
            console.error("Login failed:", error);
        }
    })
}

export function useRegister(){
    return useMutation({
        mutationFn: register,
        onSuccess:(data)=>{
            console.log("Registration successful:", data);
        },
        onError:(error)=>{
            console.error("Registration failed:", error);
        }
    })
}