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
					"hover:bg-muted hover:text-muted-foreground size-9 rounded inline-flex items-center justify-center",
					className
				)}
			>
				<Text className="size-6" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="px-2 py-2 space-y-2 rounded-md"
				align="start"
			>
				<span className="flex items-center justify-center text-sm font-semibold select-none">
					Heading & Subtitle
				</span>
				<DropdownMenuSeparator />
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
	);
};
