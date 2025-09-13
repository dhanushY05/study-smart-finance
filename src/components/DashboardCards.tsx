import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Target, 
  CreditCard, 
  ArrowUpRight,
  DollarSign,
  Calendar,
  AlertCircle
} from "lucide-react"

const summaryCards = [
  {
    title: "Total Balance",
    value: "₹45,230",
    change: "+12.5%",
    trend: "up",
    icon: Wallet,
    description: "Across all accounts",
    color: "primary"
  },
  {
    title: "Monthly Spending",
    value: "₹8,450",
    change: "-5.2%",
    trend: "down",
    icon: CreditCard,
    description: "This month",
    color: "destructive"
  },
  {
    title: "Active Goals",
    value: "3",
    change: "+1",
    trend: "up",
    icon: Target,
    description: "Goals in progress",
    color: "secondary"
  },
  {
    title: "Monthly Budget",
    value: "₹12,000",
    change: "70% used",
    trend: "neutral",
    icon: DollarSign,
    description: "₹3,550 remaining",
    color: "warning"
  }
]

const upcomingBills = [
  {
    title: "Hostel Rent",
    amount: "₹15,000",
    dueDate: "Jan 15",
    status: "urgent"
  },
  {
    title: "Internet Bill",
    amount: "₹899",
    dueDate: "Jan 20",
    status: "upcoming"
  },
  {
    title: "Spotify Subscription",
    amount: "₹199",
    dueDate: "Jan 25",
    status: "upcoming"
  }
]

const recentGoals = [
  {
    title: "MacBook Pro",
    target: "₹1,20,000",
    current: "₹78,000",
    progress: 65,
    color: "primary"
  },
  {
    title: "Emergency Fund",
    target: "₹50,000",
    current: "₹32,500",
    progress: 65,
    color: "success"
  },
  {
    title: "Vacation Fund",
    target: "₹25,000",
    current: "₹8,750",
    progress: 35,
    color: "secondary"
  }
]

export function DashboardCards() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <Card key={index} className="hover-lift glass-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-${card.color}/10`}>
                <card.icon className={`h-5 w-5 text-${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{card.value}</div>
              <div className="flex items-center text-sm">
                {card.trend === "up" && (
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                )}
                {card.trend === "down" && (
                  <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                )}
                <span className={`font-medium ${
                  card.trend === "up" 
                    ? "text-success" 
                    : card.trend === "down" 
                    ? "text-destructive" 
                    : "text-muted-foreground"
                }`}>
                  {card.change}
                </span>
                <span className="text-muted-foreground ml-2">{card.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Secondary Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Bills */}
        <Card className="hover-lift glass-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Bills
              </CardTitle>
              <Button variant="ghost" size="sm">
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingBills.map((bill, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  {bill.status === "urgent" && (
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  )}
                  <div>
                    <p className="font-medium">{bill.title}</p>
                    <p className="text-sm text-muted-foreground">Due {bill.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{bill.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    bill.status === "urgent" 
                      ? "bg-destructive/10 text-destructive" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {bill.status}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Goals Progress */}
        <Card className="hover-lift glass-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Goal Progress
              </CardTitle>
              <Button variant="ghost" size="sm">
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{goal.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {goal.current} of {goal.target}
                    </p>
                  </div>
                  <span className="text-sm font-semibold">{goal.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-${goal.color} transition-all duration-500`}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}