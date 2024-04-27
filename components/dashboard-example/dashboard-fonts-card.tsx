import { Brand } from "@/lib/types";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/brand-card";
import { cn } from "@/lib/utils";
import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";

export const DashboardFontsCard = ({ brand }: { brand: Brand }) => {
	return (
		<>
			<Card brand={brand}>
				<CardHeader brand={brand}>
					<CardTitle brand={brand}>Fonts Families</CardTitle>
					<CardDescription brand={brand}>
						The primary font families used throughout the design system.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div>
							<h4
								className={cn(
									"text-lg underline",
									headingsFont(brand.font.headings.font).className,
									headingsWeight(brand.font.headings.weight)
								)}
							>
								Heading Font
							</h4>
							<p
								className={cn(
									"font-heading text-2xl font-bold",
									headingsFont(brand.font.headings.font).className,
									headingsWeight(brand.font.headings.weight)
								)}
							>
								{brand.font.headings.font}
							</p>
						</div>
						<div>
							<h4
								className={cn(
									"text-lg underline",
									bodyFont(brand.font.body.font).className,
									bodyWeight(brand.font.body.weight) == "font-normal"
										? "font-medium"
										: bodyWeight(brand.font.body.weight)
								)}
							>
								Body Font
							</h4>
							<p
								className={cn(
									"font-body text-2xl",
									bodyFont(brand.font.body.font).className,
									bodyWeight(brand.font.body.weight)
								)}
							>
								{brand.font.body.font}
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
};
