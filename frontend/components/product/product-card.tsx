import Link from "next/link";
import { QrCode, Satellite, Package } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { Badge } from "@/components/ui/badge";

const icons = { qr: QrCode, gps: Satellite, accessories: Package };

export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.category];
  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col rounded-card-lg border border-border bg-surface p-6 transition-all duration-300 hover:border-[#ff4d0d]/50 hover:shadow-glow">
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface-2"><Icon className="h-6 w-6 text-[#ff4d0d]" strokeWidth={1.5} /></span>
        {product.badge && <Badge tone="success">{product.badge}</Badge>}
      </div>
      <h3 className="mt-6 font-display text-lg font-medium text-ink">{product.name}</h3>
      <p className="mt-1.5 text-[13px] text-tertiary">{product.tagline}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-[13px] font-medium text-secondary">Available in app</span>
        <span className="text-[13px] text-[#ff4d0d] group-hover:underline">View details</span>
      </div>
    </Link>
  );
}
