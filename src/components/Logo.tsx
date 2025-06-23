import Image from "next/image";
import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="https://i.imgur.com/yfUdrmT.png"
        alt="Ana Receitas Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="text-2xl font-extrabold tracking-tight text-foreground font-headline">
        Ana Receitas
      </span>
    </div>
  );
}
