"use client";

import handleStatusToaster from "@/utils/handleStatusToaster";
// import handleStatusToaster from "@/utils/handleStatusToaster";
import backend from "./social-network.base";

export type GetPostQuery = {
  authorIds?: string[];
  tags?: string[];
};

export const handlePublication = {
  createPost: async (data: unknown) => {
    const response = backend.post(`publication/post`, data);
    handleStatusToaster(response, "createPost");

    return response;
  },
  createComment: async (data: unknown) => {
    const response = backend.post(`publication/comment`, data);
    handleStatusToaster(response, "createComment");

    return response;
  },
  /**
   *
   * @param skip
   * @param take
   * @param sort
   * @param data
   * @returns response
   */
  findPosts: async (
    skip: number,
    take: number,
    sort: string,
    data?: GetPostQuery,
  ) => {
    const response = backend.post(
      `publication/post/${skip}/${take}/${sort}`,
      data,
    );
    handleStatusToaster(response, "getPosts");

    return response;
  },
  /**
   *
   * @param postId
   * @param skip
   * @param take
   * @returns response
   */
  findComments: async (postId: string, skip: number, take: number) => {
    const response = backend.get(
      `publication/comment/top/${postId}/${skip}/${take}`,
    );
    handleStatusToaster(response, "getComments");

    return response;
  },
  update: async (publicationId: string, data: unknown) => {
    const response = backend.patch(`publication/${publicationId}`, data);
    handleStatusToaster(response, "updatePublication");

    return response;
  },
  remove: async (publicationId: string) => {
    const response = backend.delete(`publication/${publicationId}`);
    handleStatusToaster(response, "removePublication");

    return response;
  },
};
