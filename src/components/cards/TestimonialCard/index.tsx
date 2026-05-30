'use client';

import { StarIcon, QuotesIcon } from "@phosphor-icons/react";
import Image from "next/image";

interface TestimonialCardProps {
  avatarUrl: string;
  userName: string;
  userRole?: string;
  rating?: number;
  testimonial: string;
}

export default function TestimonialCard({
  avatarUrl,
  userName,
  userRole,
  rating,
  testimonial,
}: TestimonialCardProps) {
  const renderStars = (value: number) => {
    const stars = Array.from({ length: 5 }, (_, i) => i < value);
    return (
      <div className="flex gap-0.5" aria-label={`Avaliação ${value} de 5`}>
        {stars.map((filled, i) => (
          <StarIcon
            key={i}
            size={14}
            weight={filled ? "fill" : "regular"}
            className={filled ? "text-primary-500" : "text-[#0F0E1A]/20"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-white border border-[#0F0E1A]/[0.08] shadow-sm rounded-xl p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full">
      <QuotesIcon className="h-7 w-7 text-primary-400/50 mb-4 flex-shrink-0" weight="fill" />

      <p className="text-sm leading-[1.85] text-[#0F0E1A]/65 flex-1">
        {testimonial}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-[#0F0E1A]/[0.07] pt-5">
        <Image
          src={avatarUrl}
          alt={`Foto de ${userName || userRole}`}
          width={44}
          height={44}
          className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-1 ring-[#0F0E1A]/10"
        />
        <div className="min-w-0">
          {userName && (
            <p className="font-semibold text-sm text-[#0F0E1A] truncate">{userName}</p>
          )}
          {userRole && (
            <p className="text-xs text-[#0F0E1A]/45 truncate">{userRole}</p>
          )}
          {typeof rating === "number" && (
            <div className="mt-1">{renderStars(rating)}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export type { TestimonialCardProps };
