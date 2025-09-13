import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  MoreHorizontal
} from "lucide-react"

const recentTransactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: "₹350",
    category: "Food & Dining",
    date: "Jan 12",
    type: "debit",
    icon: Coffee,
    color: "primary"
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: "₹245",
    category: "Transportation",
    date: "Jan 12",
    type: "debit",
    icon: Car,
    color: "secondary"
  },
  {
    id: 3,
    description: "Amazon Purchase",
    amount: "₹1,250",
    category: "Shopping",
    date: "Jan 11",
    type: "debit",
    icon: ShoppingBag,
    color: "warning"
  },
  {
    id: 4,
    description: "Netflix Subscription",
    amount: "₹649",
    category: "Entertainment",
    date: "Jan 10",
    type: "debit",
    icon: Gamepad2,
    color: "success"
  },
  {
    id: 5,
    description: "Rent Payment",
    amount: "₹15,000",
    category: "Housing",
    date: "Jan 10",
    type: "debit",
    icon: Home,
    color: "destructive"
  },
  {
    id: 6,
    description: "Textbook Purchase",
    amount: "₹2,400",
    category: "Education",
    date: "Jan 9",
    type: "debit",
    icon: BookOpen,
    color: "primary"
  }
]

const categoryColors = {
  "Food & Dining": "primary",
  "Transportation": "secondary", 
  "Shopping": "warning",
  "Entertainment": "success",
  "Housing": "destructive",
  "Education": "primary"
}

export function ExpenseTracker() {
  return (
    <Card className="hover-lift glass-card border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              AI-categorized expenses from the last 7 days
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="hero" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 mb-6">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input 
            placeholder="Search transactions..." 
            className="bg-transparent border-0 outline-none text-sm flex-1"
          />
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div 
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-lg bg-${transaction.color}/10`}>
                  <transaction.icon className={`h-5 w-5 text-${transaction.color}`} />
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      variant="outline" 
                      className={`text-xs bg-${transaction.color}/10 text-${transaction.color} border-${transaction.color}/20`}
                    >
                      {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">• {transaction.date}</span>
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

        {/* AI Insights Banner */}
        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Receipt className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-primary mb-1">Smart Categorization</h4>
              <p className="text-sm text-muted-foreground mb-2">
                All transactions have been automatically categorized using AI. Review and confirm accuracy.
              </p>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-primary">
                  Review Categories
                </Button>
                <Button variant="ghost" size="sm" className="text-primary">
                  Set Rules
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <Button variant="outline" className="w-full">
            Load More Transactions
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}