import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons/Icon";
import { cn } from "@/lib/utils";

interface favProps extends React.HTMLAttributes<HTMLButtonElement> {
  rating: string;
  productId: number;
}

function AddToFav({ rating, productId, className }: favProps) {
  return (
    <div>
      <Button variant="ghost" className={cn(`size-4`, className)}>
        <Icons.heart />
      </Button>
    </div>
  );
}

export default AddToFav;
