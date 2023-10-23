"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-55off.png"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full"
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
