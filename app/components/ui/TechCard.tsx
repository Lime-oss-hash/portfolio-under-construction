"use client";

// TechCard - Displays a single technology/skill with icon and description
// Features hover effects and consistent dark theme styling

import { cn } from "@/app/lib/utils";
import Image from "next/image";

interface TechCardProps {
  cardInfo: {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
  };
}

export default function TechCard({ cardInfo }: TechCardProps) {
  const { name, description, imageUrl, bgColor } = cardInfo;

  return (
    <div
      className={cn(
        // Base card styling
        "relative p-6 rounded-xl",
        // Dark theme background with border
        "bg-dark-200 border border-dark-700",
        // Hover effect - slight lift and border color change
        "hover:border-primary/50 transition-all duration-300",
        // Consistent height
        "min-h-[160px] flex flex-col justify-between"
      )}
    >
      {/* Icon container with custom background color */}
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          bgColor
        )}
      >
        <Image
          src={imageUrl}
          alt={`${name} logo`}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <div>
        <h4 className="text-lg font-semibold text-stone-200 mb-1">{name}</h4>
        <p className="text-sm text-stone-400">{description}</p>
      </div>
    </div>
  );
}
