import { MessageSquare } from "lucide-react";
import React from "react";

type CommentButtonType = {
  comments: number;
};
export const CommentButton = ({ comments }: CommentButtonType) => {
  return (
    <div className="flex gap-2">
      <MessageSquare />
      <span>{comments}</span>
    </div>
  );
};
