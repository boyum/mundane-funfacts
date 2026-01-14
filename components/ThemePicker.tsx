"use client";

import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

const themes = [
	{
		id: "paper-white",
		name: "Paper White",
		colors: ["#000", "#ccc", "#fff", "#e8e8e8"],
	},
	{
		id: "office-beige",
		name: "Office Beige",
		colors: ["#333", "#999", "#f5f5dc", "#d4b896"],
	},
	{
		id: "concrete-gray",
		name: "Concrete Gray",
		colors: ["#1a1a1a", "#7a7a7a", "#e0e0e0", "#808080"],
	},
	{
		id: "cardboard-brown",
		name: "Cardboard Brown",
		colors: ["#2d1f1a", "#8b7355", "#d4a574", "#8b6f47"],
	},
	{
		id: "wood-light",
		name: "Light Wood",
		colors: ["#2c2416", "#9a8a6a", "#f0e5d1", "#c9a96e"],
	},
	{
		id: "wall-cream",
		name: "Cream Wall",
		colors: ["#2b2620", "#a39a8c", "#faf7f0", "#e6d5b8"],
	},
	{
		id: "office-fluorescent",
		name: "Fluorescent Office",
		colors: ["#1a1a1a", "#8a8a8a", "#f8f8f8", "#c8e6c9"],
	},
];

export function ThemePickerButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			type="button"
			className={styles.themePickerToggle}
			onClick={onClick}
			aria-label="Toggle theme picker"
		>
			🎨
		</button>
	);
}

export function ThemePickerDropdown({
	isOpen,
	onSelectTheme,
}: {
	isOpen: boolean;
	onSelectTheme: (themeId: string) => void;
}) {
	return (
		<div className={`${styles.themePicker} ${isOpen ? styles.isOpen : ""}`}>
			<h2 className={styles.themePickerTitle}>Choose a color theme</h2>
			<div className={styles.themePickerList}>
				{themes.map((theme) => (
					<button
						key={theme.id}
						type="button"
						className={styles.themeButton}
						onClick={() => onSelectTheme(theme.id)}
						aria-label={`Select ${theme.name} theme`}
					>
						<span className={styles.themeButtonName}>{theme.name}</span>
						<span className={styles.themeButtonPalette}>
							{theme.colors.map((color, index) => (
								<span
									key={index}
									className={styles.palettePreview}
									style={{ backgroundColor: color }}
								/>
							))}
						</span>
					</button>
				))}
			</div>
		</div>
	);
}

export default function ThemePicker() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentTheme, setCurrentTheme] = useState("paper-white");

	useEffect(() => {
		// Load theme from localStorage
		const savedTheme = localStorage.getItem("theme") || "paper-white";
		setCurrentTheme(savedTheme);
		document.body.className = savedTheme;
	}, []);

	const togglePicker = () => {
		setIsOpen(!isOpen);
	};

	const selectTheme = (themeId: string) => {
		setCurrentTheme(themeId);
		document.body.className = themeId;
		localStorage.setItem("theme", themeId);
	};

	return (
		<>
			<ThemePickerButton onClick={togglePicker} />
			<ThemePickerDropdown isOpen={isOpen} onSelectTheme={selectTheme} />
		</>
	);
}
