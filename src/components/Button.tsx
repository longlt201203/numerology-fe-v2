import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="border rounded py-1 transition-all hover:bg-themeColors-starryWhite" onClick={props.onClick}>{props.children}</button>
    );
}