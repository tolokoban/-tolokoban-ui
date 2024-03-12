import * as React from "react";
/**
 * Same as React.useEffect, but the effect is debounced.
 * @param delay Number of milliseconds for debouncing.
 */
export function useDebouncedEffect(effect, deps, delay = 300) {
    const refTimeout = React.useRef(-1);
    React.useEffect(() => {
        window.clearTimeout(refTimeout.current);
        refTimeout.current = window.setTimeout(effect, delay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
//# sourceMappingURL=debounced-effect.js.map