import { Dispatch, RefObject, SetStateAction } from 'react';

export type Post = {
  title: string;
  description: string;
  location: string;
  price: string;
  _id: string;
  author: UserInfo;
  __v: number;
  messages: { _id: string; fromUser: UserInfo; content: string }[];
  willDeliver: boolean;
  active: boolean;
  isAuthor: boolean;
  updatedAt: string;
};

export type UserData = {
  posts: Post[];
  messages: Message[];
} & UserInfo;

export type UserInfo = {
  username: string;
  _id: string;
};

export type Message = {
  _id: string;
  post?: {
    _id: string;
    title: string;
    author: { _id: string; username: string };
  };
  fromUser: UserInfo;
  content: string;
};

export type UserAuth = {
  username: string;
  password: string;
};

export type TokenFetch = {
  success: boolean;
  error: Error | null;
  data: { token: string; message: string } | null;
};

export type NewPost = {
  title: string;
  description: string;
  price: string;
  location?: string;
  willDeliver: boolean;
};

export type MakeNewPost = {
  error: Error | null;
  data: Post | null;
};

export type Error = {
  name: string;
  message: string;
};

export type HomeProps = {
  token: string;
  posts: Post[];
  userData: UserData;
};

export type PostCardProps = {
  post: Post;
  isOwner: boolean;
  token: string;
};

export type RootContext = {
  token: string;
  posts: Post[];
  userData: UserData;
};

export type ViewPostContext = {
  token: string;
  id?: string;
  post: Post;
  messagesList: Message[];
  userData: UserData;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export type PostFormProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  deliverRef: RefObject<HTMLInputElement>;
  willDeliver: boolean;
};

export type NavbarProps = {
  token: string;
  openUser: boolean;
  userData: UserData;
  setOpenUser: Dispatch<SetStateAction<boolean>>;
};
