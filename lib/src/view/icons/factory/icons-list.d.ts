import { Icon } from "../generic/generic-icon";
interface IconDefinition {
    value: string;
    keywords: string[];
}
export declare function getIconsDefinitions(): IconDefinition[];
export declare function getIconById(id: string): Icon | undefined;
export {};
