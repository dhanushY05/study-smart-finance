import { useState } from "react"
import { 
  Home, 
  BarChart3, 
  Target, 
  Receipt, 
  Settings, 
  CreditCard,
  TrendingUp,
  PieChart,
  Wallet
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

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
} from "@/components/ui/sidebar"

const navigationItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: Home,
    badge: null 
  },
  { 
    title: "Analytics", 
    url: "/analytics", 
    icon: BarChart3,
    badge: null 
  },
  { 
    title: "Goals", 
    url: "/goals", 
    icon: Target,
    badge: "3" 
  },
  { 
    title: "Transactions", 
    url: "/transactions", 
    icon: Receipt,
    badge: null 
  },
]

const quickActions = [
  { 
    title: "Budget Planner", 
    url: "/budget", 
    icon: Wallet,
    badge: null 
  },
  { 
    title: "Expense Tracker", 
    url: "/expenses", 
    icon: CreditCard,
    badge: null 
  },
  { 
    title: "Reports", 
    url: "/reports", 
    icon: TrendingUp,
    badge: null 
  },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  
  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-sm" 
      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"

  return (
    <Sidebar
      className={`border-r border-sidebar-border transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar p-4">
        {/* Logo Section */}
        <div className="mb-8 flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <PieChart className="h-6 w-6" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">FinanceManager</h2>
              <p className="text-xs text-sidebar-foreground/60">Student Edition</p>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup className="mb-6">
          <SidebarGroupLabel className="text-sidebar-foreground/80 text-sm font-medium mb-2">
            {!isCollapsed && "Main Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClassName}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!isCollapsed && (
                        <>
                          <span className="ml-3">{item.title}</span>
                          {item.badge && (
                            <span className="ml-auto rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        <SidebarGroup className="mb-6">
          <SidebarGroupLabel className="text-sidebar-foreground/80 text-sm font-medium mb-2">
            {!isCollapsed && "Quick Actions"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {quickActions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClassName}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!isCollapsed && (
                        <span className="ml-3">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings at bottom */}
        <div className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="rounded-lg">
                <NavLink 
                  to="/settings" 
                  className={getNavClassName}
                >
                  <Settings className="h-5 w-5 shrink-0" />
                  {!isCollapsed && <span className="ml-3">Settings</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}