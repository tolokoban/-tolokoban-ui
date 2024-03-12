import { Children } from "../types";
import { ConfirmParams, Modal, ModalManagerInterface, ModalParams } from "./types";
export default class ModalManager implements ModalManagerInterface {
    modals: Modal[];
    setModals: (modals: Modal[]) => void;
    show(params: ModalParams): () => void;
    wait<T>(content: Children, promise: Promise<T>, params?: Partial<Omit<ModalParams, "content">>): Promise<T>;
    error(content: unknown, params?: Partial<ModalParams>): Promise<void>;
    confirm(params: ConfirmParams): Promise<boolean>;
    info(content: Children, params?: Partial<Omit<ModalParams, "content">> | undefined): Promise<void>;
}
export declare function renderHumanFriendlyErrorContent(content: unknown): Children;
