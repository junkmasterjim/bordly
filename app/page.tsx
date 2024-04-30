"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

import { Brand } from "@/lib/types";
import { EditorDisplay } from "@/components/app-layout/editor-display";
import { Sidebar } from "@/components/app-layout/sidebar";
import { Header } from "@/components/app-layout/header";
import { StyleGuideDisplay } from "@/components/style-guide\u0015display";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Page = () => {
	const [brand, setBrand] = useState<Brand>({
		title: "Bordly",
		subtitle: "prototype your design system in 5 minutes with bordly",
		underline: "true",
		trademark: "true",
		colors: {
			primary: "#2D95EC",
			secondary: "#666666",
			accent: "#A0A0A0",
			background: "#F8F8F8",
			foreground: "#181818",
		},
		font: {
			headings: {
				font: "Poppins",
				weight: "medium",
			},
			body: {
				font: "Inter",
				weight: "normal",
			},
		},
	});

	return (
		<body className={(poppins.className, "overflow-hidden")}>
			<Header brand={brand} setBrand={setBrand} />
			<div className="flex w-full h-svh">
				<Sidebar brand={brand} setBrand={setBrand} />

				<div className="overflow-auto max-h-screen w-full">
					<span id="capture">
						<StyleGuideDisplay brand={brand} />
						{/* <EditorDisplay brand={brand} setBrand={setBrand} /> */}
					</span>
				</div>
			</div>
		</body>
	);
};
export default Page;
