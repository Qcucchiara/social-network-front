"use client";
import { handlePublication } from "@/services/social-network/social-network.publication";
import { PostType } from "@/utils/typesResponses";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "./TODO/Base/Loader";
import { Post } from "@/components/Post";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type ListPostType = {
  elementQuantity: number;
};

export const ListPosts = ({ elementQuantity }: ListPostType) => {
  const [listPosts, setListPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    const axiosResponse: AxiosResponse =
      await handlePublication.findMostPopularPosts(0, 10);
    setListPosts(axiosResponse.data.items);
    console.log(axiosResponse.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className=" flex flex-col gap-4">
      {listPosts ? (
        listPosts.map((post: PostType, index: number) => {
          return (
            <Post
              key={index}
              author={{
                authorId: "",
              }}
              title={post.post_title}
              content={post.content}
              likes={post.likeCount}
              dislikes={post.dislikeCount}
              isBookmarked={false}
            />
          );
        })
      ) : (
        <Loader />
      )}
      {listPosts && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};
