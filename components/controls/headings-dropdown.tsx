"use client";

import { Text } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Brand } from "@/lib/types";
import { cn } from "@/lib/utils";

export const HeadingsDropdown = ({
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
					"hover:bg-muted hover:text-muted-foreground h-9 w-full rounded inline-flex items-center justify-center",
					className
				)}
			>
				<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full px-2">
					Heading & Subtitle
					<Text className="h-4 w-4" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="py-2 space-y-2 rounded-md" align="start">
				<span className="flex items-center justify-center text-sm font-semibold select-none">
					Heading & Subtitle
				</span>
				<DropdownMenuSeparator />
				<Input
					placeholder="Heading"
					value={brand.title}
					onChange={(e) => {
						setBrand({ ...brand, title: e.target.value });
					}}
				/>
				<Textarea
					rows={4}
					placeholder="Subtitle"
					className="resize-none"
					value={brand.subtitle}
					onChange={(e) => {
						setBrand({ ...brand, subtitle: e.target.value });
					}}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
