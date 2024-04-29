"use client";

import { Brand } from "@/lib/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { BackgroundColorSelect } from "../background-color-select";
import { AccentColorSelect } from "../accent-color-select";
import { motion } from "framer-motion";
import Image from "next/image";

export const Header = ({
	defaultOpen = false,
	brand,
	setBrand,
}: {
	defaultOpen?: boolean;
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const toggle = () => setIsOpen((prev) => !prev);
	return (
		<>
			<nav className="h-16 bg-background">
				<div className="relative flex items-center justify-between gap-4 px-3 shadow">
					<span className="flex items-center justify-start gap-2">
						<Image
							unoptimized
							src="/typeface.png"
							alt="Bordly"
							width={200}
							height={200}
							className="h-16 w-auto object-cover select-none pointer-events-none py-2"
						/>
					</span>

					<span className="flex gap-4 items-center">
						<span className="font-semibold text-sm">
							(Not optimized for mobile)
						</span>
					</span>
				</div>
			</nav>

			<motion.header
				className={cn(
					"shadow overflow-hidden relative z-0 bg-background text-foreground",
					isOpen == true ? "" : "h-0"
				)}
				animate={{
					opacity: isOpen ? 1 : 0,
					transition: { duration: 0.5, type: "tween" },
				}}
			>
				<div className="container space-y-4 py-4">
					{/* Colors */}
					<div className="text-center flex flex-col lg:flex-row justify-center items-center gap-2">
						<BackgroundColorSelect brand={brand} setBrand={setBrand} />
						<AccentColorSelect brand={brand} setBrand={setBrand} />
					</div>
				</div>
			</motion.header>
		</>
	);
};
