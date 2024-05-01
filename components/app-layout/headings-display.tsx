"use client";

import { getContrastingColor } from "@/lib/colors";
import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";
import { Brand } from "@/lib/types";
import { cn } from "@/lib/utils";

export const HeadingsDisplay = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	return (
		<main
			style={{
				backgroundColor: brand.colors.background,
				color: getContrastingColor(brand.colors.background),
			}}
			className={"px-4 w-full"}
		>
			<div className="container flex flex-col gap-4 items-center text-center h-64 pt-20 ">
				<span
					style={{
						textDecorationColor: brand.colors.accent,
						textDecorationThickness: "8px",
						color: brand.colors.foreground,
					}}
					className={cn(
						"text-7xl decoration-8",
						headingsFont(brand.font.headings.font).className,
						headingsWeight(brand.font.headings.weight),
						brand.underline === "true" && "underline"
					)}
				>
					{brand.trademark == "true" ? `${brand.title}™` : brand.title}
				</span>

				<span
					style={{
						color: getContrastingColor(brand.colors.background),
						opacity: 0.7,
					}}
					className={cn(
						"text-lg lg:text-xl font-medium",
						bodyFont(brand.font.body.font).className,
						bodyWeight(brand.font.body.weight)
					)}
				>
					{brand.subtitle}
				</span>
			</div>
		</main>
	);
};
