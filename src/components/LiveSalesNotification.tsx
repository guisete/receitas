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
        "fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-lg border bg-background/80 p-3 shadow-xl backdrop-blur-sm transition-all duration-500",
        "animate-in fade-in slide-in-from-bottom-5"
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
        <ShoppingCart className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-foreground">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="rounded-full p-1 text-muted-foreground opacity-70 transition-opacity hover:opacity-100"
        aria-label="Fechar notificação"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
