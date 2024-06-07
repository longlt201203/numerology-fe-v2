import { PropsWithChildren } from "react";

export default function TextListItem({ children }: PropsWithChildren) {
    return (
        <li className="">{children}</li>
    );
}