import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <Navbar  className="bg-white" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about">
                        Über uns
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link className="text-black" aria-current="page"  href="/about#training">
                        Trainingsplan
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contact">
                        Kontakt
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link className="text-black font-bold" href="/">Spenden</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className="bg-lakers font-bold drop-shadow-md " href="/subscriptions" variant="flat">
                        Mitglied werden
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem className="sm:hidden ">
                    <Link className="text-white" href="/">
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="sm:hidden">
                    <Link className="text-white" href="/about">
                        Über uns
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="sm:hidden">
                    <Link className="text-white" href="/contact">
                        Kontakt
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="sm:hidden">
                    <Link className="text-white" href="/">
                        Spenden
                    </Link>
                </NavbarMenuItem>


            </NavbarMenu>
        </Navbar>
    );
}

