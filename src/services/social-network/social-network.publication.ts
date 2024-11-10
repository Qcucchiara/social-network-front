"use client"

import handleStatusToaster from "@/utils/handleStatusToaster";
import backend from "./social-network.base";

export async function test() {
  // return backend.get('/test')

  const response = await fetch(`http://localhost:4004/api/test`);
  const res = await response.json();
  console.log(res);
}

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
  findMostPopularPosts: async (skip: number, take: number) => {
    const response = backend.get(`publication/post/top/${skip}/${take}`);
    // handleStatusToaster(response, "topPosts");

    return response;
  },
  findLastPostsFromUser: async (userId: string, skip: number, take: number) => {
    const response = backend.get(`publication/post/last/${userId}/${skip}/${take}`);
    handleStatusToaster(response, "lastPostsFromUser");

    return response;
  },
  findTopCommentsFromPost: async (
    postId: string,
    skip: number,
    take: number,
  ) => {
    const response = backend.get(`publication/comment/top/${postId}/${skip}/${take}`);
    handleStatusToaster(response, "topComments");

    return response;
  },
  findLastCommentsFromPost: async (
    postId: string,
    skip: number,
    take: number,
  ) => {
    const response = backend.get(`publication/comment/last/${postId}/${skip}/${take}`);
    handleStatusToaster(response, "lastComments");

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
