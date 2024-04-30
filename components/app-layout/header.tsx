"use client";

import { Brand } from "@/lib/types";
import { Button } from "../ui/button";
import Image from "next/image";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { FontsDropdown } from "../controls/fonts-dropdown";
import { WeightsDropdown } from "../controls/weights-dropdown";
import { TMToggle } from "../controls/tm-toggle";
import { UnderlineToggle } from "../controls/underline-toggle";
import { ColorMenu } from "../controls/color-menu";
import { Settings, X } from "lucide-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "../ui/alert-dialog";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { toast } from "sonner";

export const Header = ({
	defaultOpen = false,
	brand,
	setBrand,
}: {
	defaultOpen?: boolean;
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	return (
		<nav className="relative flex items-center justify-between gap-4 px-3 shadow h-14 bg-background">
			<span className="flex items-center justify-start gap-2">
				<Image
					unoptimized
					src="/typeface.png"
					alt="Bordly"
					width={200}
					height={200}
					className="h-14 w-auto object-cover select-none pointer-events-none py-2"
				/>
			</span>

			<div className="flex items-center">
				<ExportButton />
			</div>

			<span className="flex gap-4 items-center sm:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant={"outline"} size={"icon"}>
							<Settings className="size-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side={"left"} className="overflow-y-auto">
						<SheetTitle>Settings</SheetTitle>
						<SheetDescription>
							Change the settings for your brand here
						</SheetDescription>
						<div className="p-2 flex flex-col gap-2 items-center truncate pt-8">
							{/* <HeadingsDropdown brand={brand} setBrand={setBrand} /> */}
							<FontsDropdown brand={brand} setBrand={setBrand} />
							<WeightsDropdown brand={brand} setBrand={setBrand} />
							<div className="grid grid-cols-2 gap-2 w-full">
								<TMToggle brand={brand} setBrand={setBrand} />
								<UnderlineToggle brand={brand} setBrand={setBrand} />
							</div>
							<ColorMenu brand={brand} setBrand={setBrand} />
						</div>
					</SheetContent>
				</Sheet>
			</span>
		</nav>
	);
};

const ExportButton = () => {
	const [render, setRender] = useState<string | undefined>();

	const capture = async () => {
		const canvas = await html2canvas(
			document.getElementById("capture") as HTMLElement
		);

		const dataURL = canvas.toDataURL();
		navigator.clipboard.writeText(dataURL);
		setRender(dataURL);
	};

	return (
		<>
			<Button
				variant={"outline"}
				onClick={() => {
					capture();
				}}
			>
				Export
			</Button>

			<AlertDialog open={render !== undefined}>
				<AlertDialogContent
					style={{
						animationDuration: "0.25s",
					}}
					className="max-w-screen-md aspect-[4/3] justify-between flex flex-col"
				>
					<AlertDialogHeader>
						<AlertDialogTitle>Export</AlertDialogTitle>
						<AlertDialogDescription>
							Copy the image below to your clipboard
						</AlertDialogDescription>
					</AlertDialogHeader>
					<div className="flex items-center justify-center">
						<div className="p-2 border rounded-xl shadow">
							<Image
								id="capture-display"
								alt=""
								className="rounded-lg object-cover w-full h-auto max-h-96 shadow-sm"
								height="50"
								width="50"
								src={render as string | "/placeholder.svg"}
							/>
						</div>
					</div>
					<AlertDialogFooter>
						<AlertDialogCancel
							onClick={() => {
								setRender(undefined);
							}}
						>
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							asChild
							onClick={() => {
								const image = document.getElementById(
									"capture-display"
								) as HTMLImageElement;
								const dataURL = image.src;
								const link = document.createElement("a");
								link.href = dataURL;
								link.download = "bordly-render.png";
								link.click();
							}}
						>
							<Button>Download</Button>
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};
