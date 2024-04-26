import * as React from "react";

import { cn } from "@/lib/utils";
import { getContrastingColor, getLighterOrDarkerColor } from "@/lib/colors";
import { Brand } from "@/lib/types";
import {
	bodyFont,
	bodyWeight,
	headingsFont,
	headingsWeight,
} from "@/lib/fonts";

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		brand: Brand;
	}
>(({ brand, className, ...props }, ref) => (
	<div
		style={{
			backgroundColor: brand.backgroundColor,
			borderColor: getLighterOrDarkerColor(brand.accentColor, 0.5),
			color: getContrastingColor(brand.backgroundColor),
		}}
		ref={ref}
		className={cn(
			"rounded-lg border bg-card text-card-foreground shadow",
			className
		)}
		{...props}
	/>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		brand: Brand;
	}
>(({ brand, className, ...props }, ref) => (
	<div
		style={{
			borderColor: getLighterOrDarkerColor(brand.accentColor, 0.5),
		}}
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6 border-b mb-4", className)}
		{...props}
	/>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement> & {
		brand: Brand;
	}
>(({ brand, className, ...props }, ref) => (
	<h3
		style={{
			color: getContrastingColor(brand.backgroundColor),
		}}
		ref={ref}
		className={cn(
			"text-2xl font-semibold leading-none tracking-tight",
			className,
			headingsFont(brand.font.headings.font).className,
			headingsWeight(brand.font.headings.weight)
		)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement> & {
		brand: Brand;
	}
>(({ brand, className, ...props }, ref) => (
	<p
		style={{
			color: brand.mutedColor,
		}}
		ref={ref}
		className={cn(
			"text-sm text-muted-foreground",
			className,
			bodyFont(brand.font.body.font).className,
			bodyWeight(brand.font.body.weight)
		)}
		{...props}
	/>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
));
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};
