"use client";

import { Brand } from "@/lib/types";
import { ColorPicker } from "antd";
import Sketch from "@uiw/react-color-sketch";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { colors, getContrastingColor } from "@/lib/colors";
import { Input } from "../ui/input";

export const ColorMenu = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	const colorsArray = [
		colors["50"],
		colors["100"],
		colors["200"],
		colors["300"],
		colors["400"],
		colors["500"],
		colors["600"],
		colors["700"],
		colors["800"],
		colors["900"],
		colors["950"],
	];

	return (
		<div className="flex flex-col gap-2 w-full">
			<div className="flex flex-col gap-2 w-full">
				<h4 className="text-lg font-semibold">Colors</h4>
				<div className="flex flex-col gap-2 w-full">
					{/* map colors */}
					<>
						<h5 className="text-sm font-medium">Primary</h5>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div
									className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between rounded-md cursor-pointer hover:shadow-lg transition-all duration-300"
									style={{
										backgroundColor: brand.colors.primary,
										color: getContrastingColor(brand.colors.primary),
									}}
								>
									<span className="uppercase">{brand.colors.primary}</span>
									<span>Primary</span>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Sketch
									disableAlpha
									color={brand.colors.primary}
									onChange={(color) => {
										setBrand({
											...brand,
											colors: {
												...brand.colors,
												primary: color.hex,
											},
										});
									}}
								/>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
					<>
						<h5 className="text-sm font-medium">Secondary</h5>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div
									className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between rounded-md cursor-pointer hover:shadow-lg transition-all duration-300"
									style={{
										backgroundColor: brand.colors.secondary,
										color: getContrastingColor(brand.colors.secondary),
									}}
								>
									<span className="uppercase">{brand.colors.secondary}</span>
									<span>Secondary</span>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Sketch
									disableAlpha
									color={brand.colors.secondary}
									onChange={(color) => {
										setBrand({
											...brand,
											colors: {
												...brand.colors,
												secondary: color.hex,
											},
										});
									}}
								/>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
					<>
						<h5 className="text-sm font-medium">Accent</h5>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div
									className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between rounded-md cursor-pointer hover:shadow-lg transition-all duration-300"
									style={{
										backgroundColor: brand.colors.accent,
										color: getContrastingColor(brand.colors.accent),
									}}
								>
									<span className="uppercase">{brand.colors.accent}</span>
									<span>Accent</span>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Sketch
									disableAlpha
									color={brand.colors.accent}
									onChange={(color) => {
										setBrand({
											...brand,
											colors: {
												...brand.colors,
												accent: color.hex,
											},
										});
									}}
								/>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
					<>
						<h5 className="text-sm font-medium">Background</h5>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div
									className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between rounded-md cursor-pointer hover:shadow-lg transition-all duration-300"
									style={{
										backgroundColor: brand.colors.background,
										color: getContrastingColor(brand.colors.background),
									}}
								>
									<span className="uppercase">{brand.colors.background}</span>
									<span>Background</span>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Sketch
									disableAlpha
									color={brand.colors.background}
									onChange={(color) => {
										setBrand({
											...brand,
											colors: {
												...brand.colors,
												background: color.hex,
											},
										});
									}}
								/>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
					<>
						<h5 className="text-sm font-medium">Foreground</h5>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div
									className="h-24 w-full shadow px-2 py-1 font-medium flex justify-between rounded-md cursor-pointer hover:shadow-lg transition-all duration-300"
									style={{
										backgroundColor: brand.colors.foreground,
										color: getContrastingColor(brand.colors.foreground),
									}}
								>
									<span className="uppercase">{brand.colors.foreground}</span>
									<span>Foreground</span>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Sketch
									disableAlpha
									color={brand.colors.foreground}
									onChange={(color) => {
										setBrand({
											...brand,
											colors: {
												...brand.colors,
												foreground: color.hex,
											},
										});
									}}
								/>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
				</div>
			</div>
		</div>
	);
};
