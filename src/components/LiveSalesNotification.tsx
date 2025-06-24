"use client";

import { useState, useEffect } from "react";
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
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      // Delay unmounting for the duration of the exit animation
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      data-state={isVisible ? "open" : "closed"}
      className={cn(
        "fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full border bg-background/80 py-2 pl-2 pr-3 shadow-xl backdrop-blur-sm",
        "duration-500", // Animation duration for both in and out
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-5",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-5"
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
        <ShoppingCart className="h-4 w-4 text-primary" />
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
