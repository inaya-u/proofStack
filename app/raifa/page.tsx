import Header from "@/components/raifa/Header";
import Hero from "@/components/raifa/Hero";
import ProductGrid from "@/components/raifa/Productgrid";
import WhySection from "@/components/raifa/WhySection";

export default function RaifaPage() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductGrid />
      <WhySection />
      {/* Hero, ProductGrid, WhySection, Footer land here next */}
    </main>
  );
}
