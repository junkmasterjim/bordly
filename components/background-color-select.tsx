"use client";

import { Brand, Palette } from "@/lib/types";
import { Key, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { colors, getContrastingColor } from "@/lib/colors";
import { cn } from "@/lib/utils";

export const BackgroundColorSelect = ({
	className,
	brand,
	setBrand,
}: {
	className?: string;
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	const [palette, setPalette] = useState<Palette>("50");

	return (
		<Card className={className}>
			<CardHeader className="flex items-center">
				<p>Background</p>
				{/* select for color palette */}
				<Select
					defaultValue={palette}
					onValueChange={(e: Palette) => setPalette(e)}
				>
					<SelectTrigger className="max-w-xs">
						<div className="flex gap-2 items-center">
							Palette:{" "}
							<div className={`size-4 bg-neutral-${palette} rounded`} />
							{palette}
						</div>
					</SelectTrigger>
					<SelectContent className="max-w-xs">
						{[
							"50",
							"100",
							"200",
							"300",
							"400",
							"500",
							"600",
							"700",
							"800",
							"900",
							"950",
						].map((grade) => (
							<SelectItem key={grade} value={grade} className={grade}>
								<span className="flex gap-2 items-center">
									<div
										className={cn(
											"size-4 rounded shadow",
											grade == "50"
												? "bg-neutral-50"
												: grade == "100"
												? "bg-neutral-100"
												: grade == "200"
												? "bg-neutral-200"
												: grade == "300"
												? "bg-neutral-300"
												: grade == "400"
												? "bg-neutral-400"
												: grade == "500"
												? "bg-neutral-500"
												: grade == "600"
												? "bg-neutral-600"
												: grade == "700"
												? "bg-neutral-700"
												: grade == "800"
												? "bg-neutral-800"
												: grade == "900"
												? "bg-neutral-900"
												: "bg-neutral-950"
										)}
									/>
									{grade}
								</span>
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent>
				<div className="flex gap-4 items-center justify-center flex-wrap ">
					{colors[palette].map(
						(color: { bgColor: Key | null | undefined; hex: string }) => (
							<Card
								key={color.bgColor}
								style={{
									backgroundColor: color.hex,
									// color: getContrastingColor(color.hex),
								}}
								onClick={() =>
									setBrand({
										...brand,
										colors: { ...brand.colors, background: color.hex },
									})
								}
								className="aspect-[4/3] w-8 cursor-pointer shadow border-none"
							/>
						)
					)}
				</div>
			</CardContent>
		</Card>
	);
};
