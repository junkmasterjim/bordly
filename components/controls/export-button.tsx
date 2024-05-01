"use client";

import html2canvas from "html2canvas";
import { useState } from "react";
import { Button } from "../ui/button";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "../ui/alert-dialog";
import Image from "next/image";

export const ExportButton = () => {
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
								src={(render as string) || "/"}
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
