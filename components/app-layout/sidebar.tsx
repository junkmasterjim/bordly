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
import { ColorMenu } from "../controls/color-menu";

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
			<div className="relative hidden sm:block">
				<motion.button
					animate={{
						display: isOpen ? "none" : "flex",
						visibility: isOpen ? "hidden" : "visible",
						opacity: isOpen ? 0 : 1,
					}}
					className="size-6 absolute top-2 hidden left-2  hover:bg-accent-foreground items-center justify-center hover:text-accent bg-accent text-accent-foreground p-1 rounded transition-all"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<ChevronsRight className="h-4 w-4" />
				</motion.button>
			</div>

			<div className="hidden sm:block">
				<motion.div
					style={{
						width: isOpen ? "250px" : "0",
						overflowX: isOpen ? "visible" : "hidden",
					}}
					animate={{
						width: isOpen ? "250px" : "0",
						overflowX: isOpen ? "visible" : "hidden",
						borderWidth: isOpen ? "1px" : "0",
					}}
					className="w-full max-w-[250px] overflow-y-scroll pb-24 h-full border-r text-foreground py-2 relative"
				>
					<div className="h-8 absolute top-2 right-2 z-50">
						<button
							className="hover:bg-accent-foreground hover:text-accent bg-accent text-accent-foreground p-1 rounded transition-all"
							onClick={() => setIsOpen((prev) => !prev)}
						>
							<ChevronsLeft className="h-4 w-4" />
						</button>
					</div>
					<div className="p-2 flex flex-col gap-2 items-center truncate pt-8">
						{/* <HeadingsDropdown brand={brand} setBrand={setBrand} /> */}
						<FontsDropdown brand={brand} setBrand={setBrand} />
						<WeightsDropdown brand={brand} setBrand={setBrand} />
						<div className="grid grid-cols-2 gap-2 w-full">
							<TMToggle brand={brand} setBrand={setBrand} />
							<UnderlineToggle brand={brand} setBrand={setBrand} />
						</div>
						<ColorMenu brand={brand} setBrand={setBrand} />
					</div>
				</motion.div>
			</div>
		</>
	);
};
