"use client";
import React, { useEffect, useState } from "react";
import { Divide, ThumbsDown, ThumbsUp } from "lucide-react";
import { handleLikeDislike } from "@/services/social-network/social-network.like-dislike";
import { getFromLocalStorage } from "@/utils/localstorage";

type LikeButtonsType = {
  likes: number;
  likeList: string[];
  dislikes: number;
  dislikeList: string[];
  publicationId: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LikeButtons = ({
  likes,
  likeList,
  dislikes,
  dislikeList,
  setRefresh,
  publicationId,
}: LikeButtonsType) => {
  const [likeStatus, setLikeStatus] = useState<"like" | "dislike" | null>(null);
  const isLiked = () => {
    const userId = getFromLocalStorage("user_id");
    const listOfLike = new Set(likeList);
    console.log(listOfLike);
    const listOfDislike = new Set(dislikeList);
    console.log(userId);
    console.log(listOfDislike);
    if (listOfLike.has(typeof userId === "string" ? userId : "")) {
      setLikeStatus("like");
    } else if (listOfDislike.has(typeof userId === "string" ? userId : "")) {
      setLikeStatus("dislike");
    } else {
      setLikeStatus(null);
    }
  };

  useEffect(() => {
    isLiked();
  }, []);
  console.log(likeStatus);
  return (
    <div className="flex gap-8">
      <span
        className=" flex gap-2"
        onClick={() => {
          handleLikeDislike.add(publicationId, "like").then(() => {
            setRefresh(true);
          });
        }}
      >
        <div>
          {likeStatus === "like" ? (
            <ThumbsUp color="#1d4ed8" fill="#1d4ed8" />
          ) : (
            <ThumbsUp />
          )}
        </div>
        <span>{likes}</span>
      </span>
      <span
        className=" flex gap-2"
        onClick={() => {
          handleLikeDislike.add(publicationId, "dislike").then(() => {
            setRefresh(true);
          });
        }}
      >
        <div>
          {likeStatus === "dislike" ? (
            <ThumbsDown color="#b91c1c" fill="#b91c1c" />
          ) : (
            <ThumbsDown />
          )}
        </div>

        <span>{dislikes}</span>
      </span>
    </div>
  );
};
