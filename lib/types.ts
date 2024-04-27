export type Fonts = "Inter" | "Poppins" | "Raleway" | "Work Sans" | "DM Sans";

export type Palette = "50" | "200" | "400" | "600" | "800" | "950";

export type Brand = {
	name: string;
	underline: "true" | "false";
	trademark: "true" | "false";
	description: string;
	backgroundColor: string;
	mutedColor: string;
	accentColor: string;
	font: {
		headings: {
			font: Fonts;
			weight: "normal" | "medium" | "semibold" | "bold" | "black";
		};
		body: { font: Fonts; weight: "normal" | "medium" | "semibold" | "bold" };
	};
};
