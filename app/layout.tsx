import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "sinre.fun",
	description: "Share a fun fact with your friends",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
