import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Icons } from "@/components/icons/Icon";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/layouts/Footer";

export default function ErrorPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        <main className="mx-auto my-32 flex flex-1 items-center">
          <Card className="w-[350px] md:w-[500px] lg:w-[500px]">
            <CardHeader className="place-items-center gap-2">
              <div className="border-muted-foreground mt-2 mb-5 grid size-24 place-items-center rounded-full border border-dashed">
                <Icons.exclamationTriangleIcon
                  className="text-muted-foreground size-10"
                  aria-hidden="true"
                />
              </div>
              <CardTitle>ERROR 404</CardTitle>
              <CardDescription>
                OOPs! An error occured while searching this page..
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button variant="outline" asChild>
                <Link to="/">Return Home Page</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
}
