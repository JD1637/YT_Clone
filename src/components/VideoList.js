import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@mui/material';


export default function VideoList({videos}){
    const listOfVideos = videos.map((video, id)=><VideoItem onVideoSelectkey={id} video={video}/>)
    return(
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}