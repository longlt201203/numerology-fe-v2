import { PropsWithChildren } from "react";

export default function InputGroup({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-2 gap-x-5">
            {children}
        </div>
    );
}