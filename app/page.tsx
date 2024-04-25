"use client";

import { colors } from "@/lib/colors";
import { cn, contrastingColor } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { fontsArray, fonts, Fonts } from "@/lib/fonts";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";

const Page = () => {
	const [brand, setBrand] = useState<{
		name: string;
		description: string;
		backgroundColor: string;
		font: Fonts;
	}>({
		name: "Bordly",
		description: "build your design system in 5 minutes with bordly",
		backgroundColor: "#ffffff",
		font: "Poppins",
	});

	return (
		<main
			style={{
				backgroundColor: brand.backgroundColor,
				color: contrastingColor(brand.backgroundColor),
			}}
			className={cn(
				"space-y-4 min-h-screen",

				brand.font === "Inter" ? fonts.inter.className : "",
				brand.font === "Poppins" ? fonts.poppins.className : "",
				brand.font === "Roboto" ? fonts.roboto.className : "",
				brand.font === "Raleway" ? fonts.raleway.className : "",
				brand.font === "Work Sans" ? fonts.work_sans.className : "",
				brand.font === "DM Sans" ? fonts.dm_sans.className : "",
				brand.font === "Chivo" ? fonts.chivo.className : ""
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
						defaultValue={brand.font}
						onValueChange={(e: Fonts) =>
							setBrand({
								...brand,
								font: e,
							})
						}
					>
						<SelectTrigger className="max-w-xs">
							<span className="font-medium">{brand.font}</span>
						</SelectTrigger>
						<SelectContent className="max-w-xs">
							{fontsArray.map((font) => (
								<SelectItem key={font.name} value={font.name}>
									{font.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* Colors */}

				<div className="flex gap-4 items-center justify-center flex-wrap">
					{colors.map((color) => (
						<Card
							key={color.bgColor}
							style={{
								backgroundColor: color.hex,
								color: contrastingColor(color.hex),
							}}
							onClick={() => setBrand({ ...brand, backgroundColor: color.hex })}
							className="aspect-[4/3] w-8 cursor-pointer shadow border-none"
						/>
					))}
				</div>
			</div>

			{/* Display */}

			<div className="container flex flex-col gap-4 items-center text-center min-h-96">
				<span className="text-7xl font-medium">{brand.name}™</span>
				<span
					style={{
						color: contrastingColor(brand.backgroundColor),
						opacity: 0.75,
					}}
					className="text-2xl font-medium"
				>
					{brand.description}
				</span>
			</div>
		</main>
	);
};

export default Page;
