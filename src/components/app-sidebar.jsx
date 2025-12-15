import Link from "next/link"
import { PersonStanding, LayoutDashboard, PlaneIcon } from "lucide-react"
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
    SidebarMenuItem 
} from "./ui/sidebar"
import { usePathname } from "next/navigation"

const items = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard'
    },
    {
        title: 'Manage Destinations',
        icon: PersonStanding,
        href: '/dashboard/destinations'
    },
    {
        title: 'Manage Packages',
        icon: PersonStanding,
        href: '/dashboard/packs'
    }
]


export default function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar>
            <SidebarHeader className="border-b px-6 py-4 flex flex-row items-center gap-2">
                <PlaneIcon className="w-8 h-8 text-orange-600"/>
                <h2 className="text-xl font-semibold">TWU</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild 
                                        className={`${pathname === item.href ? 'bg-orange-600 text-white hover:bg-orange-700 hover:text-white' : 'hover:bg-orange-100'} rounded-md text-md transition duration-400`}
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
            <SidebarFooter className="border-t px-6 py-4">
                <p className="text-xs text-muted-foreground">Admin Dashboard v1.0</p>
            </SidebarFooter>
        </Sidebar>
    )
}