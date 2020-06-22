import React from "react";
import BlogList from "./components/list/BlogList";
import BlogForm from "./components/userinput/BlogForm";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      body: "",
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    axios({
      method: "get",
      baseURL: "http://localhost:3001/blog",
      responseType: "json",
    })
      .then((response) => {
        console.log(Object.values(response.data));
        this.setState({ posts: Object.values(response.data) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChange(field, value) {
    this.setState({ [field]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    let date = new Date();
    axios
      .post("http://localhost:3001/blog", {
        title: `${this.state.title}`,
        body: `${this.state.body}`,
        date: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      title: "",
      body: "",
      date: "",
    });

    this.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="ui container">
          <BlogForm
            onChange={this.onChange.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
            value={this.state}
          />
        </div>
        <BlogList posts={this.state.posts} />
      </div>
    );
  }
}
export default App;
