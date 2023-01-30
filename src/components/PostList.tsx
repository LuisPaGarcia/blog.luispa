import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import { SocialList } from "./SocialList";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}  
      >
        <div
          style={{
            marginBottom: "4rem",
          }}
        >
          <h1>
            LuisPa's Blog<span className="fancy">.</span>
          </h1>
          <span className="handle">
            Software Engineer - Node.js | Golang | React | Web Stuff
          </span>
          <h2>A blog with some thoughts and opinions.</h2>
          <SocialList />
        </div>
        <div className={"posts"}>
          <ul className={"post-list"}>
            {posts.map((it, i) => (
              <li key={i}>
                <PostItem post={it} />
              </li>
            ))}
          </ul>
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
              as: (page) => (page === 1 ? null : "/posts/page/" + page),
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
      `}</style>
    </div>
  );
}
