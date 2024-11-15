interface BaseComment {
  _id: string;
  author_id: string;
  status: string;
  likeCount: number;
  user_has_liked: string[];
  dislikeCount: number;
  user_has_disliked: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentType extends BaseComment {
  parent_id: string;
}

export interface PostType extends BaseComment {
  post_title: string;
  post_list_tags: string[];
  isBookmarked: boolean;
}
