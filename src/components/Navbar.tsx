import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

function NavbarLink({ children, to, active }: PropsWithChildren & { to: string, active?: boolean }) {
    return (
        <Link to={to} className={"font-lora hover:underline" + (active ? " underline" : "")}>{children}</Link>
    );
}

export default function Navbar() {
    return (
        <div className="flex gap-x-4 justify-center">
            <NavbarLink to="" active>Numerology Reading</NavbarLink>
            <NavbarLink to="">Numerology Comparing</NavbarLink>
            <NavbarLink to="">About</NavbarLink>
        </div>
    );
}