import { Brand } from "@/lib/types";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/brand-card";
import {
	colors,
	getContrastingColor,
	getLighterOrDarkerColor,
} from "@/lib/colors";
import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const DashboardBodyCard = ({
	brand,
	className,
}: {
	brand: Brand;
	className?: string;
}) => {
	return (
		<Card
			brand={brand}
			style={{
				backgroundColor: brand.colors.background,
				borderColor: getLighterOrDarkerColor(brand.colors.accent, 0.5),
				color: getContrastingColor(brand.colors.background),
			}}
			className={cn(
				"shadow",
				headingsFont(brand.font.headings.font).className,
				headingsWeight(brand.font.headings.weight),
				className
			)}
		>
			<CardHeader
				brand={brand}
				className="border-b mb-4"
				style={{
					borderColor: getLighterOrDarkerColor(brand.colors.accent, 0.5),
				}}
			>
				<CardTitle
					brand={brand}
					className={cn(
						headingsFont(brand.font.headings.font),
						headingsWeight(brand.font.headings.weight)
					)}
				>
					Body
				</CardTitle>
				<CardDescription
					brand={brand}
					style={{
						color: brand.colors.foreground,
					}}
					className={cn(
						bodyFont(brand.font.body.font),
						bodyWeight(brand.font.body.weight)
					)}
				>
					The primary body text styles used throughout the design system.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="text-lg font-normal">This is larger body text.</div>

					<div>
						<p className="text-base font-normal">
							This is the default body text. It is used for the majority of the
							content on the site.
						</p>
					</div>
					<div>
						<p className="text-sm font-normal">
							This is a smaller body text size, used for captions, labels, and
							other secondary content.
						</p>
					</div>
					<div>
						<p className="text-xs font-normal">
							This is the smallest body text size, used for very minor details
							and legal copy.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
