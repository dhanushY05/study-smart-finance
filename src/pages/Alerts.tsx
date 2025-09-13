import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  AlertTriangle, 
  TrendingUp,
  CreditCard,
  Calendar,
  Bell,
  Settings,
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
  Lightbulb
} from "lucide-react"

const activeAlerts = [
  {
    id: 1,
    title: "Budget Exceeded: Food & Dining",
    message: "You've spent ₹4,450 of your ₹3,500 monthly food budget",
    type: "critical",
    category: "Food & Dining",
    amount: "₹950 over budget",
    timeAgo: "2 hours ago",
    suggestion: "Try cooking at home 3 more days this week to save ₹800",
    icon: AlertTriangle
  },
  {
    id: 2,
    title: "Approaching Budget Limit: Entertainment",
    message: "85% of your entertainment budget has been used this month",
    type: "warning",
    category: "Entertainment",
    amount: "₹1,360 of ₹1,600",
    timeAgo: "1 day ago",
    suggestion: "Consider free campus events for the rest of the month",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Unusual Spending Pattern",
    message: "Your transportation costs are 40% higher than usual this week",
    type: "info",
    category: "Transportation",
    amount: "₹1,200 vs avg ₹850",
    timeAgo: "3 days ago",
    suggestion: "Check if you can use campus shuttle more frequently",
    icon: Clock
  }
]

const upcomingBills = [
  {
    title: "Hostel Rent Due",
    amount: "₹15,000",
    dueDate: "Jan 20",
    daysLeft: 5,
    status: "urgent",
    recurring: true
  },
  {
    title: "Internet Bill",
    amount: "₹899",
    dueDate: "Jan 25",
    daysLeft: 10,
    status: "upcoming",
    recurring: true
  },
  {
    title: "Credit Card Payment",
    amount: "₹3,450",
    dueDate: "Jan 28",
    daysLeft: 13,
    status: "upcoming",
    recurring: false
  },
  {
    title: "Spotify Premium",
    amount: "₹199",
    dueDate: "Feb 2",
    daysLeft: 18,
    status: "scheduled",
    recurring: true
  }
]

const recommendations = [
  {
    title: "Optimize Food Spending",
    description: "You could save ₹1,200/month by meal prepping and reducing takeout orders",
    impact: "High",
    effort: "Medium",
    savings: "₹1,200/month"
  },
  {
    title: "Transportation Efficiency",
    description: "Using campus shuttle instead of ride-shares could save ₹600/month",
    impact: "Medium",
    effort: "Low",
    savings: "₹600/month"
  },
  {
    title: "Subscription Audit",
    description: "Cancel unused Netflix, Spotify duplicate, and gym memberships",
    impact: "Medium",
    effort: "Low",
    savings: "₹850/month"
  }
]

const getAlertColor = (type: string) => {
  switch (type) {
    case "critical": return "destructive"
    case "warning": return "warning"
    case "info": return "secondary"
    default: return "muted"
  }
}

const getBillStatusColor = (status: string) => {
  switch (status) {
    case "urgent": return "destructive"
    case "upcoming": return "warning"
    case "scheduled": return "success"
    default: return "muted"
  }
}

export default function Alerts() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Budget Alerts</h1>
          <p className="text-muted-foreground">
            Stay on track with smart spending notifications and recommendations
          </p>
        </div>
        <Button variant="outline" size="default">
          <Settings className="h-4 w-4 mr-2" />
          Alert Settings
        </Button>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-destructive">1 critical</p>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Budget Utilization</p>
                <p className="text-2xl font-bold">78%</p>
                <p className="text-sm text-warning">Above average</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Bills</p>
                <p className="text-2xl font-bold">₹19,548</p>
                <p className="text-sm text-muted-foreground">Next 30 days</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Potential Savings</p>
                <p className="text-2xl font-bold">₹2,650</p>
                <p className="text-sm text-success">Per month</p>
              </div>
              <div className="p-3 bg-success/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Active Alerts
            </CardTitle>
            <Button variant="ghost" size="sm">
              Mark All as Read
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className={`p-6 rounded-lg border-2 border-${getAlertColor(alert.type)}/20 bg-${getAlertColor(alert.type)}/5`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-${getAlertColor(alert.type)}/10`}>
                      <alert.icon className={`h-6 w-6 text-${getAlertColor(alert.type)}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{alert.title}</h3>
                        <Badge variant="outline" className={`bg-${getAlertColor(alert.type)}/10 text-${getAlertColor(alert.type)} border-${getAlertColor(alert.type)}/20`}>
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{alert.message}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="font-medium">{alert.amount}</span>
                        <span className="text-muted-foreground">• {alert.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* AI Suggestion */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">Smart Suggestion</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{alert.suggestion}</p>
                  <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                    View Details
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Bills */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Bills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{bill.title}</p>
                      {bill.recurring && (
                        <Badge variant="outline" className="text-xs">
                          Recurring
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Due {bill.dueDate} • {bill.daysLeft} days left</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{bill.amount}</p>
                    <Badge variant="outline" className={`text-xs bg-${getBillStatusColor(bill.status)}/10 text-${getBillStatusColor(bill.status)} border-${getBillStatusColor(bill.status)}/20`}>
                      {bill.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Money-Saving Recommendations */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Money-Saving Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{rec.title}</h4>
                    <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                      {rec.savings}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Impact: {rec.impact}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Effort: {rec.effort}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                      Learn More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}