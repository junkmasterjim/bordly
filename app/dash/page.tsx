import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuContent,
	DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Download, Mountain, Palette, Settings } from "lucide-react";

const Page = () => {
	return (
		<div key="1" className="flex min-h-screen">
			<div className="flex-1 p-6">
				<div className="mb-8 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Mountain className="h-6 w-6 text-[#0077b6]" />
						<h1 className="text-2xl font-bold text-[#0077b6]">Bordly</h1>
					</div>
					<div className="flex items-center gap-4">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									className="border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900"
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
							className="border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900"
							size="sm"
							variant="outline"
						>
							<Download className="h-4 w-4 mr-2" />
							Download
						</Button>
					</div>
				</div>
				<Tabs className="w-full" defaultValue="typography">
					<TabsList className="mb-6 flex w-full border-b">
						<TabsTrigger value="typography">Typography</TabsTrigger>
						<TabsTrigger value="color-palette">Color Palette</TabsTrigger>
					</TabsList>
					<TabsContent value="typography">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							<Card>
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
											<p className="text-gray-500 dark:text-gray-400">
												Used for page titles and hero sections.
											</p>
										</div>
										<div>
											<h2 className="text-3xl font-bold">Heading 2</h2>
											<p className="text-gray-500 dark:text-gray-400">
												Used for section titles and major content blocks.
											</p>
										</div>
										<div>
											<h3 className="text-2xl font-bold">Heading 3</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Used for subsection titles and feature descriptions.
											</p>
										</div>
										<div>
											<h4 className="text-xl font-bold">Heading 4</h4>
											<p className="text-gray-500 dark:text-gray-400">
												Used for card titles and other medium-sized headings.
											</p>
										</div>
										<div>
											<h5 className="text-lg font-bold">Heading 5</h5>
											<p className="text-gray-500 dark:text-gray-400">
												Used for small headings and labels.
											</p>
										</div>
										<div>
											<h6 className="text-base font-bold">Heading 6</h6>
											<p className="text-gray-500 dark:text-gray-400">
												Used for tiny headings and captions.
											</p>
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
												This is the smallest body text size, used for very minor
												details and legal copy.
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Font Families</CardTitle>
									<CardDescription>
										The primary font families used throughout the design system.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div>
											<h4 className="text-lg font-bold">Heading Font</h4>
											<p className="font-heading text-2xl font-bold">
												Roboto Slab
											</p>
										</div>
										<div>
											<h4 className="text-lg font-bold">Body Font</h4>
											<p className="font-body text-2xl">Inter</p>
										</div>
										<div>
											<h4 className="text-lg font-bold">Monospace Font</h4>
											<p className="font-mono text-2xl">Fira Code</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</TabsContent>
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
											<p className="text-sm font-medium">Primary Foreground</p>
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
	);
};

export default Page;
