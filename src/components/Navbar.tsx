import { NumerologyTransKeys } from "@language/numerology-trans-props";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function NavbarLink({ children, to }: PropsWithChildren & { to: string }) {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <span className={"font-lora hover:underline" + (isActive ? " underline" : "")}>{children}</span>
            )}
        </NavLink>
    );
}

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <div className="flex gap-x-4 justify-center">
            <NavbarLink to="/">{t(NumerologyTransKeys.numerologyReadingTitle)}</NavbarLink>
            <NavbarLink to="/compare">{t(NumerologyTransKeys.numerologyComparingTitle)}</NavbarLink>
            <NavbarLink to="/about">{t(NumerologyTransKeys.aboutTitle)}</NavbarLink>
        </div>
    );
}