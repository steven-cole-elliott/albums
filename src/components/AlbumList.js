import React, { Component } from 'react'
import { View } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

export class AlbumList extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    // make our GET request to get the data that we want
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({data, status}) => {
        if(status === 200) {
          this.setState({albums: data});
        }
      })
  }

  renderAlbums() {
    return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}