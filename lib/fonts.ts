import { Inter, Poppins, Raleway, Work_Sans, DM_Sans } from "next/font/google";
import { Fonts } from "./types";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const raleway = Raleway({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700"],
});
const work_sans = Work_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "400", "500", "600", "700"],
});
const dm_sans = DM_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const fontsArray = [
	{
		name: "Inter",
		font: inter,
	},
	{
		name: "Poppins",
		font: poppins,
	},
	{
		name: "Raleway",
		font: raleway,
	},
	{
		name: "Work Sans",
		font: work_sans,
	},
	{
		name: "DM Sans",
		font: dm_sans,
	},
];

export const fonts = {
	inter,
	poppins,
	raleway,
	work_sans,
	dm_sans,
};

export const headingsFont = (font: Fonts) => {
	switch (font) {
		case "Inter":
			return inter;
		case "Poppins":
			return poppins;
		case "Raleway":
			return raleway;
		case "Work Sans":
			return work_sans;
		case "DM Sans":
			return dm_sans;
	}
};

export const bodyFont = (font: Fonts) => {
	switch (font) {
		case "Inter":
			return inter;
		case "Poppins":
			return poppins;
		case "Raleway":
			return raleway;
		case "Work Sans":
			return work_sans;
		case "DM Sans":
			return dm_sans;
	}
};

export const headingsWeight = (weight: string) => {
	switch (weight) {
		case "normal":
			return "font-normal";
		case "medium":
			return "font-medium";
		case "semibold":
			return "font-semibold";
		case "bold":
			return "font-bold";
		case "extra-bold":
			return "font-extrabold";
	}
};

export const bodyWeight = (weight: string) => {
	switch (weight) {
		case "normal":
			return "font-normal";
		case "medium":
			return "font-medium";
		case "semibold":
			return "font-semibold";
		case "bold":
			return "font-bold";
	}
};
