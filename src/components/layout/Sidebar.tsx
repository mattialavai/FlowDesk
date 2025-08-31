import { Users, LayoutDashboard, Settings } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

// Import logo from public folder (or use /logo.png directly in <img>)
import logo from '/logo.png';

const menuItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Users', url: '/users', icon: Users },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === 'collapsed';

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar
      className={cn(
        'border-r border-sidebar-border bg-sidebar transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <SidebarContent className="p-4">
        {/* Logo Section */}
        <div className="mb-8">
          <div
            className={cn(
              'flex items-center gap-3 px-2',
              collapsed && 'justify-center'
            )}
          >
            <img
              src={logo} // ✅ works with Vite
              alt="FlowDesk Logo"
              className="w-8 h-8 rounded-md"
            />
            {!collapsed && (
              <span className="font-semibold text-sidebar-foreground">
                FlowDesk
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel
            className={cn(
              'text-sidebar-foreground/70 text-xs font-medium uppercase tracking-wider',
              collapsed && 'sr-only'
            )}
          >
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                        isActive(item.url)
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-sidebar-foreground'
                      )}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
