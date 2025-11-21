import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ErrorPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto flex flex-1 items-center">
          <Card className="w-sm md:w-lg lg:w-lg">
            <CardHeader>
              <CardTitle className="text-center">ERROR 404</CardTitle>
              <CardDescription className="text-center">
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
      </div>
    </>
  );
}
