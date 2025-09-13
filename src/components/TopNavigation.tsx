import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Bell, 
  Search, 
  User, 
  Menu,
  PieChart,
  AlertTriangle
} from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Dashboard", url: "/" },
  { title: "Expenses", url: "/expenses" },
  { title: "Goals", url: "/goals" },
  { title: "Budget Alerts", url: "/alerts", hasAlert: true },
  { title: "Insights", url: "/insights" },
  { title: "Support", url: "/support" }
]

export function TopNavigation() {
  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActive 
        ? "bg-primary text-primary-foreground shadow-sm" 
        : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Mobile Sidebar Trigger */}
          <SidebarTrigger className="lg:hidden">
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <PieChart className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold">FinanceManager</h1>
              <p className="text-xs text-muted-foreground">Student Edition</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <NavLink 
                key={item.title}
                to={item.url} 
                end 
                className={getNavClassName}
              >
                <div className="flex items-center gap-2">
                  {item.title}
                  {item.hasAlert && (
                    <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      3
                    </Badge>
                  )}
                </div>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search Bar - Hidden on small screens */}
          <div className="hidden md:flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 min-w-[280px]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input 
              placeholder="Search transactions, goals, insights..." 
              className="bg-transparent border-0 outline-none text-sm flex-1"
            />
          </div>

          {/* Quick Action */}
          <Button variant="hero" size="sm" className="hidden sm:flex">
            Add Expense
          </Button>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
              3
            </Badge>
          </Button>

          {/* User Profile */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}