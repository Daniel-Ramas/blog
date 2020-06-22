import React, { Component } from "react";
import Container from "./Container";

export default class BlogList extends Component {
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className="blog-list" style={{ padding: "2em" }}>
          <Container
            title={post.title}
            body={post.body}
            date={post.date}
            key={post.id}
          />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}
