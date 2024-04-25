import { Inter, Poppins, Raleway, Work_Sans, DM_Sans } from "next/font/google";

export type Fonts = "Inter" | "Poppins" | "Raleway" | "Work Sans" | "DM Sans";

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
