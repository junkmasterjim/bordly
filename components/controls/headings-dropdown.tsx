"use client";

import { Text } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Brand } from "@/lib/types";

export const HeadingsDropdown = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	return (
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
	);
};
