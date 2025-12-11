import DeskHeader from "./DeskHeader";
import { siteConfig } from "@/config/site";
import { MobileHeader } from "./MobileHeader";
import { ModeToggle } from "../mode-toggle";

function Header() {
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto flex h-16 items-center">
        <DeskHeader items={siteConfig.mainNav} />
        <MobileHeader items={siteConfig.mainNav} />
        <div className="mr-8 flex flex-1 items-center justify-end lg:mr-0">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
