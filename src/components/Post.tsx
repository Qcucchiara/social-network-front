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
import { PostType } from "@/utils/typesResponses";

export const Post = ({ data }: { data: PostType }) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Card Description</CardDescription>
        <CardTitle>{data.post_title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data.content}</p>
      </CardContent>
      <CardFooter className=" justify-between">
        <LikeButtons likes={data.likeCount} dislikes={data.dislikeCount} />
        <CommentButton comments={8} />
        {data.isBookmarked ? (
          <span>
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
