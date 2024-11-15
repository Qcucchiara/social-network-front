"use client";
import React from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { handleAuth } from "@/services/social-network/social-network.auth";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { SendHorizontal } from "lucide-react";

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, "Comment must be at least 1 character long")
    .max(2000, "Comment must be at most 2000 characters long"),
});

const NewComment = () => {
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof commentSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 px-6 relative "
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" hidden">Content</FormLabel>
              <FormMessage className=" h-0 hidden relative bottom-4" />
              <FormControl>
                {/* <Input
                  type="text"
                  placeholder="type your reply here ..."
                  {...field}
                /> */}
                <Textarea placeholder="type your reply here ..." {...field} />
              </FormControl>
              <div className=" flex justify-between">
                <FormDescription className=" hidden">Content</FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
        >
          <SendHorizontal className="h-5 w-5 text-primary" />
        </Button>
      </form>
    </Form>
  );
};

export default NewComment;
