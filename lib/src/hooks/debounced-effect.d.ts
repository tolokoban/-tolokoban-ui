import * as React from "react";
/**
 * Same as React.useEffect, but the effect is debounced.
 * @param delay Number of milliseconds for debouncing.
 */
export declare function useDebouncedEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined, delay?: number): void;
