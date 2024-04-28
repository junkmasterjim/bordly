import { Brand } from "@/lib/types";
import { Download, Mountain, Settings } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/brand-card";
import { getLighterOrDarkerColor, isLightColor } from "@/lib/colors";
import { DashboardHeadingsCard } from "./dashboard-headings-card";
import { DashboardBodyCard } from "./dashboard-body-card";
import { DashboardFontsCard } from "./dashboard-fonts-card";

import { DashboardCopyCard } from "./dashboard-copy-card";
import Image from "next/image";

export const DashboardExample = ({ brand }: { brand: Brand }) => {
	return (
		<div
			className="px-3 py-2 container border rounded-lg shadow"
			style={{
				backgroundColor: brand.backgroundColor,
				borderColor: getLighterOrDarkerColor(brand.accentColor, 0.6),
			}}
		>
			<div className="flex">
				<div className="flex-1 p-6">
					{/* Navigation / Header */}

					<div className="mb-8 flex items-center justify-between">
						<div
							className="flex items-center gap-4"
							style={{
								color: brand.accentColor,
							}}
						>
							<Image
								unoptimized
								src="/logorounded.png"
								alt="Bordly"
								width={200}
								height={200}
								className="h-12 w-auto object-cover"
							/>
							<h1 className="text-2xl font-bold">Bordly</h1>
						</div>
						<div className="flex items-center gap-4">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										style={{
											borderColor: brand.accentColor,
											backgroundColor: isLightColor(brand.accentColor)
												? "#ffffff"
												: "#000000",
											color: isLightColor(brand.accentColor)
												? "#000000"
												: "#ffffff",
										}}
										className="hover:opacity-80"
										size="sm"
										variant="outline"
									>
										<Settings className="h-4 w-4 mr-2" />
										Settings
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="start">
									<DropdownMenuItem>General</DropdownMenuItem>
									<DropdownMenuItem>Branding</DropdownMenuItem>
									<DropdownMenuItem>Accessibility</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Export</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<Button
								style={{
									borderColor: brand.accentColor,
									backgroundColor: isLightColor(brand.accentColor)
										? "#ffffff"
										: "#000000",
									color: isLightColor(brand.accentColor)
										? "#000000"
										: "#ffffff",
								}}
								className="hover:opacity-80"
								size="sm"
								variant="outline"
							>
								<Download className="h-4 w-4 mr-2" />
								Download
							</Button>
						</div>
					</div>

					{/* Tabs */}
					<Tabs className="w-full" defaultValue="typography">
						<TabsList className="mb-6 flex w-full border-b">
							<TabsTrigger value="typography">Typography</TabsTrigger>
							<TabsTrigger value="color-palette">Color Palette</TabsTrigger>
						</TabsList>

						{/* Tab 1 */}

						<TabsContent value="typography">
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								<DashboardHeadingsCard className="row-span-2" brand={brand} />
								<DashboardBodyCard brand={brand} />
								<DashboardFontsCard brand={brand} />
								<DashboardCopyCard brand={brand} />
							</div>
						</TabsContent>

						{/* Tab 2 */}
						<TabsContent value="color-palette">
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								<Card brand={brand}>
									<CardHeader brand={brand}>
										<CardTitle brand={brand}>Background Colors</CardTitle>
										<CardDescription brand={brand}>
											The background colors used throughout the design system.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-3 gap-4">
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-[#ffffff]" />
												<p className="text-sm font-medium">#FFFFFF</p>
											</div>
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-[#f3f4f6]" />
												<p className="text-sm font-medium">#F3F4F6</p>
											</div>
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-[#181818]" />

												<p className="text-sm font-medium">#181818</p>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card brand={brand}>
									<CardHeader brand={brand}>
										<CardTitle brand={brand}>Copy Colors</CardTitle>
										<CardDescription brand={brand}>
											The foreground colors used throughout the design system.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-3 gap-4">
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-[#181818]" />

												<p className="text-sm font-medium">#181818</p>
											</div>

											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-[#f1f1f1]" />
												<p className="text-sm font-medium">#F1F1F1</p>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card brand={brand}>
									<CardHeader brand={brand}>
										<CardTitle brand={brand}>Primary Colors</CardTitle>
										<CardDescription brand={brand}>
											The primary colors used throughout the design system.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-3 gap-4">
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-[#0077b6]" />
												<p className="text-sm font-medium">#0077B6</p>
											</div>
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-white text-[#0077b6]" />
												<p className="text-sm font-medium">
													Primary Foreground
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card brand={brand}>
									<CardHeader brand={brand}>
										<CardTitle brand={brand}>Accent Colors</CardTitle>
										<CardDescription brand={brand}>
											The accent colors used throughout the design system.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-3 gap-4">
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-[#ff5722]" />
												<p className="text-sm font-medium">Accent</p>
											</div>
											<div className="flex flex-col items-center gap-2">
												<div className="h-16 w-16 rounded-full bg-white text-[#ff5722]" />
												<p className="text-sm font-medium">Accent Foreground</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
};
