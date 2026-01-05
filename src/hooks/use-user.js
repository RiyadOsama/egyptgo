import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserById,createuser } from "@/services/user";

export function useCreateUser(){
    return useMutation({
        mutationFn: createuser,
        
    })
}

export function useGetUserById(id){
    return useQuery({
        queryFn:()=>getUserById(id),
        queryKey:['user', id],
    })
}