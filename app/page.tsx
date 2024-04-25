// todo: add "light", "midtone", "dark" modes to color palette

"use client";

import { useState } from "react";
import { bgColors } from "@/lib/colors";
import { cn, contrastingColor } from "@/lib/utils";
import { fontsArray, fonts, Fonts } from "@/lib/fonts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";

import { DashboardExample } from "@/components/dashboard-example";

export type Brand = {
	name: string;
	trademark: "true" | "false";
	description: string;
	backgroundColor: string;
	accentColor: string;
	font: {
		headings: {
			font: Fonts;
			weight: "normal" | "medium" | "semibold" | "bold" | "black";
		};
		body: { font: Fonts; weight: "normal" | "medium" | "semibold" | "bold" };
	};
};

const Page = () => {
	const [brand, setBrand] = useState<Brand>({
		name: "Bordly",
		trademark: "true",
		description: "build your design system in 5 minutes with bordly",
		backgroundColor: "#ffffff",
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

	return (
		<main
			style={{
				backgroundColor: brand.backgroundColor,
				color: contrastingColor(brand.backgroundColor),
			}}
			className={"space-y-4 min-h-screen"}
		>
			<div className="container space-y-4 py-4">
				<div
					className="flex items-center justify-center gap-4 flex-wrap"
					style={{
						color: "black",
					}}
				>
					<Input
						className="font-medium max-w-xs"
						placeholder="Name"
						defaultValue={brand.name}
						onChange={(e) => setBrand({ ...brand, name: e.target.value })}
					/>
					<Input
						className="font-medium max-w-lg"
						defaultValue={brand.description}
						placeholder="Description"
						onChange={(e) =>
							setBrand({ ...brand, description: e.target.value })
						}
					/>
					<Select
						defaultValue={brand.trademark}
						onValueChange={(e: "true" | "false") =>
							setBrand({
								...brand,
								trademark: e,
							})
						}
					>
						<SelectTrigger className="max-w-xs">
							<span className="font-medium">
								Trademark: {brand.trademark === "true" ? "Yes" : "No"}
							</span>
						</SelectTrigger>
						<SelectContent className="max-w-xs">
							<SelectItem value={"true"}>Yes</SelectItem>
							<SelectItem value={"false"}>No</SelectItem>
						</SelectContent>
					</Select>

					{/* Fonts */}
					<>
						<Select
							defaultValue={brand.font.headings.font}
							onValueChange={(e: Fonts) =>
								setBrand({
									...brand,
									font: {
										...brand.font,

										headings: {
											...brand.font.headings,
											font: e,
										},
									},
								})
							}
						>
							<SelectTrigger className="max-w-xs">
								<span className="font-medium">
									Headings: {brand.font.headings.font}
								</span>
							</SelectTrigger>
							<SelectContent className="max-w-xs">
								{fontsArray.map((font) => (
									<SelectItem key={font.name} value={font.name}>
										{font.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>

						<Select
							defaultValue={brand.font.body.font}
							onValueChange={(e: Fonts) =>
								setBrand({
									...brand,
									font: {
										...brand.font,
										body: {
											...brand.font.body,
											font: e,
										},
									},
								})
							}
						>
							<SelectTrigger className="max-w-xs">
								<span className="font-medium">
									Body: {brand.font.body.font}
								</span>
							</SelectTrigger>
							<SelectContent className="max-w-xs">
								{fontsArray.map((font) => (
									<SelectItem key={font.name} value={font.name}>
										{font.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</>

					{/* Weights */}
					<>
						<Select
							defaultValue={brand.font.headings.weight}
							onValueChange={(
								e: "normal" | "medium" | "semibold" | "bold" | "black"
							) =>
								setBrand({
									...brand,
									font: {
										...brand.font,
										headings: {
											...brand.font.headings,
											weight: e,
										},
									},
								})
							}
						>
							<SelectTrigger className="max-w-xs">
								<span className="font-medium capitalize">
									Headings Weight: {brand.font.headings.weight}
								</span>
							</SelectTrigger>
							<SelectContent className="max-w-xs">
								<SelectItem value="normal">Normal</SelectItem>
								<SelectItem value="medium">Medium</SelectItem>
								<SelectItem value="semibold">Semibold</SelectItem>
								<SelectItem value="bold">Bold</SelectItem>
								<SelectItem value="black">Black</SelectItem>
							</SelectContent>
						</Select>

						<Select
							defaultValue={brand.font.body.weight}
							onValueChange={(e: "normal" | "medium" | "semibold" | "bold") =>
								setBrand({
									...brand,
									font: {
										...brand.font,
										body: {
											...brand.font.body,
											weight: e,
										},
									},
								})
							}
						>
							<SelectTrigger className="max-w-xs">
								<span className="font-medium capitalize">
									Body Weight: {brand.font.body.weight}
								</span>
							</SelectTrigger>
							<SelectContent className="max-w-xs">
								<SelectItem value="normal">Normal</SelectItem>
								<SelectItem value="medium">Medium</SelectItem>
								<SelectItem value="semibold">Semibold</SelectItem>
								<SelectItem value="bold">Bold</SelectItem>
							</SelectContent>
						</Select>
					</>
				</div>

				{/* Colors */}

				{/* Background Colors */}
				<div className="text-center flex flex-col justify-center items-center gap-2">
					<Card>
						<CardHeader>
							<p>Background</p>
						</CardHeader>
						<CardContent>
							<div className="flex gap-4 items-center justify-center flex-wrap ">
								{bgColors.map((color) => (
									<Card
										key={color.bgColor}
										style={{
											backgroundColor: color.hex,
											color: contrastingColor(color.hex),
										}}
										onClick={() =>
											setBrand({ ...brand, backgroundColor: color.hex })
										}
										className="aspect-[4/3] w-8 cursor-pointer shadow border-none"
									/>
								))}
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p>Accent</p>
						</CardHeader>
						<CardContent>
							<div className="flex gap-4 items-center justify-center flex-wrap ">
								{bgColors.map((color) => (
									<Card
										key={color.bgColor}
										style={{
											backgroundColor: color.hex,
											color: contrastingColor(color.hex),
										}}
										onClick={() =>
											setBrand({ ...brand, accentColor: color.hex })
										}
										className="aspect-[4/3] w-8 cursor-pointer shadow border-none"
									/>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Display */}

			<div className="container flex flex-col gap-4 items-center text-center h-64 pt-20">
				<span
					style={{
						textDecoration: brand.trademark === "true" ? "underline" : "none",
						textDecorationColor: brand.accentColor,
					}}
					className={cn(
						"text-7xl font-medium",
						brand.font.headings.font === "Inter" ? fonts.inter.className : "",
						brand.font.headings.font === "Poppins"
							? fonts.poppins.className
							: "",
						brand.font.headings.font === "Raleway"
							? fonts.raleway.className
							: "",
						brand.font.headings.font === "Work Sans"
							? fonts.work_sans.className
							: "",
						brand.font.headings.font === "DM Sans"
							? fonts.dm_sans.className
							: "",

						brand.font.headings.weight === "normal" ? "font-normal" : "",
						brand.font.headings.weight === "medium" ? "font-medium" : "",
						brand.font.headings.weight === "semibold" ? "font-semibold" : "",
						brand.font.headings.weight === "bold" ? "font-bold" : "",
						brand.font.headings.weight === "black" ? "font-black" : ""
					)}
				>
					{brand.name}
					{brand.trademark == "true" && "™"}
				</span>
				<span
					style={{
						color: contrastingColor(brand.backgroundColor),
						opacity: 0.75,
					}}
					className={cn(
						"text-2xl font-medium",
						brand.font.body.font === "Inter" ? fonts.inter.className : "",
						brand.font.body.font === "Poppins" ? fonts.poppins.className : "",
						brand.font.body.font === "Raleway" ? fonts.raleway.className : "",
						brand.font.body.font === "Work Sans"
							? fonts.work_sans.className
							: "",
						brand.font.body.font === "DM Sans" ? fonts.dm_sans.className : "",

						brand.font.body.weight === "normal" ? "font-normal" : "",
						brand.font.body.weight === "medium" ? "font-medium" : "",
						brand.font.body.weight === "semibold" ? "font-semibold" : "",
						brand.font.body.weight === "bold" ? "font-bold" : ""
					)}
				>
					{brand.description}
				</span>
			</div>

			<div className="px-3 py-2 container border rounded-lg shadow">
				<DashboardExample brand={brand} />
			</div>
			<div className="py-24" />
		</main>
	);
};

export default Page;
