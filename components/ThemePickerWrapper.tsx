"use client";

import { useEffect, useState } from "react";
import {
	ThemePickerButton,
	ThemePickerDropdown,
} from "@/components/ThemePicker";

export function ThemePickerButtonWrapper() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleToggle = (e: CustomEvent) => {
			setIsOpen(e.detail);
		};
		window.addEventListener(
			"theme-picker-toggle" as any,
			handleToggle as EventListener,
		);
		return () =>
			window.removeEventListener(
				"theme-picker-toggle" as any,
				handleToggle as EventListener,
			);
	}, []);

	const togglePicker = () => {
		const newState = !isOpen;
		setIsOpen(newState);
		window.dispatchEvent(
			new CustomEvent("theme-picker-toggle", { detail: newState }),
		);
	};

	return <ThemePickerButton onClick={togglePicker} />;
}

export function ThemePickerDropdownWrapper() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "paper-white";
		document.body.className = savedTheme;

		const handleToggle = (e: CustomEvent) => {
			setIsOpen(e.detail);
		};
		window.addEventListener(
			"theme-picker-toggle" as any,
			handleToggle as EventListener,
		);
		return () =>
			window.removeEventListener(
				"theme-picker-toggle" as any,
				handleToggle as EventListener,
			);
	}, []);

	const selectTheme = (themeId: string) => {
		document.body.className = themeId;
		localStorage.setItem("theme", themeId);
	};

	return <ThemePickerDropdown isOpen={isOpen} onSelectTheme={selectTheme} />;
}
