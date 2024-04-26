"use client";

import { Brand, Fonts } from "@/lib/types";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { fontsArray } from "@/lib/fonts";
import { BackgroundColorSelect } from "./background-color-select";
import { AccentColorSelect } from "./accent-color-select";
import { motion } from "framer-motion";

export const Header = ({
	defaultOpen = false,
	brand,
	setBrand,
}: {
	defaultOpen?: boolean;
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const toggle = () => setIsOpen((prev) => !prev);
	return (
		<>
			<div className="fixed top-4 right-4 z-50">
				<Button onClick={toggle} size={"icon"} variant={"outline"}>
					<motion.span
						animate={{
							rotateX: isOpen ? "180deg" : "0deg",
							transition: { duration: 0.5, type: "tween" },
						}}
					>
						<ChevronDown className="h-4 w-4" />
					</motion.span>
				</Button>
			</div>

			<motion.header
				className={cn(
					"shadow overflow-hidden relative z-0 bg-background text-foreground",
					isOpen == true ? "" : "h-0"
				)}
				animate={{
					opacity: isOpen ? 1 : 0,
					transition: { duration: 0.5, type: "tween" },
				}}
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
			</motion.header>
		</>
	);
};
