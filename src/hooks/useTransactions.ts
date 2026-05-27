import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

export type Transaction = {
  id: string;
  user_id: string;
  amount: number;
  type: "expense" | "income";
  category: string;
  description: string | null;
  occurred_at: string;
  created_at: string;
  updated_at: string;
};

export type NewTransaction = {
  amount: number;
  type: "expense" | "income";
  category: string;
  description?: string | null;
  occurred_at?: string;
};

const TX_KEY = ["transactions"] as const;

export function useTransactions() {
  const { user } = useAuth();

  return useQuery({
    queryKey: TX_KEY,
    enabled: !!user,
    queryFn: async (): Promise<Transaction[]> => {
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .order("occurred_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Transaction[];
    },
  });
}

export function useAddTransaction() {
  const qc = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (tx: NewTransaction) => {
      if (!user) throw new Error("Not signed in");
      const { data, error } = await supabase
        .from("transactions")
        .insert({
          user_id: user.id,
          amount: tx.amount,
          type: tx.type,
          category: tx.category,
          description: tx.description ?? null,
          occurred_at: tx.occurred_at ?? new Date().toISOString(),
        })
        .select()
        .single();
      if (error) throw error;
      return data as Transaction;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: TX_KEY });
      toast({ title: "Transaction added" });
    },
    onError: (e: Error) => {
      toast({ title: "Couldn't add transaction", description: e.message, variant: "destructive" });
    },
  });
}

export function useDeleteTransaction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("transactions").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: TX_KEY });
      toast({ title: "Transaction deleted" });
    },
    onError: (e: Error) => {
      toast({ title: "Delete failed", description: e.message, variant: "destructive" });
    },
  });
}
