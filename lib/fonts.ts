import {
	Inter,
	Poppins,
	Roboto,
	Noto_Sans,
	Raleway,
	Work_Sans,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700"],
});
export const noto_sans = Noto_Sans({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700"],
});
export const raleway = Raleway({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700"],
});
export const work_sans = Work_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "400", "500", "600", "700"],
});
