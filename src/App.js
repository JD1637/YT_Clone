import React, { Component } from "react";

import yt from "./api/yt";
import { SearchBar, VideoDetails, VideoList } from "./components";

import { Grid } from "@mui/material";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (searchTerm) => {
    const response = await yt.get("/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "Your API_Key",
        q: searchTerm,
      },
    });
    console.log(response);

    this.setState({videos: response.data.items , selectedVideo: response.data.items[0]})
  };

  render() {
    const {selectedVideo, videos} = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* search bar */}
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* video details */}
              <VideoDetails video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              {/* video list */}
              <VideoList videos={videos}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
