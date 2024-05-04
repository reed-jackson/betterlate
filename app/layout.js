import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";

import { Inter } from "next/font/google";

import { Theme, ThemePanel } from "@radix-ui/themes";

export const metadata = {
	title: "betterlate",
	description: "Dev projects from Reed Jackson",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Theme accentColor="tomato" grayColor="mauve" appearance="dark" panelBackground="translucent" radius="large">
					{children}
				</Theme>
			</body>
		</html>
	);
}
