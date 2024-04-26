"use client";

import { Brand } from "@/lib/types";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { colors, getContrastingColor } from "@/lib/colors";

export const AccentColorSelect = ({
	className,
	brand,
	setBrand,
}: {
	className?: string;
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	const [palette, setPalette] = useState<"200" | "400" | "600" | "800">("600");

	return (
		<Card className={className}>
			<CardHeader className="flex items-center">
				<p>Accent</p>
				<Select
					defaultValue={palette}
					onValueChange={(e: "200" | "400" | "600" | "800") => setPalette(e)}
				>
					<SelectTrigger className="max-w-xs">
						<div className="flex gap-2 items-center">
							Palette:{" "}
							<div className={`size-4 bg-neutral-${palette} rounded`} />
							{palette}
						</div>
					</SelectTrigger>
					<SelectContent className="max-w-xs">
						<SelectItem value="200">
							<span className="flex gap-2 items-center">
								<div className="size-4 rounded bg-neutral-200" />
								200
							</span>
						</SelectItem>
						<SelectItem value="400">
							<span className="flex gap-2 items-center">
								<div className="size-4 rounded bg-neutral-400" />
								400
							</span>
						</SelectItem>
						<SelectItem value="600">
							<span className="flex gap-2 items-center">
								<div className="size-4 rounded bg-neutral-600" />
								600
							</span>
						</SelectItem>
						<SelectItem value="800">
							<span className="flex gap-2 items-center">
								<div className="size-4 rounded bg-neutral-800" />
								800
							</span>
						</SelectItem>
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent>
				<div className="flex gap-4 items-center justify-center flex-wrap ">
					{colors[palette].map((color) => (
						<Card
							key={color.bgColor}
							style={{
								backgroundColor: color.hex,
								color: getContrastingColor(color.hex),
							}}
							onClick={() => setBrand({ ...brand, accentColor: color.hex })}
							className="aspect-[4/3] w-8 cursor-pointer shadow border-none"
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
