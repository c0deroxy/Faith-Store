import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/productList";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <Image
        src="/banner-55off.png"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full px-5"
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-2 pl-5 font-semibold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-mouses.png"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full px-5"
        alt="Até 55% de desconto em mouses"
      />
    </div>
  );
}
