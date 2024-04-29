export type Fonts =
	| "Inter"
	| "Poppins"
	| "Raleway"
	| "Work Sans"
	| "DM Sans"
	| "Montserrat"
	| "Merriweather"
	| "Playfair Display";

export type Palette =
	| "50"
	| "100"
	| "200"
	| "300"
	| "400"
	| "500"
	| "600"
	| "700"
	| "800"
	| "900"
	| "950";

export type Brand = {
	title: string;
	subtitle: string;
	underline: "true" | "false";
	trademark: "true" | "false";
	colors: {
		primary: string;
		secondary: string;
		accent: string;
		background: string;
		foreground: string;
	};

	font: {
		headings: {
			font: Fonts;
			weight: "normal" | "medium" | "semibold" | "bold" | "black";
		};
		body: { font: Fonts; weight: "normal" | "medium" | "semibold" | "bold" };
	};
};
