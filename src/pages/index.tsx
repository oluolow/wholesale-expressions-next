import ProductSection from "@/components/sections/ProductSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <section className="text-center mt-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Wholesale Expressions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Official distributor of Lagos Braid by X-Pression. Browse our best-selling colours.
          </p>
        </section>

        <section className="mt-12">
          <ProductSection />
        </section>
      </div>
    </main>
  );
}
