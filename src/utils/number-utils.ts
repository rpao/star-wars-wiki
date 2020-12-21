export function stringToNumber(str: string | undefined | null): number {
    if (!str) { return 0; }
    return parseInt(str);
}