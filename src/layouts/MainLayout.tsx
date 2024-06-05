import Header from "@components/Header";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header />
            <div className="p-3 container md:w-2/4 mx-auto">
                {children}
            </div>
        </div>
    );
}