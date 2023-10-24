import { useSession } from "next-auth/react";
import Image from "next/image";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/productList";
import SectionTitle from "./components/sectionTitle";
import Categories from "./components/categories";
import PromoBanner from "./components/promoBanner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboard = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner
        src="/banner-55off.png"
        alt="Até 55% de desconto em mouses"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-mouses.png"
        alt="Até 55% de desconto em mouses"
      />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboard} />
      </div>
    </div>
  );
}
