import { Component } from 'react';
import { getSearchImage } from '../api/api-request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    search: '',
    hits: null,
    loading: false,
    total: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search ||
      prevState.page !== this.state.page) {
      this.setState({ loading: true });
      try {
        const search = this.state.search;
        const page = this.state.page;

        const data = await getSearchImage(search, page);
        this.setState({ hits: data.hits, total: data.total });
        await this.searchFailed(data);
      } catch (error) {
        toast.error('Sorry ERROR. Please try again.');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  searchFailed = ({ total }) => {
    console.log(total);
    if (total === 0)
    {
      return toast.warn('Sorry, there are no images matching your search query. Please try again.')
    }
  }

  btnLoadMore = () => {
    if (this.state.total >= 12) {
      return true;
    }
    return false;
  }

  btnLoadMorePage = () => {
    this.setState((prev) => ({
      page: prev.page + 1
    }));
  }

  handleFormSubmit = (search) => {
    this.setState({ search });
    this.setState({page: 1})
  };

  render() {

    return (
      <>
        <Searchbar formSubmit={this.handleFormSubmit} />
        <Loader loading={this.state.loading}/>
        <ImageGallery hits={this.state.hits} />
        {this.btnLoadMore() && <Button handleLoadMore={this.btnLoadMorePage}/>}

        <ToastContainer
          autoClose={3000}
          theme='colored'
          position='top-center'
        />

      </>
    );
  }
}
