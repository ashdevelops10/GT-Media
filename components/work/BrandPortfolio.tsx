"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { InstagramEmbed } from "@/components/work/InstagramEmbed";
import {
  BRANDS,
  PORTFOLIO_ITEMS,
  getBrand,
  type PortfolioItem,
} from "@/lib/portfolio-data";

type FilterType = "all" | "reel" | "post" | "carousel";

export function BrandPortfolio() {
  const [activeBrand, setActiveBrand] = useState<string>("all");
  const [activeType, setActiveType] = useState<FilterType>("all");

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const brandMatch = activeBrand === "all" || item.brandId === activeBrand;
      const typeMatch = activeType === "all" || item.type === activeType;
      return brandMatch && typeMatch;
    }).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [activeBrand, activeType]);

  const activeBrandData = activeBrand !== "all" ? getBrand(activeBrand) : null;

  return (
    <Section spacing="compact" className="bg-black relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-orange text-lg md:text-2xl mb-2"
          >
            Real Work, Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl uppercase text-white tracking-tight leading-[0.9] mb-4"
          >
            BRAND <span className="text-orange">PORTFOLIO</span>
          </motion.h2>
          <p className="text-sm text-white/40 max-w-[50ch] mx-auto">
            Live campaigns across hospitality, fashion, immigration, events, and
            adventure — straight from Instagram.
          </p>
        </div>

        {/* Brand filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <BrandPill
            active={activeBrand === "all"}
            onClick={() => setActiveBrand("all")}
            label="All Brands"
            count={PORTFOLIO_ITEMS.length}
          />
          {BRANDS.map((brand) => (
            <BrandPill
              key={brand.id}
              active={activeBrand === brand.id}
              onClick={() => setActiveBrand(brand.id)}
              label={brand.name}
              logo={brand.logo}
              count={
                PORTFOLIO_ITEMS.filter((i) => i.brandId === brand.id).length
              }
            />
          ))}
        </div>

        {/* Content type filter */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {(["all", "reel", "carousel", "post"] as FilterType[]).map((t) => {
            const count =
              t === "all"
                ? filteredItems.length
                : filteredItems.filter((i) => i.type === t).length;
            if (t !== "all" && count === 0) return null;
            return (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-200 ${
                  activeType === t
                    ? "bg-white/10 text-white"
                    : "text-white/30 hover:text-white/50"
                }`}
              >
                {t === "all" ? "All Types" : t === "reel" ? "Reels" : t === "carousel" ? "Carousels" : "Posts"}
              </button>
            );
          })}
        </div>

        {/* Active brand spotlight */}
        <AnimatePresence mode="wait">
          {activeBrandData && (
            <motion.div
              key={activeBrandData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-10 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white flex-shrink-0">
                <Image
                  src={activeBrandData.logo}
                  alt={activeBrandData.name}
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg uppercase text-white">
                    {activeBrandData.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 px-2 py-0.5 bg-white/[0.04] rounded-full">
                    {activeBrandData.industry}
                  </span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                  {activeBrandData.description}
                </p>
              </div>
              <a
                href={activeBrandData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-[10px] text-white/50 hover:text-white hover:border-white/20 transition-all duration-200 uppercase tracking-widest"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                {activeBrandData.handle}
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-sm">
              No items match the current filter.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}

// ─── Brand Filter Pill ───────────────────────────────────────

function BrandPill({
  active,
  onClick,
  label,
  logo,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  logo?: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
        active
          ? "border-orange/40 bg-orange/10 text-orange"
          : "border-white/[0.06] text-white/40 hover:border-white/15 hover:text-white/60"
      }`}
    >
      {logo && (
        <div className="relative w-5 h-5 rounded-full overflow-hidden bg-white flex-shrink-0">
          <Image
            src={logo}
            alt={label}
            fill
            className="object-contain p-0.5"
          />
        </div>
      )}
      <span>{label}</span>
      <span
        className={`text-[9px] px-1.5 py-0.5 rounded-full ${
          active ? "bg-orange/20 text-orange" : "bg-white/5 text-white/25"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

// ─── Portfolio Card ──────────────────────────────────────────

function PortfolioCard({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) {
  const brand = getBrand(item.brandId);
  if (!brand) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="rounded-2xl border border-white/[0.06] overflow-hidden bg-carbon hover:border-white/[0.12] transition-colors duration-300">
        {/* Instagram embed */}
        <InstagramEmbed
          poster={item.poster}
          video={item.video}
          instagramUrl={item.instagramUrl}
          title={item.title}
          type={item.type === "carousel" ? "post" : item.type}
          brandColor={brand.color}
        />

        {/* Card footer */}
        <div className="p-4">
          {/* Brand + type row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 rounded-full overflow-hidden bg-white flex-shrink-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                {brand.name}
              </span>
            </div>
            <span
              className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${brand.color}15`,
                color: brand.color,
              }}
            >
              {item.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-sm uppercase text-white mb-1 leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[11px] text-white/30 leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>

          {/* Meta row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {item.engagement.likes > 0 && (
                <span className="flex items-center gap-1 text-[10px] text-white/25">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  {item.engagement.likes.toLocaleString()}
                </span>
              )}
              {item.engagement.comments > 0 && (
                <span className="flex items-center gap-1 text-[10px] text-white/25">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  {item.engagement.comments}
                </span>
              )}
            </div>
            <span className="text-[9px] text-white/20 uppercase tracking-wider">
              {item.style.split(" / ")[0]}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
