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
import { DashboardExample } from "../dashboard-example/dashboard-example";

export const EditorDisplay = ({
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
					{brand.trademark == "true" ? `${brand.title}™` : brand.title}
				</span>

				<span
					style={{
						color: getContrastingColor(brand.colors.background),
						opacity: 0.7,
					}}
					className={cn(
						"text-2xl font-medium",
						bodyFont(brand.font.body.font).className,
						bodyWeight(brand.font.body.weight)
					)}
				>
					{brand.subtitle}
				</span>
			</div>

			<DashboardExample brand={brand} />
			<div className="py-24" />
		</main>
	);
};
