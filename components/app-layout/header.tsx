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
import { Settings } from "lucide-react";
import { ExportButton } from "../controls/export-button";
import { HeadingsDropdown } from "../controls/headings-dropdown";

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
							<HeadingsDropdown brand={brand} setBrand={setBrand} />
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
