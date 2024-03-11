"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassNames {
    constructor() {
        this.signature = `${Date.now().toString(36)}-Theme-`;
        this.colorPrimary = (level = 5) => this.cls(`color-primary-${level}`);
        this.colorSecondary = (level = 5) => this.cls(`color-secondary-${level}`);
        this.colorTertiary = (level = 5) => this.cls(`color-tertiary-${level}`);
        this.colorNeutral = (level = 5) => this.cls(`color-neutral-${level}`);
        this.init = () => {
            if (!document.head) {
                window.setTimeout(this.init, 200);
                return;
            }
            const lines = [
                `.${this.cls("display-flex")} { display: flex; justify-content: space-between; align-items: center; gap: var(--theme-gap-S); }`,
                `.${this.cls("display-inline-flex")} { display: inline-flex; justify-content: space-between; align-items: center; gap: var(--theme-gap-S); }`,
            ];
            for (const vertical of ["none", "XS", "S", "M", "L", "XL"]) {
                for (const horizontal of ["none", "XS", "S", "M", "L", "XL"]) {
                    lines.push(`.${this.cls(`padding-${vertical}-${horizontal}`)} { padding: var(--theme-gap-${vertical}) var(--theme-gap-${horizontal}); }`);
                    lines.push(`.${this.cls(`margin-${vertical}-${horizontal}`)} { margin: var(--theme-gap-${vertical}) var(--theme-gap-${horizontal}); }`);
                }
            }
            for (const group of ["primary", "secondary", "tertiary", "neutral"]) {
                for (let level = 1; level < 10; level++) {
                    lines.push(`.${this.cls(`color-${group}-${level}`)} {`, `  color: var(--theme-color-on-${group}-${level});`, `  background-color: var(--theme-color-${group}-${level});`, "}");
                }
            }
            const style = document.createElement("style");
            style.textContent = lines.join("\n");
            document.head.appendChild(style);
        };
        this.init();
    }
    join(...items) {
        return items.filter((item) => typeof item === "string").join(" ");
    }
    padding(...values) {
        let [vertical, horizontal] = values;
        if (!vertical)
            vertical = "none";
        if (!horizontal)
            horizontal = vertical;
        return this.cls(`padding-${vertical}-${horizontal}`);
    }
    margin(...values) {
        let [vertical, horizontal] = values;
        if (!vertical)
            vertical = "none";
        if (!horizontal)
            horizontal = vertical;
        return this.cls(`margin-${vertical}-${horizontal}`);
    }
    display(type) {
        const classes = [this.cls(`display-${type}`)];
        return classes.join(" ");
    }
    cls(name) {
        return `${this.signature}${name}`;
    }
}
exports.default = ClassNames;
