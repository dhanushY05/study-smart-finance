import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Plus, 
  Target, 
  TrendingUp,
  Calendar,
  Laptop,
  Car,
  Plane,
  Shield,
  MoreHorizontal,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react"

const goals = [
  {
    id: 1,
    title: "MacBook Pro M3",
    description: "For coding and design projects",
    target: 120000,
    current: 78000,
    progress: 65,
    deadline: "June 2024",
    monthlyTarget: 7000,
    status: "on_track",
    icon: Laptop,
    color: "primary",
    daysLeft: 92,
    aiSuggestion: "Increase monthly savings by ₹500 to reach goal 2 weeks early"
  },
  {
    id: 2,
    title: "Emergency Fund",
    description: "6 months of expenses coverage",
    target: 50000,
    current: 32500,
    progress: 65,
    deadline: "December 2024",
    monthlyTarget: 2500,
    status: "on_track", 
    icon: Shield,
    color: "success",
    daysLeft: 245,
    aiSuggestion: "You're ahead of schedule! Consider increasing to 8 months coverage"
  },
  {
    id: 3,
    title: "Europe Trip",
    description: "Summer vacation with friends",
    target: 80000,
    current: 28000,
    progress: 35,
    deadline: "July 2024",
    monthlyTarget: 8667,
    status: "behind",
    icon: Plane,
    color: "warning",
    daysLeft: 123,
    aiSuggestion: "Need ₹2,167 more per month. Try reducing dining out by 30%"
  },
  {
    id: 4,
    title: "Used Car Fund",
    description: "Transportation for internship",
    target: 200000,
    current: 45000,
    progress: 22.5,
    deadline: "March 2025",
    monthlyTarget: 15500,
    status: "at_risk",
    icon: Car,
    color: "destructive",
    daysLeft: 365,
    aiSuggestion: "Consider part-time work or increasing budget from ₹12k to ₹15k"
  }
]

const achievements = [
  {
    title: "First ₹10,000 Saved",
    date: "December 2023",
    icon: Target
  },
  {
    title: "Consistent Saver - 3 Months",
    date: "January 2024", 
    icon: CheckCircle
  },
  {
    title: "Budget Master",
    date: "January 2024",
    icon: TrendingUp
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "on_track": return "success"
    case "behind": return "warning" 
    case "at_risk": return "destructive"
    default: return "secondary"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "on_track": return CheckCircle
    case "behind": return Clock
    case "at_risk": return AlertCircle
    default: return Target
  }
}

export default function Goals() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Goals & Savings</h1>
          <p className="text-muted-foreground">
            Track your financial goals with AI-powered recommendations
          </p>
        </div>
        <Button variant="hero" size="default">
          <Plus className="h-4 w-4 mr-2" />
          Create New Goal
        </Button>
      </div>

      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Saved</p>
                <p className="text-2xl font-bold">₹1,83,500</p>
                <p className="text-sm text-success">+₹12,500 this month</p>
              </div>
              <div className="p-3 bg-success/10 rounded-lg">
                <Target className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Goals</p>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">2 on track</p>
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
                <p className="text-sm text-muted-foreground">Monthly Target</p>
                <p className="text-2xl font-bold">₹33,667</p>
                <p className="text-sm text-warning">62% achieved</p>
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
                <p className="text-sm text-muted-foreground">Avg. Progress</p>
                <p className="text-2xl font-bold">47%</p>
                <p className="text-sm text-muted-foreground">Across all goals</p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Target className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Goals */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Active Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {goals.map((goal) => {
              const StatusIcon = getStatusIcon(goal.status)
              return (
                <div key={goal.id} className="p-6 rounded-lg border border-border/50 bg-card/50 space-y-4">
                  {/* Goal Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-${goal.color}/10`}>
                        <goal.icon className={`h-6 w-6 text-${goal.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{goal.title}</h3>
                          <Badge 
                            variant="outline" 
                            className={`bg-${getStatusColor(goal.status)}/10 text-${getStatusColor(goal.status)} border-${getStatusColor(goal.status)}/20`}
                          >
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {goal.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{goal.description}</p>
                        <p className="text-sm text-muted-foreground mt-1">Target: {goal.deadline} • {goal.daysLeft} days left</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Progress */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        ₹{goal.current.toLocaleString()} of ₹{goal.target.toLocaleString()}
                      </span>
                      <span className="text-sm font-semibold">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Monthly target: ₹{goal.monthlyTarget.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        ₹{(goal.target - goal.current).toLocaleString()} remaining
                      </span>
                    </div>
                  </div>

                  {/* AI Suggestion */}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">AI Recommendation</h4>
                        <p className="text-sm text-muted-foreground">{goal.aiSuggestion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-success/5 border border-success/20">
                <div className="p-2 bg-success/10 rounded-lg">
                  <achievement.icon className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-medium text-success">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}