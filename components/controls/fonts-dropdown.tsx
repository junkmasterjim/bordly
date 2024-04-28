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
import { fontsArray } from "@/lib/fonts";

export const FontsDropdown = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	return (
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
	);
};
