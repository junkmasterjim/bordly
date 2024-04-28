"use client";

import { getContrastingColor, getMutedColor } from "@/lib/colors";
import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";
import { Brand } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { DashboardExample } from "../dashboard-example/dashboard-example";

export const EditorDisplay = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	useEffect(() => {
		const mutedColor = getMutedColor(
			getContrastingColor(brand.backgroundColor)
		);
		if (mutedColor) setBrand({ ...brand, mutedColor });
	}, [brand.backgroundColor]);
	return (
		<main
			style={{
				backgroundColor: brand.backgroundColor,
				color: getContrastingColor(brand.backgroundColor),
			}}
			className={"overflow-auto max-h-screen px-4 w-full"}
		>
			<div className="container flex flex-col gap-4 items-center text-center h-64 pt-20 ">
				<span
					style={{
						textDecorationColor: brand.accentColor,
					}}
					className={cn(
						"text-7xl",
						headingsFont(brand.font.headings.font).className,
						headingsWeight(brand.font.headings.weight),
						headingsWeight(brand.font.headings.weight) == "font-black" &&
							"font-black",
						brand.underline === "true" && "underline"
					)}
				>
					{brand.trademark == "true" ? `${brand.name}™` : brand.name}
				</span>

				<span
					style={{
						color: brand.mutedColor,
					}}
					className={cn(
						"text-2xl font-medium",
						bodyFont(brand.font.body.font).className,
						bodyWeight(brand.font.body.weight)
					)}
				>
					{brand.description}
				</span>
			</div>

			<DashboardExample brand={brand} />
			<div className="py-24" />
		</main>
	);
};
