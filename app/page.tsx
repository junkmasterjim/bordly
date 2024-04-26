"use client";

import { useEffect, useState } from "react";
import { getContrastingColor, getMutedColor } from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
	headingsFont,
	headingsWeight,
	bodyFont,
	bodyWeight,
} from "@/lib/fonts";
import { Brand } from "@/lib/types";

import { DashboardExample } from "@/components/dashboard-example";
import { Header } from "@/components/header";

const Page = () => {
	const [brand, setBrand] = useState<Brand>({
		name: "Bordly",
		trademark: "true",
		description: "build your design system in 5 minutes with bordly",
		backgroundColor: "#FEFCE8",
		mutedColor: "#444444",
		accentColor: "#CA8A04",
		font: {
			headings: {
				font: "Poppins",
				weight: "medium",
			},
			body: {
				font: "Inter",
				weight: "normal",
			},
		},
	});

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
			className={"min-h-screen"}
		>
			<Header brand={brand} setBrand={setBrand} defaultOpen />

			<div className="container flex flex-col gap-4 items-center text-center h-64 pt-20">
				<span
					style={{
						textDecoration: brand.trademark === "true" ? "underline" : "none",
						textDecorationColor: brand.accentColor,
					}}
					className={cn(
						"text-7xl",
						headingsFont(brand.font.headings.font).className,
						headingsWeight(brand.font.headings.weight),
						headingsWeight(brand.font.headings.weight) == "font-black" &&
							"font-black"
					)}
				>
					{brand.name}
					{brand.trademark == "true" && "™"}
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

export default Page;
