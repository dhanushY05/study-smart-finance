import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart3, PieChart as PieChartIcon } from "lucide-react";
import { useTransactions } from "@/hooks/useTransactions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { format, startOfMonth, subMonths, isSameMonth } from "date-fns";

const CATEGORY_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--success))",
  "hsl(var(--warning))",
  "hsl(var(--destructive))",
  "hsl(var(--accent-foreground))",
  "hsl(var(--muted-foreground))",
];

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

export function AnalyticsCharts() {
  const { data, isLoading } = useTransactions();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <div className="grid lg:grid-cols-2 gap-6">
          <Skeleton className="h-80 rounded-xl" />
          <Skeleton className="h-80 rounded-xl" />
        </div>
      </div>
    );
  }

  const txs = data ?? [];

  // Monthly trend — last 6 months
  const months = Array.from({ length: 6 }, (_, i) => startOfMonth(subMonths(new Date(), 5 - i)));
  const monthly = months.map((m) => {
    const inMonth = txs.filter((t) => isSameMonth(new Date(t.occurred_at), m));
    return {
      month: format(m, "MMM"),
      spending: inMonth.filter((t) => t.type === "expense").reduce((a, b) => a + Number(b.amount), 0),
      income: inMonth.filter((t) => t.type === "income").reduce((a, b) => a + Number(b.amount), 0),
    };
  });

  // Category breakdown — current month expenses
  const currentMonth = startOfMonth(new Date());
  const monthExpenses = txs.filter(
    (t) => t.type === "expense" && isSameMonth(new Date(t.occurred_at), currentMonth),
  );
  const categoryTotals = new Map<string, number>();
  for (const t of monthExpenses) {
    categoryTotals.set(t.category, (categoryTotals.get(t.category) ?? 0) + Number(t.amount));
  }
  const categoryData = Array.from(categoryTotals.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
  const totalMonth = categoryData.reduce((a, b) => a + b.value, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Analytics</h2>
        <p className="text-muted-foreground">Insights from your real transaction history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover-lift glass-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" /> Monthly Trend
            </CardTitle>
            <p className="text-sm text-muted-foreground">Income vs spending over the last 6 months</p>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthly}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `₹${v / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: 8,
                    }}
                    formatter={(value: number) => formatINR(value)}
                  />
                  <Legend />
                  <Bar dataKey="income" fill="hsl(var(--success))" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="spending" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift glass-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5" /> Category Breakdown
            </CardTitle>
            <p className="text-sm text-muted-foreground">This month's spending by category</p>
          </CardHeader>
          <CardContent>
            {categoryData.length === 0 ? (
              <div className="h-72 flex flex-col items-center justify-center text-center text-muted-foreground">
                <PieChartIcon className="h-10 w-10 mb-3 opacity-40" />
                <p>No expenses yet this month.</p>
                <p className="text-sm">Add a transaction to see your breakdown.</p>
              </div>
            ) : (
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={55}
                      outerRadius={95}
                      paddingAngle={2}
                    >
                      {categoryData.map((_, i) => (
                        <Cell key={i} fill={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: 8,
                      }}
                      formatter={(value: number, name) => [
                        `${formatINR(value)} (${totalMonth ? ((value / totalMonth) * 100).toFixed(0) : 0}%)`,
                        name,
                      ]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
