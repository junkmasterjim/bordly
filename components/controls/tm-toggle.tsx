"use client";

import { Brand } from "@/lib/types";
import { Toggle } from "../ui/toggle";

export const TMToggle = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
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
			className="h-9 aspect-square p-0 align-text-bottom flex justify-center items-center text-2xl select-none"
		>
			<span className="mt-2">™</span>
		</Toggle>
	);
};
