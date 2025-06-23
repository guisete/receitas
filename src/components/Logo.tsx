import { Leaf } from "lucide-react";
import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Leaf className="h-8 w-8 text-primary" />
      <span className="text-2xl font-extrabold tracking-tight text-foreground font-headline">
        Ana Receitas
      </span>
    </div>
  );
}
