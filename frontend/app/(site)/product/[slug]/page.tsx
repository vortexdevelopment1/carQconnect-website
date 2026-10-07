import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QrCode, Satellite, Package, ShieldCheck } from "lucide-react";
import { products } from "@/lib/data/products";

import { Badge } from "@/components/ui/badge";

const icons = { qr: QrCode, gps: Satellite, accessories: Package };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  return { title: product ? product.name : "Product" };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const Icon = icons[product.category];

  return (
    <section className="bg-background pt-40 pb-32 md:pt-48">
      <div className="container-page grid gap-14 lg:grid-cols-2">
        <div className="rounded-card-lg border border-border bg-surface p-12 flex items-center justify-center aspect-square">
          <Icon className="h-32 w-32 text-blue" strokeWidth={1} />
        </div>

        <div>
          {product.badge && <Badge tone="success">{product.badge}</Badge>}
          <h1 className="mt-4 font-display text-3xl md:text-4xl font-medium text-ink">
            {product.name}
          </h1>
          <p className="mt-2 text-tertiary">{product.tagline}</p>

          <p className="mt-6 font-display text-kpi text-ink flex items-end gap-3">
            <span className="text-sm font-medium text-tertiary mb-1">App price</span>
            {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Price on request"}
          </p>

          <p className="mt-6 text-[14px] leading-relaxed text-secondary">
            {product.description}
          </p>

          <div className="mt-8">
            
          </div>

          <div className="mt-10 rounded-card-lg border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-sm text-secondary">
              <ShieldCheck className="h-4 w-4 text-success" />
              Compatible with: {product.compatibility}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-base font-medium text-ink">What&apos;s included</h2>
            <ul className="mt-3 space-y-2">
              {product.whatsIncluded.map((item) => (
                <li key={item} className="text-[13px] text-secondary">• {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-base font-medium text-ink">Specifications</h2>
            <dl className="mt-3 divide-y divide-border rounded-card border border-border">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between px-4 py-3 text-[13px]">
                  <dt className="text-tertiary">{spec.label}</dt>
                  <dd className="text-secondary">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-8 text-[12px] text-disabled">{product.warranty}</p>
        </div>
      </div>

      {/* Sticky mobile app-download bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur px-5 py-3 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-tertiary">{product.name}</p>
            <p className="font-display text-ink">
              {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Price on request"}
            </p>
          </div>
          <a
            href="/download"
            className="flex min-h-[44px] items-center rounded-btn bg-blue px-6 text-sm font-medium text-white"
          >
            Download App
          </a>
        </div>
      </div>
    </section>
  );
}

