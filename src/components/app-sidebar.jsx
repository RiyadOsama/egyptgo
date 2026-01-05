import Link from "next/link";
import { PersonStanding, LayoutDashboard,LocateIcon, Package2Icon, PlaneIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { usePathname } from "next/navigation";
import LogoutButton from "./logout.button";

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Manage Destinations",
    icon: LocateIcon,
    href: "/dashboard/destinations",
  },
  {
    title: "Manage Packages",
    icon: Package2Icon,
    href: "/dashboard/packs",
  },
  {
    title: "Add New Admin",
    icon: PersonStanding,
    href: "/dashboard/create-admin",
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="px-6 py-4 flex flex-row items-center gap-2">
        <PlaneIcon className="w-8 h-8 text-primary" />
        <h2 className="text-xl font-semibold">TWU</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      pathname === item.href
                        ? "bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-orange-700"
                        : "hover:bg-primary/10 hover:text-primary"
                    } rounded-md text-md transition duration-400`}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-6 py-4">
        <LogoutButton className="w-full text-black text-md cursor-pointer transition duration-300 hover:bg-orange-50 py-2 rounded-md"/>
      </SidebarFooter>
    </Sidebar>
  );
}
