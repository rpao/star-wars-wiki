export function classNames(classes: any) {
    return Object
            .entries(classes)
            .filter( ([key, value]) => value)
            .map(([key, value]) => key)
            .join(' ');
}