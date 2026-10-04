import type { ReactNode } from "react";
import AmeeleeProvider from "@/components/ameelee/AmeeleeProvider";
import Header from "@/components/ameelee/Header";
import WhatsAppBar from "@/components/ameelee/WhatsAppBar";

export default function AmeeleeLayout({ children }: { children: ReactNode }) {
  return (
    <AmeeleeProvider>
      <Header />
      {children}
      <WhatsAppBar />
    </AmeeleeProvider>
  );
}
