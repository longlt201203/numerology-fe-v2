import Header from "@components/Header";
import Navbar from "@components/Navbar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="px-8 my-4">
                <hr />
            </div>
            <div className="p-3 container md:w-2/4 mx-auto">
                {children}
            </div>
        </div>
    );
}