import { Brand } from "@/lib/types";
import { HeadingsDropdown } from "../controls/headings-dropdown";
import { FontsDropdown } from "../controls/fonts-dropdown";
import { WeightsDropdown } from "../controls/weights-dropdown";
import { TMToggle } from "../controls/tm-toggle";
import { UnderlineToggle } from "../controls/underline-toggle";
import { ArrowRight } from "lucide-react";

export const Sidebar = ({
	brand,
	setBrand,
}: {
	brand: Brand;
	setBrand: React.Dispatch<React.SetStateAction<Brand>>;
}) => {
	return (
		<div className="w-full max-w-[250px] h-full bg-background border-r text-foreground py-2">
			<div className="container flex flex-col gap-4 items-center">
				<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
					Text Content <ArrowRight className="h-4 w-4" />
					<HeadingsDropdown brand={brand} setBrand={setBrand} />
				</div>
				<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
					Font Family <ArrowRight className="h-4 w-4" />
					<FontsDropdown brand={brand} setBrand={setBrand} />
				</div>
				<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
					Font Weight <ArrowRight className="h-4 w-4" />
					<WeightsDropdown brand={brand} setBrand={setBrand} />
				</div>
				<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
					Trademark <ArrowRight className="h-4 w-4" />
					<TMToggle brand={brand} setBrand={setBrand} />
				</div>
				<div className="flex items-center justify-between text-sm font-semibold select-none gap-2 w-full">
					Underline <ArrowRight className="h-4 w-4" />
					<UnderlineToggle brand={brand} setBrand={setBrand} />
				</div>
			</div>
		</div>
	);
};
