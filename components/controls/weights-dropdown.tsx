"use client";

import { Brand } from "@/lib/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Weight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Button } from "../ui/button";

export const WeightsDropdown = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	return (
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
					<Button variant={"ghost"} asChild className="px-2 py-1 capitalize">
						<SelectTrigger className="border-none justify-between px-2 capitalize">
							Headings: {brand.font.headings.weight}
						</SelectTrigger>
					</Button>

					<SelectContent className="capitalize">
						{["normal", "medium", "semibold", "bold", "black"].map((weight) => (
							<SelectItem key={weight} value={weight}>
								{weight}
							</SelectItem>
						))}
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
					<Button variant={"ghost"} asChild className="p-0.5">
						<SelectTrigger className="border-none justify-between px-2 capitalize">
							Body: {brand.font.body.weight}
						</SelectTrigger>
					</Button>
					<SelectContent className="max-w-xs">
						{/* map weights */}
						{["normal", "medium", "semibold", "bold"].map((weight) => (
							<SelectItem key={weight} value={weight}>
								{weight}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
