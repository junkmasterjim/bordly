import { Brand } from "@/lib/types";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { getContrastingColor, getLighterOrDarkerColor } from "@/lib/colors";
import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const HeadingsCard = ({
	brand,
	className,
}: {
	brand: Brand;
	className?: string;
}) => {
	return (
		<Card
			style={{
				backgroundColor: brand.backgroundColor,
				borderColor: getLighterOrDarkerColor(brand.accentColor, 0.5),
				color: getContrastingColor(brand.backgroundColor),
			}}
			className={cn(
				headingsFont(brand.font.headings.font).className,
				headingsWeight(brand.font.headings.weight),
				className
			)}
		>
			<CardHeader
				className="border-b mb-4"
				style={{
					borderColor: getLighterOrDarkerColor(brand.accentColor, 0.5),
				}}
			>
				<CardTitle
					className={cn(
						headingsFont(brand.font.headings.font),
						headingsWeight(brand.font.headings.weight)
					)}
				>
					Headings
				</CardTitle>
				<CardDescription
					className={cn(
						bodyFont(brand.font.body.font),
						bodyWeight(brand.font.body.weight)
					)}
				>
					The primary headings used throughout the design system.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<h1 className="text-4xl font-bold">Heading 1</h1>
						<p
							className={cn(
								bodyFont(brand.font.body.font),
								bodyWeight(brand.font.body.weight)
							)}
						>
							Used for page titles and hero sections.
						</p>
					</div>
					<div>
						<h2 className="text-3xl font-bold">Heading 2</h2>
						<p
							className={cn(
								bodyFont(brand.font.body.font),
								bodyWeight(brand.font.body.weight)
							)}
						>
							Used for section titles and major content blocks.
						</p>
					</div>
					<div>
						<h3 className="text-2xl font-bold">Heading 3</h3>
						<p
							className={cn(
								bodyFont(brand.font.body.font),
								bodyWeight(brand.font.body.weight)
							)}
						>
							Used for subsection titles and feature descriptions.
						</p>
					</div>
					<div>
						<h4 className="text-xl font-bold">Heading 4</h4>
						<p
							className={cn(
								bodyFont(brand.font.body.font),
								bodyWeight(brand.font.body.weight)
							)}
						>
							Used for card titles and other medium-sized headings.
						</p>
					</div>
					<div>
						<h5 className="text-lg font-bold">Heading 5</h5>
						<p
							className={cn(
								bodyFont(brand.font.body.font),
								bodyWeight(brand.font.body.weight)
							)}
						>
							Used for small headings and labels.
						</p>
					</div>
					<div>
						<h6 className="text-base font-bold">Heading 6</h6>
						<p
							className={cn(
								bodyFont(brand.font.body.font),
								bodyWeight(brand.font.body.weight)
							)}
						>
							Used for tiny headings and captions.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
