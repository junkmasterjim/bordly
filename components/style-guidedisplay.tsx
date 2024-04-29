import { getContrastingColor } from "@/lib/colors";
import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";
import { Brand } from "@/lib/types";
import { cn } from "@/lib/utils";

export const StyleGuideDisplay = ({ brand }: { brand: Brand }) => {
	const fontClasses = {
		headings: {
			font: headingsFont(brand.font.headings.font).className,
			weight: headingsWeight(brand.font.headings.weight),
		},
		body: {
			font: bodyFont(brand.font.body.font).className,
			weight: bodyWeight(brand.font.body.weight),
		},
	};

	return (
		<div
			className="flex w-full flex-col p-8 overflow-y-auto pb-32"
			style={{
				backgroundColor: brand.colors.background,
				color: brand.colors.foreground,
			}}
		>
			<h1
				className={cn(
					fontClasses.headings.font,
					fontClasses.headings.weight,
					"text-2xl font-bold border-b uppercase"
				)}
			>
				{brand.title}
				{brand.trademark == "true" ? "™" : ""} STYLE GUIDE
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mt-4">
				<StyleGuideHeadingsTypography brand={brand} />
				<StyleGuideBodyTypography brand={brand} />

				<div>
					<h2
						className={cn(
							"text-xl font-bold border-b",
							fontClasses.headings.font,
							fontClasses.headings.weight
						)}
					>
						COLOR GUIDE
					</h2>
					<div className="flex flex-col mt-4 gap-4">
						<div
							className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between"
							style={{
								backgroundColor: brand.colors.primary,
								color: getContrastingColor(brand.colors.primary),
							}}
						>
							<span className="uppercase">{brand.colors.primary}</span>
							<span>Primary</span>
						</div>
						<div
							className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between"
							style={{
								backgroundColor: brand.colors.secondary,
								color: getContrastingColor(brand.colors.secondary),
							}}
						>
							<span className="uppercase">{brand.colors.secondary}</span>
							<span>Secondary</span>
						</div>
						<div
							className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between"
							style={{
								backgroundColor: brand.colors.accent,
								color: getContrastingColor(brand.colors.accent),
							}}
						>
							<span className="uppercase">{brand.colors.accent}</span>
							<span>Accent</span>
						</div>
						<div
							className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between"
							style={{
								backgroundColor: brand.colors.background,
								color: getContrastingColor(brand.colors.background),
							}}
						>
							<span className="uppercase">{brand.colors.background}</span>
							<span>Background</span>
						</div>
						<div
							className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between"
							style={{
								backgroundColor: brand.colors.foreground,
								color: getContrastingColor(brand.colors.foreground),
							}}
						>
							<span className="uppercase">{brand.colors.foreground}</span>
							<span>Foreground</span>
						</div>
					</div>
				</div>
				<div className="md:col-span-1  2xl:col-span-3">
					<h2
						className={cn(
							"text-xl font-bold border-b",
							fontClasses.headings.font,
							fontClasses.headings.weight
						)}
					>
						LOGO VARIATIONS
					</h2>
					<div className="flex flex-col xl:flex-row justify-center gap-4  mt-4">
						<div className="flex flex-col w-full">
							<div
								className="flex items-center justify-center h-24 w-full mb-4 shadow"
								style={{
									backgroundColor: brand.colors.primary,
									color: getContrastingColor(brand.colors.primary),
								}}
							>
								<img
									alt=""
									className="h-12 w-12"
									height="50"
									src="/logorounded.png"
									style={{
										aspectRatio: "50/50",
										objectFit: "cover",
									}}
									width="50"
								/>
								<span
									className={cn(
										"ml-2 font-bold",
										brand.underline === "true" && "underline"
									)}
								>
									{brand.title}
									{brand.trademark === "true" ? "™" : ""}
								</span>
							</div>
							<span className="font-semibold text-center text-sm">
								On brand
							</span>
						</div>

						<div className="flex flex-col w-full">
							<div
								className="flex items-center justify-center h-24 w-full shadow mb-4"
								style={{
									backgroundColor: brand.colors.background,
									color: getContrastingColor(brand.colors.background),
								}}
							>
								<img
									alt=""
									className="h-12 w-12"
									height="50"
									src="/logorounded.png"
									style={{
										aspectRatio: "50/50",
										objectFit: "cover",
									}}
									width="50"
								/>
								<span
									className={cn(
										"ml-2 font-bold",
										brand.underline === "true" && "underline"
									)}
								>
									{brand.title}
									{brand.trademark === "true" ? "™" : ""}
								</span>
							</div>
							<span className="font-semibold text-center text-sm">
								On background
							</span>
						</div>
						<div className="flex flex-col w-full">
							<div
								className="flex items-center justify-center h-24 w-full mb-4 shadow"
								style={{
									backgroundColor: brand.colors.foreground,
									color: getContrastingColor(brand.colors.foreground),
								}}
							>
								<img
									alt=""
									className="h-12 w-12"
									height="50"
									src="/logorounded.png"
									style={{
										aspectRatio: "50/50",
										objectFit: "cover",
									}}
									width="50"
								/>
								<span
									className={cn(
										"ml-2 font-bold",
										brand.underline === "true" && "underline"
									)}
								>
									{brand.title}
									{brand.trademark === "true" ? "™" : ""}
								</span>
							</div>
							<span className="font-semibold text-center text-sm">
								On foreground
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const StyleGuideHeadingsTypography = ({ brand }: { brand: Brand }) => {
	const fontClasses = {
		headings: {
			font: headingsFont(brand.font.headings.font).className,
			weight: headingsWeight(brand.font.headings.weight),
		},
		body: {
			font: bodyFont(brand.font.body.font).className,
			weight: bodyWeight(brand.font.body.weight),
		},
	};

	return (
		<div>
			<h2
				className={cn(
					"text-xl font-bold border-b",
					fontClasses.headings.font,
					fontClasses.headings.weight
				)}
			>
				TYPOGRAPHY - HEADINGS
			</h2>
			<div className={cn("mt-4 overflow-hidden")}>
				<h3
					className={cn(fontClasses.headings.font, fontClasses.headings.weight)}
				>
					FONT SPECIMEN
				</h3>
				<p
					className={cn(
						"text-5xl font-bold mt-2",
						fontClasses.headings.font,
						fontClasses.headings.weight
					)}
				>
					{brand.font.headings.font}
				</p>
				<p
					className={cn(
						"text-lg mt-3",
						fontClasses.headings.font,
						fontClasses.headings.weight
					)}
				>
					ABCDEFGHIJKLMNOPQRSTUVWXYZ
				</p>
				<p
					className={cn(
						"text-lg mt-1",
						fontClasses.headings.font,
						fontClasses.headings.weight
					)}
				>
					abcdefghijklmnopqrstuvwxyz
				</p>
				<p
					className={cn(
						"text-lg mt-1",
						fontClasses.headings.font,
						fontClasses.headings.weight
					)}
				>
					12345678910
				</p>
				<div
					className={cn(
						"mt-6",
						fontClasses.headings.font,
						fontClasses.headings.weight
					)}
				>
					<h4
						className={cn(
							fontClasses.headings.font,
							fontClasses.headings.weight
						)}
					>
						HEADER TEXT WEIGHT
					</h4>
					<p className="text-5xl mt-2">Aa</p>
				</div>
				<div
					className={cn(
						"mt-6",
						fontClasses.headings.font,
						fontClasses.headings.weight
					)}
				>
					<h4
						className={cn(
							fontClasses.headings.font,
							fontClasses.headings.weight
						)}
					>
						SUB HEADER TEXT WEIGHT
					</h4>
					<p className="text-4xl mt-2">Aa</p>
				</div>
			</div>
		</div>
	);
};

const StyleGuideBodyTypography = ({ brand }: { brand: Brand }) => {
	const fontClasses = {
		headings: {
			font: headingsFont(brand.font.headings.font).className,
			weight: headingsWeight(brand.font.headings.weight),
		},
		body: {
			font: bodyFont(brand.font.body.font).className,
			weight: bodyWeight(brand.font.body.weight),
		},
	};

	return (
		<div>
			<h2
				className={cn(
					"text-xl font-bold border-b",
					fontClasses.headings.font,
					fontClasses.headings.weight
				)}
			>
				TYPOGRAPHY - BODY
			</h2>
			<div className={cn("mt-4")}>
				<h3
					className={cn(fontClasses.headings.font, fontClasses.headings.weight)}
				>
					FONT SPECIMEN
				</h3>
				<p
					className={cn(
						"text-5xl font-bold mt-2",
						fontClasses.body.font,
						fontClasses.body.weight
					)}
				>
					{brand.font.body.font}
				</p>
				<p
					className={cn(
						"text-lg mt-3",
						fontClasses.body.font,
						fontClasses.body.weight
					)}
				>
					ABCDEFGHIJKLMNOPQRSTUVWXYZ
				</p>
				<p
					className={cn(
						"text-lg mt-1",
						fontClasses.body.font,
						fontClasses.body.weight
					)}
				>
					abcdefghijklmnopqrstuvwxyz
				</p>
				<p
					className={cn(
						"text-lg mt-1",
						fontClasses.body.font,
						fontClasses.body.weight
					)}
				>
					12345678910
				</p>

				<div className="mt-6">
					<h4
						className={cn(
							fontClasses.headings.font,
							fontClasses.headings.weight
						)}
					>
						BODY TEXT WEIGHT
					</h4>
					<p className="text-xl mt-2">Aa</p>
				</div>
			</div>
		</div>
	);
};
