
import { ContentSection } from "@/shared/components/ui/ContentSection";
import { CardProduct } from "./ProductCard.component";

const mockProducts = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Product ${i + 1}`,
  description: `This is a description for product ${i + 1}.`,
  price: 100 + i * 10,
  imageUrl: `/img/bg.png`,
}));
export default function PageProducts() {
  return (
    <ContentSection
      title="Our Featured Products"
      description="Explore our curated selection of top-selling and high-quality items. Click on any product to learn more or make a purchase."
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    >
      <CardProduct
        product={{
          id: `9`,
          name: `Product 9 xzcxczxcascssssssssssssssssssscscscsczxcscscscs`,
          description: `This is a description  xzczxczxczxcxzczxcxzzxczxczczczxcxzczxcxzzxczxczxczxcfor product 9mmmmmmmmmmmmmmmmmmmmmmmmmjjjjjjjjjjjjjjjjjjjjj.`,
          price: 5,
          imageUrl: "/img/XD_STUDIO.png",
        }}
        className="mx-auto duration-300 hover:scale-105 hover:shadow-xl"
      />
      {mockProducts.map((product) => (
        <CardProduct
          key={product.id}
          product={product}
          className="mx-auto duration-300 hover:scale-105 hover:shadow-xl"
        />
      ))}
    </ContentSection>
  );
}
