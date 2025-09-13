import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  PieChart as PieChartIcon, 
  TrendingUp,
  Filter,
  Download
} from "lucide-react"

// Mock chart data - in a real app this would come from your data source
const spendingTrendData = [
  { month: "Aug", spending: 8500, budget: 12000 },
  { month: "Sep", spending: 9200, budget: 12000 },
  { month: "Oct", spending: 7800, budget: 12000 },
  { month: "Nov", spending: 10500, budget: 12000 },
  { month: "Dec", spending: 8900, budget: 12000 },
  { month: "Jan", spending: 8450, budget: 12000 }
]

const categoryData = [
  { category: "Food & Dining", amount: 3200, percentage: 38, color: "primary" },
  { category: "Transportation", amount: 1800, percentage: 21, color: "secondary" },
  { category: "Entertainment", amount: 1400, percentage: 17, color: "success" },
  { category: "Shopping", amount: 1200, percentage: 14, color: "warning" },
  { category: "Bills & Utilities", amount: 850, percentage: 10, color: "destructive" }
]

export function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      {/* Chart Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Track your spending patterns and trends</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Trends Chart */}
        <Card className="hover-lift glass-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Spending Trends
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Monthly spending vs budget comparison
            </p>
          </CardHeader>
          <CardContent>
            {/* Mock Bar Chart */}
            <div className="space-y-4">
              {spendingTrendData.map((data, index) => (
                <div key={data.month} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{data.month}</span>
                    <div className="flex gap-4">
                      <span className="text-primary">₹{data.spending.toLocaleString()}</span>
                      <span className="text-muted-foreground">₹{data.budget.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${(data.spending / data.budget) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-primary/5 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-medium text-success">5.2% improvement</span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="hover-lift glass-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5" />
              Category Breakdown
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              This month's spending by category
            </p>
          </CardHeader>
          <CardContent>
            {/* Mock Pie Chart Data */}
            <div className="space-y-4">
              {/* Circular Progress Representation */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-muted">
                  {/* This would be replaced with an actual pie chart in a real implementation */}
                  <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">₹8,450</div>
                      <div className="text-sm text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Category List */}
              <div className="space-y-3">
                {categoryData.map((item, index) => (
                  <div key={item.category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-${item.color}`} />
                      <span className="text-sm font-medium">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">₹{item.amount.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights Section */}
      <Card className="hover-lift glass-card border-border/50">
        <CardHeader>
          <CardTitle>AI-Powered Insights</CardTitle>
          <p className="text-sm text-muted-foreground">
            Personalized recommendations based on your spending patterns
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <span className="font-medium text-success">Great Progress!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You've reduced dining expenses by 15% this month. Keep it up!
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-5 w-5 text-warning" />
                <span className="font-medium text-warning">Budget Alert</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You're approaching 85% of your entertainment budget for this month.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <PieChartIcon className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">Savings Tip</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Consider setting up automatic transfers to boost your laptop fund.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}