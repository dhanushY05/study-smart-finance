import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Plus, 
  Receipt, 
  Filter,
  Search,
  Coffee,
  Car,
  ShoppingBag,
  Gamepad2,
  Home,
  BookOpen,
  MoreHorizontal,
  Upload,
  Calendar,
  TrendingUp,
  TrendingDown
} from "lucide-react"

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: "₹350",
    category: "Food & Dining",
    date: "2024-01-15",
    time: "10:30 AM",
    type: "debit",
    icon: Coffee,
    color: "primary",
    aiConfidence: 95
  },
  {
    id: 2,
    description: "Uber Ride to University",
    amount: "₹245",
    category: "Transportation",
    date: "2024-01-15",
    time: "09:15 AM", 
    type: "debit",
    icon: Car,
    color: "secondary",
    aiConfidence: 98
  },
  {
    id: 3,
    description: "Amazon - Study Materials",
    amount: "₹1,250",
    category: "Education",
    date: "2024-01-14",
    time: "03:22 PM",
    type: "debit",
    icon: BookOpen,
    color: "success",
    aiConfidence: 87
  },
  {
    id: 4,
    description: "Netflix Subscription",
    amount: "₹649",
    category: "Entertainment",
    date: "2024-01-14",
    time: "02:10 PM",
    type: "debit",
    icon: Gamepad2,
    color: "warning",
    aiConfidence: 100
  },
  {
    id: 5,
    description: "Hostel Mess Bill",
    amount: "₹3,200",
    category: "Food & Dining",
    date: "2024-01-13",
    time: "06:45 PM",
    type: "debit",
    icon: Home,
    color: "primary",
    aiConfidence: 92
  },
  {
    id: 6,
    description: "Myntra - Clothing",
    amount: "₹2,100",
    category: "Shopping",
    date: "2024-01-13",
    time: "11:20 AM",
    type: "debit",
    icon: ShoppingBag,
    color: "destructive",
    aiConfidence: 89
  }
]

const categoryStats = [
  { name: "Food & Dining", amount: "₹4,450", percentage: 32, trend: "up", change: "+8%" },
  { name: "Transportation", amount: "₹2,890", percentage: 21, trend: "down", change: "-5%" },
  { name: "Education", amount: "₹2,350", percentage: 17, trend: "up", change: "+12%" },
  { name: "Entertainment", amount: "₹1,649", percentage: 12, trend: "up", change: "+3%" },
  { name: "Shopping", amount: "₹2,100", percentage: 15, trend: "down", change: "-2%" },
  { name: "Others", amount: "₹450", percentage: 3, trend: "neutral", change: "0%" }
]

export default function Expenses() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Expense Manager</h1>
        <p className="text-muted-foreground">
          Track and categorize your spending with AI-powered automation
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">₹13,889</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-destructive" />
                  <span className="text-sm text-destructive">+15% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <Receipt className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Daily Spend</p>
                <p className="text-2xl font-bold">₹463</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">-8% this week</span>
                </div>
              </div>
              <div className="p-3 bg-success/10 rounded-lg">
                <Calendar className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AI Accuracy</p>
                <p className="text-2xl font-bold">94%</p>
                <p className="text-sm text-muted-foreground mt-1">Category prediction</p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Category Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryStats.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/50">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm font-semibold">{category.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      {category.trend === "up" && <TrendingUp className="h-3 w-3 text-destructive" />}
                      {category.trend === "down" && <TrendingDown className="h-3 w-3 text-success" />}
                      <span className={`text-xs ${
                        category.trend === "up" ? "text-destructive" : 
                        category.trend === "down" ? "text-success" : "text-muted-foreground"
                      }`}>
                        {category.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Expense Manager */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                Recent Transactions
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                AI-categorized expenses with confidence scoring
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
              <Button variant="hero" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Expense
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 flex-1">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search transactions..." 
                className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food & Dining</SelectItem>
                <SelectItem value="transport">Transportation</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Transactions List */}
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div 
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg bg-${transaction.color}/10`}>
                    <transaction.icon className={`h-5 w-5 text-${transaction.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{transaction.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {transaction.aiConfidence}% AI
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant="outline" 
                        className={`text-xs bg-${transaction.color}/10 text-${transaction.color} border-${transaction.color}/20`}
                      >
                        {transaction.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">• {transaction.date} at {transaction.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-destructive">-{transaction.amount}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            <Button variant="outline" className="w-full">
              Load More Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}