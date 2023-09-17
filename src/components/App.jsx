import { Component } from 'react';
import { getSearchImage } from '../api/search';
import Notiflix from 'notiflix';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    search: '',
    hits: null,
  };

  async componentDidMount() {
    try {
      const data  = await getSearchImage('dog');
      this.setState({hits: data.hits})
      console.log(this.state.hits);
    } catch (error) {
      console.log(error);
        Notiflix.Notify.failure('Sorry ERROR. Please try again.');
    } finally {

    }

    // this.setState({hits: hits})
    // console.log(getSearchImage('cat'));
  }

  render() {

    return (
      <>
        <Searchbar />
        <ImageGallery hits={this.state.hits}/>
      </>
    );
  }
}
