
"use client";

import { ShoppingCart, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiveSalesNotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function LiveSalesNotification({
  message,
  isVisible,
  onClose,
}: LiveSalesNotificationProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-5 left-5 z-50 flex items-center gap-4 rounded-xl border bg-card p-4 shadow-lg transition-all duration-500",
        "animate-in fade-in slide-in-from-bottom-5"
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <ShoppingCart className="h-6 w-6 text-primary" />
      </div>
      <p className="text-sm font-medium text-card-foreground">{message}</p>
      <button
        onClick={onClose}
        className="absolute -right-2 -top-2 rounded-full bg-card p-1 text-muted-foreground shadow-md hover:bg-muted"
        aria-label="Fechar notificação"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
