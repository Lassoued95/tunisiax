"use client";

import { Activities } from "@/app/data/data";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ActivityDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProduct = Activities.find((prod) => prod.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="bg-[#2E36A4] min-h-screen flex justify-center items-center">
        <p className="text-white text-xl animate-pulse">Loading activity details...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#2E36A4] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-white font-bold text-4xl md:text-5xl tracking-wide mb-4 animate-fade-in-down">
            {product.title}
          </h2>
          <p className="text-indigo-200 text-lg">Unlock unforgettable adventures 🌍</p>
        </div>

        {/* Card Section */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Image Gallery */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide p-3 mb-6">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                width={180}
                height={120}
                className="rounded-xl object-cover flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs uppercase tracking-wide px-3 py-1 rounded-full font-semibold ${tag.className}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Extra Badges */}
          {product.extraBadges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {product.extraBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${badge.className}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
