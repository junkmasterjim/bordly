"use client";

import { Brand, Fonts } from "@/lib/types";
import { useState } from "react";
import { Button } from "./ui/button";
import {
	ALargeSmall,
	Bold,
	ChevronDown,
	Heading1,
	Heading2,
	Text,
	Underline,
	Weight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { fontsArray } from "@/lib/fonts";
import { BackgroundColorSelect } from "./background-color-select";
import { AccentColorSelect } from "./accent-color-select";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Textarea } from "./ui/textarea";
import { Toggle } from "./ui/toggle";

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
			<nav className="top-0 left-0 right-0 z-50 h-16 bg-background shadow-md">
				<div className="container relative flex items-center justify-between gap-4">
					<span>
						<Image
							unoptimized
							src="/typeface.png"
							alt="Bordly"
							width={200}
							height={200}
							className="h-16 w-full object-cover select-none pointer-events-none py-2"
						/>
					</span>
					<span className="flex gap-4 items-center flex-row-reverse">
						{/* Toggle */}
						<div className="size-8">
							<div className="absolute top-3 right-4 z-50">
								<Button onClick={toggle} size={"icon"} variant={"outline"}>
									<motion.span
										animate={{
											rotateX: isOpen ? "180deg" : "0deg",
											transition: { duration: 0.3, type: "tween" },
										}}
									>
										<ChevronDown className="h-4 w-4" />
									</motion.span>
								</Button>
							</div>
						</div>

						{/* Controls */}
						<div className="flex items-center gap-4">
							{/* Edit headings */}
							<DropdownMenu>
								<DropdownMenuTrigger className="hover:bg-muted hover:text-muted-foreground size-9 rounded inline-flex items-center justify-center">
									<Text className="size-6" />
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="px-2 py-2 space-y-2 rounded-md"
									align="end"
								>
									<Input
										placeholder="Name"
										value={brand.name}
										onChange={(e) => {
											setBrand({ ...brand, name: e.target.value });
										}}
									/>
									<Textarea
										rows={4}
										placeholder="Description"
										className="resize-none"
										value={brand.description}
										onChange={(e) => {
											setBrand({ ...brand, description: e.target.value });
										}}
									/>
								</DropdownMenuContent>
							</DropdownMenu>

							<DropdownMenu>
								<DropdownMenuTrigger className="hover:bg-muted hover:text-muted-foreground size-9 rounded inline-flex items-center justify-center">
									<ALargeSmall strokeWidth={2.25} className="size-6" />
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="px-2 py-2 space-y-2 rounded-md"
									align="end"
								>
									<span className="flex items-center justify-center text-sm font-semibold select-none">
										Font Family
									</span>
									<DropdownMenuSeparator />
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
										<Button variant={"ghost"} asChild className="p-0.5">
											<SelectTrigger className="border-none justify-between px-2">
												Headings: {brand.font.headings.font}
											</SelectTrigger>
										</Button>
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
										<Button variant={"ghost"} asChild className="p-0.5">
											<SelectTrigger className="border-none justify-between px-2">
												Body: {brand.font.body.font}
											</SelectTrigger>
										</Button>
										<SelectContent className="max-w-xs">
											{fontsArray.map((font) => (
												<SelectItem key={font.name} value={font.name}>
													{font.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</DropdownMenuContent>
							</DropdownMenu>

							<DropdownMenu>
								<DropdownMenuTrigger className="hover:bg-muted hover:text-muted-foreground size-9 rounded inline-flex items-center justify-center">
									<Weight strokeWidth={2.25} className="size-6" />
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="px-2 py-2 space-y-2 rounded-md"
									align="end"
								>
									<span className="flex items-center justify-center text-sm font-semibold select-none under">
										Font Weight
									</span>
									<DropdownMenuSeparator />
									<Select
										defaultValue={brand.font.body.weight}
										onValueChange={(
											e: "normal" | "medium" | "semibold" | "bold"
										) =>
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
										<Button variant={"ghost"} asChild className="p-0.5">
											<SelectTrigger className="border-none justify-between px-2 capitalize">
												Body: {brand.font.body.weight}
											</SelectTrigger>
										</Button>
										<SelectContent className="max-w-xs">
											{/* map weights */}
											{["normal", "medium", "semibold", "bold"].map(
												(weight) => (
													<SelectItem key={weight} value={weight}>
														{weight}
													</SelectItem>
												)
											)}
										</SelectContent>
									</Select>

									{/*  */}
									{/*  */}
									{/*  */}
									{/*  */}
									{/*  */}
									{/*  */}
									{/*  */}

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
										<Button
											variant={"ghost"}
											asChild
											className="px-2 py-1 capitalize"
										>
											<SelectTrigger className="border-none justify-between px-2 capitalize">
												Headings: {brand.font.headings.weight}
											</SelectTrigger>
										</Button>

										<SelectContent className="capitalize">
											{["normal", "medium", "semibold", "bold", "black"].map(
												(weight) => (
													<SelectItem key={weight} value={weight}>
														{weight}
													</SelectItem>
												)
											)}
										</SelectContent>
									</Select>
								</DropdownMenuContent>
							</DropdownMenu>

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
						</div>
					</span>
				</div>
			</nav>

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
