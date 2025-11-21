import { Icons } from "../icons/Icon";
import { siteConfig } from "@/config/types";
import { Link } from "react-router-dom";
import NewsLetterForm from "../news-letter";
function Footer() {
  return (
    <footer className="ml-4 w-full border-t pt-5 lg:ml-0">
      <div className="container mx-auto">
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section>
            <Link to="/" className="flex items-center space-x-4">
              <Icons.logo className="size-6" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4">
            {siteConfig.footerNav.map((foot) => (
              <div key={foot.title} className="space-y-3">
                <h4 className="font-medium">{foot.title}</h4>
                <ul className="">
                  {foot.items.map((item) => (
                    <li className="">
                      <Link
                        to={item.href}
                        target={item.external ? "_blank" : undefined}
                        className="text-muted-foreground hover:text-foreground text-sm"
                      >
                        {item.title}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <NewsLetterForm />
        </section>
      </div>
    </footer>
  );
}

export default Footer;
