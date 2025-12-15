'use client'
import AppSidebar from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"

export default function Layout({ children }) {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="" />
                    <div className="flex items-center gap-2 px-4">
                        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 bg-orange-50 min-h-screen">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}