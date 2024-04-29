"use client";

import { Brand } from "@/lib/types";
import { Toggle } from "../ui/toggle";
import { Underline } from "lucide-react";
import { cn } from "@/lib/utils";

export const UnderlineToggle = ({
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
			pressed={brand.underline === "true"}
			onPressedChange={(e) => {
				setBrand({
					...brand,
					underline: brand.underline == "true" ? "false" : "true",
				});
			}}
			className={cn(
				"h-9 px-2 align-text-bottom flex justify-center items-center text-2xl w-full",
				className
			)}
		>
			<Underline className="size-6 scale-x-90" strokeWidth={2.25} />
		</Toggle>
	);
};
