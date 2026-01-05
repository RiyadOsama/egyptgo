import { useQuery,useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { createPackage,updatePackage,deletePackage,getAllPackages,getPackageById, getFullPackages } from "@/services/packages";


export function useGetFullPackages(){
    return useQuery({
        queryKey:['packages'],
        queryFn: getFullPackages,
        onSuccess:(data)=>{
            console.log("Fetched full packages successfully", data);
        },
        onError:(error)=>{
            console.error("Failed to fetch full packages", error);
        }
    })
}

export function useGetAllPackages(id){
    return useQuery({
        queryKey:['packages', id],
        queryFn: () => getAllPackages(id),
        onSuccess:(data)=>{
            console.log("Fetched all packages successfully", data);
        },
        onError:(error)=>{
            console.error("Failed to fetch packages", error);
        }
    })
}

export function useGetPackageById(id){
    return useQuery({
        queryFn:()=>getPackageById(id),
        queryKey:['package', id],
        enabled:!!id,
    })
}

export function useCreatePackage(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createPackage,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['packages']})
        },
        onError:(error)=>{
            console.error("Failed to create package", error);
        }
    })
}

export function useUpdatePackage(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updatePackage,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['packages']})
        },
        onError:(error)=>{
            console.error("Failed to update package", error);
        }
    })
}

export function useDeletePackage(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deletePackage,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['packages']})
        },
        onError:(error)=>{
            console.error("Failed to delete package", error);
        }
    })
}