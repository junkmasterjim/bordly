"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

import { Brand } from "@/lib/types";
import { HeadingsDisplay } from "@/components/app-layout/headings-display";
import { Sidebar } from "@/components/app-layout/sidebar";
import { Header } from "@/components/app-layout/header";
import { StyleGuideDisplay } from "@/components/style-guide\u0015display";
import { DashboardExample } from "@/components/dashboard-example/dashboard-example";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Page = () => {
	const [brand, setBrand] = useState<Brand>({
		title: "Bordly",
		subtitle: "Prototype your design system in 30 seconds with Bordly.",
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
						<HeadingsDisplay brand={brand} setBrand={setBrand} />
						<StyleGuideDisplay brand={brand} />
						{/* <DashboardExample brand={brand} /> */}
					</span>
					<div className="py-24" />
				</div>
			</div>
		</body>
	);
};
export default Page;
