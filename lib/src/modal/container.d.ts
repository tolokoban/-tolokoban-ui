import { ModalOptions } from "./types";
export interface ModalContainerProps {
    options: ModalOptions;
    onClose(this: void, options: ModalOptions): void;
}
export default function ModalContainer({ options, onClose, }: ModalContainerProps): import("react/jsx-runtime").JSX.Element;
