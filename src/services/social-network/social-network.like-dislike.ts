"use client";

import handleStatusToaster from "@/utils/handleStatusToaster";
import backend from "./social-network.base";

type LikeDislike = "like" | "dislike";

export const handleLikeDislike = {
  add: async (publicationId: string, likeDislike: LikeDislike) => {
    const response = backend.post(
      `like-dislike/${publicationId}/${likeDislike}`,
    );
    handleStatusToaster(response, "addLikeDislike");

    return response;
  },
  remove: async (publicationId: string) => {
    const response = backend.delete(`like-dislike/${publicationId}`);
    handleStatusToaster(response, "removeLikeDislike");

    return response;
  },
};
