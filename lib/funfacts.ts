import fs from "node:fs";
import path from "node:path";
import type { FunFact, FunFactData } from "@/types/funfact";
import { getCachedFunFact } from "./cache";

export function loadFunFacts(): FunFact[] {
  const filePath = path.join(process.cwd(), "data", "funfacts.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (JSON.parse(fileContent) as FunFactData).funfacts.map(
    ({ text }, index) => ({
      index: index + 1,
      text,
    }),
  );
}

export function getRandomFunFact(): FunFact {
  const funfacts = loadFunFacts();

  if (funfacts.length === 0) {
    throw new Error("No fun facts available");
  }

  const randomIndex = Math.floor(Math.random() * funfacts.length);
  return funfacts[randomIndex];
}

export function getCurrentFunFact(): FunFact {
  return getCachedFunFact(getRandomFunFact);
}
