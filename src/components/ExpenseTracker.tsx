import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Receipt,
  Search,
  Coffee,
  Car,
  ShoppingBag,
  Gamepad2,
  Home,
  BookOpen,
  Briefcase,
  Wallet,
  HeartPulse,
  GraduationCap,
  Trash2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useTransactions, useDeleteTransaction, Transaction } from "@/hooks/useTransactions";
import { AddTransactionDialog } from "@/components/AddTransactionDialog";
import { format } from "date-fns";

const CATEGORY_ICON: Record<string, typeof Coffee> = {
  Food: Coffee,
  Travel: Car,
  Shopping: ShoppingBag,
  Entertainment: Gamepad2,
  Housing: Home,
  Books: BookOpen,
  Tuition: GraduationCap,
  Health: HeartPulse,
  Allowance: Wallet,
  "Part-time Job": Briefcase,
  Other: Receipt,
};

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

export function ExpenseTracker() {
  const { data, isLoading } = useTransactions();
  const del = useDeleteTransaction();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(8);

  const filtered = useMemo(() => {
    const list = data ?? [];
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(
      (t) =>
        t.category.toLowerCase().includes(q) ||
        (t.description ?? "").toLowerCase().includes(q),
    );
  }, [data, search]);

  return (
    <Card className="hover-lift glass-card border-border/50">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Your latest expenses and income
            </p>
          </div>
          <AddTransactionDialog />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 mb-6">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by category or description..."
            className="bg-transparent border-0 outline-none text-sm flex-1"
          />
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-16 rounded-lg" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Receipt className="h-12 w-12 text-muted-foreground/40 mb-3" />
            <p className="font-medium">No transactions yet</p>
            <p className="text-sm text-muted-foreground mb-4">
              {search ? "Nothing matches your search." : "Add your first transaction to get started."}
            </p>
            {!search && <AddTransactionDialog />}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.slice(0, visible).map((t) => (
              <TransactionRow key={t.id} tx={t} onDelete={() => del.mutate(t.id)} />
            ))}
          </div>
        )}

        {filtered.length > visible && (
          <div className="text-center mt-6">
            <Button variant="outline" className="w-full" onClick={() => setVisible((v) => v + 8)}>
              Load more ({filtered.length - visible} remaining)
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TransactionRow({ tx, onDelete }: { tx: Transaction; onDelete: () => void }) {
  const Icon = CATEGORY_ICON[tx.category] ?? Receipt;
  const isIncome = tx.type === "income";

  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-muted/30 transition-colors">
      <div className="flex items-center gap-4 min-w-0">
        <div className={`p-2.5 rounded-lg ${isIncome ? "bg-success/10" : "bg-primary/10"}`}>
          {isIncome
            ? <ArrowDownRight className="h-5 w-5 text-success" />
            : <Icon className="h-5 w-5 text-primary" />}
        </div>
        <div className="min-w-0">
          <p className="font-medium truncate">{tx.description || tx.category}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="text-xs">{tx.category}</Badge>
            <span className="text-xs text-muted-foreground">
              {format(new Date(tx.occurred_at), "MMM d, yyyy")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className={`font-semibold ${isIncome ? "text-success" : "text-destructive"}`}>
          {isIncome ? "+" : "−"}{formatINR(Number(tx.amount))}
        </span>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete transaction?</AlertDialogTitle>
              <AlertDialogDescription>
                This permanently removes "{tx.description || tx.category}" from your history.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
