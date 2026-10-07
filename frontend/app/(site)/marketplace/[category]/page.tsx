import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { ProductCard } from "@/components/product/product-card";
import { products, categories } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const cat = categories.find((c) => c.slug === params.category);
  return { title: cat ? cat.label : "Marketplace" };
}

export default function MarketplaceCategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) notFound();

  const filtered = products.filter((p) => p.category === params.category);

  return (
    <>
      <PageHeader eyebrow="Marketplace" title={category.label} />

      <section className="bg-background pb-28">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/marketplace"
              className="rounded-full border border-border px-4 py-2 text-[13px] text-secondary hover:border-blue/40 hover:text-blue"
            >
              All products
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/marketplace/${c.slug}`}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px]",
                  c.slug === category.slug
                    ? "border-blue/40 bg-blue/10 text-blue"
                    : "border-border text-secondary hover:border-blue/40 hover:text-blue"
                )}
              >
                {c.label}
              </Link>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-16 rounded-card-lg border border-border bg-surface p-12 text-center">
              <p className="text-secondary">No products in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
