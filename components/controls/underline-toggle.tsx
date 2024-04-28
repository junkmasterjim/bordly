"use client";

import { Brand } from "@/lib/types";
import { Toggle } from "../ui/toggle";
import { Underline } from "lucide-react";

export const UnderlineToggle = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
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
			className="h-9 aspect-square p-0 align-text-bottom flex justify-center items-center text-2xl"
		>
			<Underline className="size-6 scale-x-90" strokeWidth={2.25} />
		</Toggle>
	);
};
