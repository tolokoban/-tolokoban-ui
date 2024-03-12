export declare function setDefaults<TypeProps extends Record<string, any>, TypeDefaults extends TypeProps>(props: TypeProps, defaults: {
    [key in keyof TypeDefaults]: NonNullable<TypeDefaults[key]>;
}): Required<TypeDefaults> & TypeProps;
