import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, TrendingDown, Wallet, CreditCard, PiggyBank, Activity } from "lucide-react";
import { useTransactions } from "@/hooks/useTransactions";
import { AddTransactionDialog } from "@/components/AddTransactionDialog";
import { startOfMonth, subMonths, isAfter } from "date-fns";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

export function DashboardCards() {
  const { data: txs, isLoading } = useTransactions();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
    );
  }

  const list = txs ?? [];
  const thisMonthStart = startOfMonth(new Date());
  const lastMonthStart = startOfMonth(subMonths(new Date(), 1));

  const sum = (arr: typeof list, type: "expense" | "income") =>
    arr.filter((t) => t.type === type).reduce((a, b) => a + Number(b.amount), 0);

  const thisMonth = list.filter((t) => isAfter(new Date(t.occurred_at), thisMonthStart));
  const lastMonth = list.filter((t) => {
    const d = new Date(t.occurred_at);
    return isAfter(d, lastMonthStart) && !isAfter(d, thisMonthStart);
  });

  const totalIncome = sum(list, "income");
  const totalExpense = sum(list, "expense");
  const balance = totalIncome - totalExpense;

  const monthExpense = sum(thisMonth, "expense");
  const lastMonthExpense = sum(lastMonth, "expense");
  const expenseDelta = lastMonthExpense > 0
    ? ((monthExpense - lastMonthExpense) / lastMonthExpense) * 100
    : 0;

  const monthIncome = sum(thisMonth, "income");
  const monthSavings = monthIncome - monthExpense;

  const cards = [
    {
      title: "Total Balance",
      value: formatINR(balance),
      icon: Wallet,
      sub: `${list.length} transactions`,
      tone: "primary" as const,
    },
    {
      title: "This Month Spending",
      value: formatINR(monthExpense),
      icon: CreditCard,
      sub: lastMonthExpense > 0
        ? `${expenseDelta >= 0 ? "+" : ""}${expenseDelta.toFixed(1)}% vs last month`
        : "No prior month data",
      tone: expenseDelta > 0 ? ("destructive" as const) : ("success" as const),
      trend: expenseDelta >= 0 ? "up" : "down",
    },
    {
      title: "This Month Income",
      value: formatINR(monthIncome),
      icon: Activity,
      sub: `${thisMonth.filter((t) => t.type === "income").length} entries`,
      tone: "secondary" as const,
    },
    {
      title: "Monthly Savings",
      value: formatINR(monthSavings),
      icon: PiggyBank,
      sub: monthIncome > 0 ? `${((monthSavings / monthIncome) * 100).toFixed(0)}% saved` : "Add income",
      tone: monthSavings >= 0 ? ("success" as const) : ("destructive" as const),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Live overview of your finances</p>
        <AddTransactionDialog />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="hover-lift glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
                <div className={`p-2 rounded-lg bg-${card.tone}/10`}>
                  <Icon className={`h-5 w-5 text-${card.tone}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{card.value}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  {card.trend === "up" && <TrendingUp className="h-4 w-4 text-destructive mr-1" />}
                  {card.trend === "down" && <TrendingDown className="h-4 w-4 text-success mr-1" />}
                  <span>{card.sub}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
