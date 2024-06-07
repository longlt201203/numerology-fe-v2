import { PropsWithChildren } from "react";

export interface TestListProps extends PropsWithChildren {
    className?: string;
}

export default function TestList({ children, className }: TestListProps) {
    return (
        <ul className={"font-merriweather flex flex-col gap-y-1 list-disc " + (className ? " " + className : "")}>
           {children}
        </ul>
    );
}