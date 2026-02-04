'use client';
import AppSidebar from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { ModeToggle } from '@/components/mode-toggle';

export default function Layout({ children }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="" />
          <div className="flex items-center justify-between gap-2 px-4 flex-1">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <ModeToggle className="dark:bg-white text-black text-md cursor-pointer transition duration-300 bg-orange-50 dark:hover:bg-gray-100 py-2 rounded-md" />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 bg-sidebar min-h-screen">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
