import { ViewWithValue } from "../types";
export declare function useChangeableValue<T>(props: ViewWithValue<T>): [value: T, setValue: (value: T) => void];
