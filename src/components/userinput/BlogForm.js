import React, { Component } from "react";

export default class BlogForm extends Component {
  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.onSubmit}>
        <div className="field">
          <label>Title</label>
          <input
            placeholder="Blog Title"
            name="title"
            value={this.props.value.title}
            onChange={this.onFieldChange.bind(this)}
          />
        </div>
        <div className="field">
          <label>Body</label>
          <textarea
            placeholder="Whats on your mind?"
            name="body"
            rows="5"
            value={this.props.value.body}
            onChange={this.onFieldChange.bind(this)}
          ></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
