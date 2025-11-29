import { Button } from "../ui/button";
import type { MainNavItem } from "@/types";
import { Icons } from "../icons/Icon";
import { siteConfig } from "@/config/types";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

interface MainNavigationProps {
  items?: MainNavItem[];
}

export function MobileHeader({ items }: MainNavigationProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const query = "(min-width :1024px)";

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  if (isDesktop) {
    return null;
  }
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-5">
            <HamburgerMenuIcon />
            <span className="sr-only">ToggleMenu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="pt-9">
          <SheetClose asChild className="mx-auto flex justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icons.logo className="mr-4 size-7" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>

          <ScrollArea className="my-5 h-[calc(100vh-8rem)] pb-8">
            <Accordion type="multiple" className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="mx-5 text-xl">
                  {items?.[0].title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="l flex flex-col space-y-1 py-5 pl-7">
                    {items?.[0].card?.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          to={String(item.href)}
                          className="text-foreground/750 transition:translate rounded-md bg-gray-100 p-2 duration-300 hover:translate-x-0.5 hover:bg-gray-200"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {items?.[0].menu?.map((item) => (
              <div className="mx-5 my-2 flex flex-col">
                <SheetClose asChild key={item.title}>
                  <Link to={String(item.href)}>{item.title}</Link>
                </SheetClose>
              </div>
            ))}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
