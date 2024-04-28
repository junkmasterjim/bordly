"use client";

import { Brand, Fonts } from "@/lib/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ALargeSmall } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Button } from "../ui/button";
import { bodyWeight, fontsArray, headingsWeight } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const FontsDropdown = ({
	brand,
	setBrand,
	className,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
	className?: string;
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(
					"hover:bg-muted hover:text-muted-foreground size-9 rounded inline-flex items-center justify-center",
					className
				)}
			>
				<ALargeSmall strokeWidth={2.25} className="size-6" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="px-2 py-2 space-y-2 rounded-md"
				align="start"
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
							<span>
								Headings:
								<span
									className={cn(
										headingsWeight(brand.font.headings.weight),
										fontsArray.find(
											(font) => font.name == brand.font.headings.font
										)?.font.className,
										"ml-1"
									)}
								>
									{brand.font.headings.font}
								</span>
							</span>
						</SelectTrigger>
					</Button>
					<SelectContent className="max-w-xs">
						{fontsArray.map((font) => (
							<SelectItem
								key={font.name}
								value={font.name}
								className={font.font.className}
							>
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
							<span>
								Body:
								<span
									className={cn(
										fontsArray.find((font) => font.name == brand.font.body.font)
											?.font.className,
										bodyWeight(brand.font.body.weight),
										"ml-1"
									)}
								>
									{brand.font.body.font}
								</span>
							</span>
						</SelectTrigger>
					</Button>
					<SelectContent className="max-w-xs">
						{fontsArray.map((font) => (
							<SelectItem
								key={font.name}
								value={font.name}
								className={font.font.className}
							>
								{font.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
