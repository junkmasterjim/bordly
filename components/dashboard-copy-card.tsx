import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/brand-card";
import { Brand } from "@/lib/types";

export const DashboardCopyCard = ({ brand }: { brand: Brand }) => {
	return (
		<Card brand={brand} className="md:col-span-2">
			<CardHeader brand={brand}>
				<CardTitle brand={brand}>Example Copy</CardTitle>
				<CardDescription brand={brand}>
					Below is of some example copy, using your brand's fonts and weights
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex gap-4 items-center">
					<div className="space-y-4 max-w-prose">
						{/* create a basic copy example of a paragraph, subtitle, and heading, using lorem ipsum */}
						<div
							className={cn(
								"text-2xl",
								headingsFont(brand.font.headings.font).className,
								headingsWeight(brand.font.headings.weight)
							)}
						>
							<h3 className="underline">Our brand, explained.</h3>
							<h4
								className={cn(
									"text-base no-underline mb-2",
									headingsFont(brand.font.headings.font).className,
									headingsWeight(brand.font.headings.weight)
								)}
								style={{
									color: brand.mutedColor,
								}}
							>
								Don't worry, we'll keep it brief
							</h4>
							<p
								className={cn(
									"text-base",
									bodyFont(brand.font.body.font).className,
									bodyWeight(brand.font.body.weight)
								)}
								style={{
									color: brand.mutedColor,
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
					<div>
						<Image
							unoptimized
							height={200}
							width={200}
							src="/placeholder.svg"
							alt="image"
							className="rounded-lg shadow-md object-cover w-full"
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
