import couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex w-full flex-col lg:flex-row">
        {/* text area */}
        <div className="my-8 text-center lg:mt-16 lg:w-2/5 lg:text-left">
          <h1 className="mb-8 text-4xl font-extrabold lg:text-6xl">
            Modern Interior Design Studio
          </h1>

          <p className="mb-6 lg:mb-8">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="flex justify-center gap-6">
            <Button
              asChild
              className="rounded-full bg-orange-300 px-10 py-6 font-bold transition-all duration-75 ease-in-out"
            >
              <Link to="">Shop now</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="rounded-full px-6 py-6 font-bold"
            >
              <Link to="">Explore</Link>
            </Button>
          </div>
        </div>
        {/* image  */}
        <img src={couch} alt="" className="lg:w-3/5" />
      </div>
    </div>
  );
}

export default Home;
