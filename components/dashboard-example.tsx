import { Brand } from "@/lib/types";
import { Download, Mountain, Settings } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { headingsFont, headingsWeight } from "@/lib/fonts";
import {
	getLighterOrDarkerColor,
	getContrastingColor,
	isLightColor,
} from "@/lib/colors";

export const DashboardExample = ({ brand }: { brand: Brand }) => {
	return (
		<div
			className="px-3 py-2 container border rounded-lg shadow"
			style={{
				backgroundColor: brand.backgroundColor,
				borderColor: getLighterOrDarkerColor(brand.accentColor, 0.5),
			}}
		>
			<div className="flex min-h-screen">
				<div className="flex-1 p-6">
					{/* Navigation / Header */}

					<div className="mb-8 flex items-center justify-between">
						<div
							className="flex items-center gap-4"
							style={{
								color: brand.accentColor,
							}}
						>
							<Mountain className="h-6 w-6" />
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
								<DropdownMenuContent align="end">
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

						{/* Tabs Content 1 */}

						<TabsContent value="typography">
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								<Card
									style={{
										backgroundColor: brand.backgroundColor,
										color: getContrastingColor(brand.backgroundColor),
									}}
									className={cn(
										headingsFont(brand.font.headings.font).className,
										headingsWeight(brand.font.headings.weight)
									)}
								>
									<CardHeader>
										<CardTitle>Headings</CardTitle>
										<CardDescription>
											The primary headings used throughout the design system.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div>
												<h1 className="text-4xl font-bold">Heading 1</h1>
												<p>Used for page titles and hero sections.</p>
											</div>
											<div>
												<h2 className="text-3xl font-bold">Heading 2</h2>
												<p>Used for section titles and major content blocks.</p>
											</div>
											<div>
												<h3 className="text-2xl font-bold">Heading 3</h3>
												<p>
													Used for subsection titles and feature descriptions.
												</p>
											</div>
											<div>
												<h4 className="text-xl font-bold">Heading 4</h4>
												<p>
													Used for card titles and other medium-sized headings.
												</p>
											</div>
											<div>
												<h5 className="text-lg font-bold">Heading 5</h5>
												<p>Used for small headings and labels.</p>
											</div>
											<div>
												<h6 className="text-base font-bold">Heading 6</h6>
												<p>Used for tiny headings and captions.</p>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>Body Text</CardTitle>
										<CardDescription>
											The primary body text styles used throughout the design
											system.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div>
												<p className="text-base font-normal">
													This is the default body text. It is used for the
													majority of the content on the site.
												</p>
											</div>
											<div>
												<p className="text-sm font-normal">
													This is a smaller body text size, used for captions,
													labels, and other secondary content.
												</p>
											</div>
											<div>
												<p className="text-xs font-normal">
													This is the smallest body text size, used for very
													minor details and legal copy.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Font Families</CardTitle>
										<CardDescription>
											The primary font families used throughout the design
											system.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div>
												<h4 className="text-lg font-bold">Heading Font</h4>
												<p className="font-heading text-2xl font-bold">
													{brand.font.headings.font}
												</p>
											</div>
											<div>
												<h4 className="text-lg font-bold">Body Font</h4>
												<p className="font-body text-2xl">
													{brand.font.body.font}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						{/* Tabs Content 2 */}

						<TabsContent value="color-palette">
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								<Card>
									<CardHeader>
										<CardTitle>Background Colors</CardTitle>
										<CardDescription>
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
								<Card>
									<CardHeader>
										<CardTitle>Copy Colors</CardTitle>
										<CardDescription>
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
								<Card>
									<CardHeader>
										<CardTitle>Primary Colors</CardTitle>
										<CardDescription>
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
								<Card>
									<CardHeader>
										<CardTitle>Accent Colors</CardTitle>
										<CardDescription>
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
