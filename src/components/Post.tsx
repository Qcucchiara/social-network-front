import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LikeButtons } from "./TODO/Base/LikeButtons";
import { CommentButton } from "./TODO/Base/CommentButton";
import { Bookmark } from "lucide-react";

type PostType = {
  author: {
    authorId: string;
  };
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  isBookmarked: boolean;
};

export const Post = ({
  author,
  title,
  content,
  likes,
  dislikes,
  isBookmarked,
}: PostType) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className=" justify-between">
        <LikeButtons likes={likes} dislikes={dislikes} />
        <CommentButton comments={8} />
        {isBookmarked ? (
          <span className=" text-teal-700">
            <Bookmark />
          </span>
        ) : (
          <span className=" text-teal-700">
            <Bookmark fill="#0f766e" />
          </span>
        )}
      </CardFooter>
    </Card>
  );
};
