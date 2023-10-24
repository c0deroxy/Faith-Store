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
    <div className="flex flex-col gap-8">
      <div className="mt-8">
        <PromoBanner
          src="/banner-55off.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div className=" px-5">
        <Categories />
      </div>

      <div className="">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className="">
        <PromoBanner
          src="/banner-mouses.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div className="">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboard} />
      </div>
    </div>
  );
}
