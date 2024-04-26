"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getContrastingColor, getMutedColor } from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
	fontsArray,
	headingsFont,
	headingsWeight,
	bodyFont,
	bodyWeight,
} from "@/lib/fonts";
import { Brand, Fonts } from "@/lib/types";

import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DashboardExample } from "@/components/dashboard-example";
import { BackgroundColorSelect } from "@/components/background-color-select";
import { AccentColorSelect } from "@/components/accent-color-select";

const Page = () => {
	const [brand, setBrand] = useState<Brand>({
		name: "Bordly",
		trademark: "true",
		description: "build your design system in 5 minutes with bordly",
		backgroundColor: "#ffffff",
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

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen((prev) => !prev);

	return (
		<main
			style={{
				backgroundColor: brand.backgroundColor,
				color: getContrastingColor(brand.backgroundColor),
			}}
			className={"space-y-4 min-h-screen relative"}
		>
			<div className="absolute top-4 right-4 -mt-4 z-50">
				<Button onClick={toggle} size={"icon"} variant={"outline"}>
					<ChevronDown
						className={cn("h-4 w-4", isOpen == true ? "rotate-180" : "")}
					/>
				</Button>
			</div>

			<header
				className={cn(
					"shadow overflow-hidden relative z-0",
					isOpen == true ? "" : "h-0"
				)}
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

					<div className="text-center flex flex-col lg:flex-row justify-center items-center gap-2">
						<BackgroundColorSelect brand={brand} setBrand={setBrand} />
						<AccentColorSelect brand={brand} setBrand={setBrand} />
					</div>
				</div>
			</header>

			{/* Display */}

			<div className="container flex flex-col gap-4 items-center text-center h-64 pt-20">
				<span
					style={{
						textDecoration: brand.trademark === "true" ? "underline" : "none",
						textDecorationColor: brand.accentColor,
					}}
					className={cn(
						"text-7xl font-medium",
						headingsFont(brand.font.headings.font).className,
						headingsWeight(brand.font.headings.weight)
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
