import Image from "next/image";
import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://i.imgur.com/yfUdrmT.png"
        alt="Ana Receitas Logo"
        width={48}
        height={48}
        className="h-12 w-12"
      />
      <span className="text-3xl font-extrabold tracking-tight text-foreground font-headline">
        Ana Receitas
      </span>
    </div>
  );
}
