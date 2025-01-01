import CreateTransactionButton from "@/components/create-transaction-button";
import { Header } from "@/components/header";
import React from "react";

type Props = { children: React.ReactNode };

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
      <CreateTransactionButton />
    </>
  );
};

export default DashboardLayout;
