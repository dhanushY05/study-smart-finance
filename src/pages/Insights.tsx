import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { 
  TrendingUp,
  TrendingDown, 
  Brain,
  Calendar,
  Target,
  DollarSign,
  ArrowRight,
  Lightbulb,
  BarChart3,
  PieChart as PieChartIcon,
  AlertCircle
} from "lucide-react"

const spendingForecast = [
  { month: "Sep '23", actual: 8200, predicted: null },
  { month: "Oct '23", actual: 7800, predicted: null },
  { month: "Nov '23", actual: 9100, predicted: null },
  { month: "Dec '23", actual: 12500, predicted: null },
  { month: "Jan '24", actual: 8900, predicted: null },
  { month: "Feb '24", actual: null, predicted: 9200 },
  { month: "Mar '24", actual: null, predicted: 8800 },
  { month: "Apr '24", actual: null, predicted: 9500 },
  { month: "May '24", actual: null, predicted: 9100 }
]

const categoryBreakdown = [
  { name: "Food & Dining", value: 4450, color: "#3b82f6" },
  { name: "Transportation", value: 2890, color: "#10b981" },
  { name: "Education", value: 2350, color: "#f59e0b" },
  { name: "Entertainment", value: 1649, color: "#ef4444" },
  { name: "Shopping", value: 2100, color: "#8b5cf6" },
  { name: "Others", value: 450, color: "#6b7280" }
]

const weeklyTrends = [
  { week: "Week 1", spending: 3200, budget: 3000 },
  { week: "Week 2", spending: 2800, budget: 3000 },
  { week: "Week 3", spending: 3500, budget: 3000 },
  { week: "Week 4", spending: 2900, budget: 3000 }
]

const insights = [
  {
    title: "Spending Pattern Alert",
    type: "warning",
    description: "Your spending will likely exceed budget by ₹2,300 in February if current trends continue.",
    confidence: 87,
    actionable: true,
    suggestion: "Reduce dining out by 25% to stay within budget"
  },
  {
    title: "Savings Opportunity",
    type: "success",
    description: "You can save ₹1,800/month by switching to a student transportation pass.",
    confidence: 95,
    actionable: true,
    suggestion: "Apply for student metro pass before month end"
  },
  {
    title: "Goal Achievement",
    type: "info",
    description: "At current saving rate, you'll reach your MacBook goal 3 weeks early.",
    confidence: 92,
    actionable: false,
    suggestion: "Consider increasing emergency fund contribution"
  },
  {
    title: "Seasonal Trend",
    type: "info",
    description: "Entertainment spending typically increases 40% during exam season due to stress spending.",
    confidence: 78,
    actionable: true,
    suggestion: "Plan free stress-relief activities for upcoming exams"
  }
]

const comparisons = [
  {
    title: "This Semester vs Last Semester",
    current: 45600,
    previous: 52300,
    change: -12.8,
    category: "Total Spending"
  },
  {
    title: "Food Spending vs Peer Average",
    current: 4450,
    previous: 3800,
    change: +17.1,
    category: "Food & Dining"
  },
  {
    title: "Savings Rate vs Recommended",
    current: 15.5,
    previous: 20.0,
    change: -22.5,
    category: "Savings %"
  }
]

const getInsightColor = (type: string) => {
  switch (type) {
    case "warning": return "warning"
    case "success": return "success"
    case "info": return "secondary"
    default: return "muted"
  }
}

export default function Insights() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Insights Hub</h1>
        <p className="text-muted-foreground">
          Predictive analytics and personalized financial recommendations powered by AI
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AI Confidence</p>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-success">+5% this month</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Predicted Savings</p>
                <p className="text-2xl font-bold">₹8,200</p>
                <p className="text-sm text-muted-foreground">Next month</p>
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
                <p className="text-sm text-muted-foreground">Risk Score</p>
                <p className="text-2xl font-bold">3.2/10</p>
                <p className="text-sm text-success">Low risk</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Insights</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-warning">3 require action</p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Generated Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className={`p-6 rounded-lg border border-${getInsightColor(insight.type)}/20 bg-${getInsightColor(insight.type)}/5`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <Badge variant="outline" className={`bg-${getInsightColor(insight.type)}/10 text-${getInsightColor(insight.type)} border-${getInsightColor(insight.type)}/20`}>
                        {insight.confidence}% confident
                      </Badge>
                      {insight.actionable && (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Actionable
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{insight.description}</p>
                    
                    {/* AI Suggestion */}
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary text-sm">Recommended Action</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{insight.suggestion}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary ml-4">
                    View Details
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Predictive Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spending Forecast */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Spending Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={spendingForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  name="Actual"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="hsl(var(--warning))" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Predicted"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Analysis */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5" />
              Category Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`₹${value}`, 'Amount']}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Trend Comparisons */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Trend Comparisons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map((comp, index) => (
              <div key={index} className="p-4 rounded-lg border border-border/50 bg-card/50">
                <h4 className="font-medium mb-2">{comp.title}</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Current</span>
                  <span className="font-semibold">
                    {comp.category.includes('%') ? `${comp.current}%` : `₹${comp.current.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Previous</span>
                  <span className="text-muted-foreground">
                    {comp.category.includes('%') ? `${comp.previous}%` : `₹${comp.previous.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {comp.change > 0 ? (
                    <TrendingUp className="h-4 w-4 text-destructive" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-success" />
                  )}
                  <span className={`font-medium ${comp.change > 0 ? 'text-destructive' : 'text-success'}`}>
                    {comp.change > 0 ? '+' : ''}{comp.change.toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Performance */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Weekly Performance vs Budget
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="week" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="budget" fill="hsl(var(--muted))" name="Budget" />
              <Bar dataKey="spending" fill="hsl(var(--primary))" name="Actual Spending" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}