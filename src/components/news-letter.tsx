import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader } from "lucide-react";
import { useState } from "react";

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
import { Icons } from "./icons/Icon";

const emailSchema = z.object({
  email: z.email({
    message: "Please enter a valid email",
  }),
});

export default function NewsLetterForm() {
  // ...Defining the form using useForm hook
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (values: z.infer<typeof emailSchema>) => {
    console.log(values);
    setLoading(true);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="">
              <span className="text-md font-medium">
                Subscribe to our news letter
              </span>
              <FormLabel className="sr-only">Email</FormLabel>
              <div className="relative max-w-60">
                <FormControl>
                  <Input
                    placeholder="example@gmail.com   "
                    {...field}
                    className="pr-12"
                  />
                </FormControl>
                {loading ? (
                  <Loader className="absolute top-1 right-1 z-30 size-7" />
                ) : (
                  <Button
                    size="icon"
                    className="absolute top-1 right-1 z-30 size-7"
                  >
                    <Icons.paperPlane className="size-4" />
                  </Button>
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
