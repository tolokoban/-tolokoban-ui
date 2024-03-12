import { Children } from "../types";
import { ModalManagerInterface } from "./types";
export interface ModalProviderProps {
    children: Children;
}
export declare function ModalProvider({ children }: ModalProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useModal(): ModalManagerInterface;
