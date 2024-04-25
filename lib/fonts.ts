import {
	Inter,
	Poppins,
	Roboto,
	Noto_Sans,
	Raleway,
	Work_Sans,
	DM_Sans,
	Chivo,
} from "next/font/google";

export type Fonts =
	| "Inter"
	| "Poppins"
	| "Roboto"
	| "Raleway"
	| "Work Sans"
	| "DM Sans"
	| "Chivo";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700"],
});
const noto_sans = Noto_Sans({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700"],
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

const chivo = Chivo({
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
		name: "Roboto",
		font: roboto,
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
	{
		name: "Chivo",
		font: chivo,
	},
];

export const fonts = {
	inter,
	poppins,
	roboto,
	raleway,
	work_sans,
	dm_sans,
	chivo,
};
