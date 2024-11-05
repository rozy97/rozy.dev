"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"
import { links } from "./Nav";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <VisuallyHidden.Root>
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                </VisuallyHidden.Root>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Rozy
                            <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                    } capitalize text-xl hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>)
                    })}
                </nav>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav