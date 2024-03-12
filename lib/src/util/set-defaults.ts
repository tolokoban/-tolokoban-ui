export function setDefaults<TypeProps, TypeDefaults extends TypeProps>(
    props: TypeProps,
    defaults: { [key in keyof TypeDefaults]: NonNullable<TypeDefaults[key]> }
): Required<TypeDefaults> & TypeProps {
    return { ...defaults, ...props } as Required<TypeDefaults> & TypeProps
}
