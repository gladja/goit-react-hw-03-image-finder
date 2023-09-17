import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getSearchImage } from '../api/search';


export class App extends Component {
  state = {
    search: '',
  }

  render() {
    console.log(getSearchImage('cat'));

    return (
      <Searchbar />
    )
  }
}
