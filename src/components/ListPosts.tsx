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
import NewComment from "./TODO/NewComment";

type ListPostType = {
  skip: number;
  take: number;
  sort: "date" | "popularity";
  filter?: {
    authorids?: string[];
    tags?: string[];
  };
};

export const ListPosts = ({ skip, take, sort, filter }: ListPostType) => {
  const [listPosts, setListPosts] = useState<PostType[]>([]);
  const [refresh, setRefresh] = useState(false);

  const getPosts = async () => {
    const axiosResponse: AxiosResponse = await handlePublication.findPosts(
      skip,
      take,
      sort,
      filter,
    );
    console.log(axiosResponse.data);
    setListPosts(axiosResponse.data);
  };

  useEffect(() => {
    getPosts();
  }, [refresh]);

  return (
    <div className=" flex flex-col gap-4 h-full">
      {listPosts ? (
        listPosts.map((post: PostType, index: number) => {
          return (
            <Post
              NewComment={NewComment}
              setRefresh={setRefresh}
              key={post._id}
              data={post}
            />
          );
        })
      ) : (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
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
