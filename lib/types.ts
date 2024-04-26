export type Fonts = "Inter" | "Poppins" | "Raleway" | "Work Sans" | "DM Sans";

export type Brand = {
	name: string;
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
