export interface FigureInterface {
    id: string;
    src: string;
    alt: string;
    caption: string;
    credit?: string;
    prompt?: string;
    isExternal?: boolean;
    href?: string;
}
