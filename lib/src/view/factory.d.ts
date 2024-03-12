import React from "react";
export declare function makeCustomView<Props extends Record<string, unknown>>(View: React.FC<Props>, defaultProps: Partial<Props>): (props: Props) => React.JSX.Element;
