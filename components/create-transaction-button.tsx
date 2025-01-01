"use client";

import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";

export default function CreateTransactionButton() {
  const newTransaction = useNewTransaction();

  return (
    <Button
      className="fixed bottom-5 right-5 bg-[#3399ff] w-[3rem] h-[3rem] backdrop-blur-[0.5rem]  border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={newTransaction.onOpen}
      size="sm"
    >
      <Plus className="size-4" />
    </Button>
  );
}
