import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

function NewsContent({ loadMore, setLoadMore, newsArray, newsResult }) {
  console.log(newsArray);
  return (
    <Container>
      <div className="cnt">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} />
        ))}

        {loadMore < newsResult && (
          <>
            <hr />
            <br />
            <button
              className="loadMore"
              onClick={() => {
                setLoadMore(loadMore + 20);
              }}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
}

export default NewsContent;
