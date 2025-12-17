import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "../icons/Icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const quantitySchema = z.object({
  quantity: z.number().gte(0),
});

interface BuyAbleProps {
  buyAble: boolean;
}

export default function AddToCart({ buyAble }: BuyAbleProps) {
  // ...Defining the form using useForm hook
  const form = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof quantitySchema>) => {
    console.log(values);
    toast.success("Order was succeed!");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-[260px] flex-col gap-4"
      >
        <div className="flex items-center">
          <Button
            type="button"
            variant="outline"
            className="size-8 shrink-0 rounded-r-none"
          >
            <Icons.circleMinus />
          </Button>
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="sr-only">
                  Change quantity of products
                </FormLabel>
                <div className="relative max-w-60">
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      {...field}
                      className="h-8 w-16 rounded-none border-x-0"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="outline"
            className="size-8 shrink-0 rounded-l-none"
          >
            <Icons.circlePlus />
          </Button>
        </div>
        <div className="max-w-32items-center flex gap-4">
          <Button
            className={cn("w-full bg-green-900", !buyAble && "bg-slate-800")}
            type="button"
          >
            Buy Now
          </Button>
          <Button className="w-full" variant={buyAble ? "outline" : "default"}>
            Add to Cart
          </Button>
        </div>
      </form>
    </Form>
  );
}
