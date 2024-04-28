"use client";

import { Brand } from "@/lib/types";
import { HeadingsDropdown } from "../controls/headings-dropdown";
import { FontsDropdown } from "../controls/fonts-dropdown";
import { WeightsDropdown } from "../controls/weights-dropdown";
import { TMToggle } from "../controls/tm-toggle";
import { UnderlineToggle } from "../controls/underline-toggle";
import { ArrowRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Sidebar = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<>
			<div className="relative">
				<motion.button
					animate={{
						display: isOpen ? "none" : "flex",
						visibility: isOpen ? "hidden" : "visible",
						opacity: isOpen ? 0 : 1,
					}}
					className="size-6 absolute top-2 hidden left-2  hover:bg-accent items-center justify-center rounded"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<ChevronsRight className="h-4 w-4" />
				</motion.button>
			</div>
			<motion.div
				style={{
					width: isOpen ? "250px" : "0",
					overflowX: isOpen ? "visible" : "hidden",
				}}
				animate={{
					width: isOpen ? "250px" : "0",
					overflowX: isOpen ? "visible" : "hidden",
				}}
				className="w-full max-w-[250px] h-full border-r text-foreground py-2 relative"
			>
				<div className="h-8 absolute top-2 right-2 z-50">
					<button
						className="hover:bg-accent p-1 rounded"
						onClick={() => setIsOpen((prev) => !prev)}
					>
						<ChevronsLeft className="h-4 w-4" />
					</button>
				</div>
				<div className="container flex flex-col gap-4 items-center truncate pt-8">
					<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
						Text Content <ArrowRight className="h-4 w-4" />
						<HeadingsDropdown brand={brand} setBrand={setBrand} />
					</div>
					<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
						Font Family <ArrowRight className="h-4 w-4" />
						<FontsDropdown brand={brand} setBrand={setBrand} />
					</div>
					<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
						Font Weight <ArrowRight className="h-4 w-4" />
						<WeightsDropdown brand={brand} setBrand={setBrand} />
					</div>
					<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
						Trademark <ArrowRight className="h-4 w-4" />
						<TMToggle brand={brand} setBrand={setBrand} />
					</div>
					<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
						Underline <ArrowRight className="h-4 w-4" />
						<UnderlineToggle brand={brand} setBrand={setBrand} />
					</div>
				</div>
			</motion.div>
		</>
	);
};
