import { PropsWithChildren } from "react";

export interface SubmitButtonProps extends PropsWithChildren {
    handleSubmit?: () => void;
}

export default function SubmitButton(props: SubmitButtonProps) {
    return (
        <button className="border rounded py-1 transition-all hover:bg-gray-50" onClick={props.handleSubmit}>{props.children}</button>
    );
}