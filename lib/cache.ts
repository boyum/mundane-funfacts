import type { FunFact } from "@/types/funfact";

let cachedFunFact: FunFact | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 10000; // 10 seconds in milliseconds

export function getCachedFunFact(getRandomFunFact: () => FunFact): FunFact {
	const now = Date.now();

	if (cachedFunFact && now - cacheTimestamp < CACHE_DURATION) {
		return cachedFunFact;
	}

	// Cache expired or doesn't exist, get new random funfact
	cachedFunFact = getRandomFunFact();
	cacheTimestamp = now;

	return cachedFunFact;
}

export function clearCache(): void {
	cachedFunFact = null;
	cacheTimestamp = 0;
}
