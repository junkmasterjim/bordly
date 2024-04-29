"use client";

import { Brand } from "@/lib/types";
import { Toggle } from "../ui/toggle";
import { cn } from "@/lib/utils";

export const TMToggle = ({
	brand,
	setBrand,
	className,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
	className?: string;
}) => {
	return (
		<Toggle
			pressed={brand.trademark === "true"}
			onPressedChange={(e) => {
				setBrand({
					...brand,
					trademark: brand.trademark == "true" ? "false" : "true",
				});
			}}
			className={cn(
				"h-9 px-2 align-text-bottom flex justify-center items-center text-2xl select-none w-full",
				className
			)}
		>
			<span className="mt-2">™</span>
		</Toggle>
	);
};
