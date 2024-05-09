import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";

import { Theme } from "@radix-ui/themes";

export const metadata = {
	title: "betterlate",
	description: "Dev projects from Reed Jackson",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body>
				<Theme accentColor="tomato" grayColor="mauve" appearance="dark" panelBackground="translucent" radius="large">
					{children}
				</Theme>
			</body>
		</html>
	);
}
