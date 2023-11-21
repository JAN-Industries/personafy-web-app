import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthProvider from "@/components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Personafy",
	description: "Your next AI writing assistant",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className={inter.className}>
					<>
						<NavBar />
						{children}
					</>
				</body>
			</AuthProvider>
		</html>
	);
}
