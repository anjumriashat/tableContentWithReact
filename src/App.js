import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }
  render() {
    const columns = [
      {
        Header: "Album ID",
        accessor: "albumId"
      },
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Title",
        accessor: "title",
        sortable: false,
        filterable: false
      },
      {
        Header: "Url",
        accessor: "url",
        sortable: false,
        filterable: false
      },
      {
        Header: "Thumbnail Url",
        accessor: "thumbnailUrl",
        sortable: false,
        filterable: false
      }
    ];
    return <ReactTable columns={columns} data={this.state.posts} filterable />;
  }
}

export default App;
