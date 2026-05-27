import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useAddTransaction } from "@/hooks/useTransactions";

const CATEGORIES = [
  "Food",
  "Travel",
  "Tuition",
  "Books",
  "Entertainment",
  "Shopping",
  "Health",
  "Allowance",
  "Part-time Job",
  "Other",
];

const schema = z.object({
  type: z.enum(["expense", "income"]),
  amount: z.coerce.number().positive("Amount must be greater than 0").max(10_000_000),
  category: z.string().min(1).max(50),
  description: z.string().max(200).optional(),
  occurred_at: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  trigger?: React.ReactNode;
  defaultType?: "expense" | "income";
}

export function AddTransactionDialog({ trigger, defaultType = "expense" }: Props) {
  const [open, setOpen] = useState(false);
  const add = useAddTransaction();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: defaultType,
      amount: 0,
      category: "Food",
      description: "",
      occurred_at: new Date().toISOString().slice(0, 10),
    },
  });

  const onSubmit = async (values: FormValues) => {
    await add.mutateAsync({
      amount: values.amount,
      type: values.type,
      category: values.category,
      description: values.description?.trim() || null,
      occurred_at: new Date(values.occurred_at).toISOString(),
    });
    form.reset({
      type: values.type,
      amount: 0,
      category: values.category,
      description: "",
      occurred_at: new Date().toISOString().slice(0, 10),
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="hero" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a transaction</DialogTitle>
          <DialogDescription>Log an expense or income to keep your dashboard up to date.</DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Type</Label>
              <Select
                value={form.watch("type")}
                onValueChange={(v) => form.setValue("type", v as "expense" | "income")}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input id="amount" type="number" step="0.01" min="0" {...form.register("amount")} />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Category</Label>
            <Select value={form.watch("category")} onValueChange={(v) => form.setValue("category", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Optional note" {...form.register("description")} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="occurred_at">Date</Label>
            <Input id="occurred_at" type="date" {...form.register("occurred_at")} />
          </div>

          {Object.values(form.formState.errors)[0] && (
            <p className="text-sm text-destructive">
              {Object.values(form.formState.errors)[0]?.message as string}
            </p>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" variant="hero" disabled={add.isPending}>
              {add.isPending ? "Saving..." : "Add transaction"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
