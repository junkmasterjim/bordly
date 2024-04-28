"use client";

import { Brand } from "@/lib/types";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { BackgroundColorSelect } from "./background-color-select";
import { AccentColorSelect } from "./accent-color-select";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeadingsDropdown } from "./controls/headings-dropdown";
import { WeightsDropdown } from "./controls/weights-dropdown";
import { TMToggle } from "./controls/tm-toggle";
import { UnderlineToggle } from "./controls/underline-toggle";
import { FontsDropdown } from "./controls/fonts-dropdown";

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
			<nav className="top-0 left-0 right-0 z-50 h-16 bg-background shadow-md">
				<div className="container relative flex items-center justify-between gap-4">
					<span className="flex items-center justify-start gap-2">
						<Image
							unoptimized
							src="/typeface.png"
							alt="Bordly"
							width={200}
							height={200}
							className="h-16 w-auto object-cover select-none pointer-events-none py-2"
						/>
						<span className="font-bold text-xs flex items-center justify-end gap-2">
							(Not optimized for mobile) Use the controls to customize your
							brand. <ArrowRight className="h-4 w-4" />
						</span>
					</span>

					<span className="flex gap-4 items-center flex-row-reverse">
						{/* Toggle */}
						<div className="size-8">
							<div className="absolute top-3 right-4 z-50">
								<Button onClick={toggle} size={"icon"} variant={"outline"}>
									<motion.span
										animate={{
											rotateX: isOpen ? "180deg" : "0deg",
											transition: { duration: 0.3, type: "tween" },
										}}
									>
										<ChevronDown className="h-4 w-4" />
									</motion.span>
								</Button>
							</div>
						</div>

						{/* Controls */}
						<div className="flex items-center gap-4">
							<HeadingsDropdown brand={brand} setBrand={setBrand} />
							<FontsDropdown brand={brand} setBrand={setBrand} />
							<WeightsDropdown brand={brand} setBrand={setBrand} />
							<TMToggle brand={brand} setBrand={setBrand} />
							<UnderlineToggle brand={brand} setBrand={setBrand} />
						</div>
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
