import { Component } from 'react';
import { getSearchImage } from '../api/api-request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    hits: [],
    loading: false,
    total: 0,
    page: 1,
    showModal: false,
    largeImageURL: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search ||
      prevState.page !== this.state.page) {

      this.setState({ loading: true });

      try {
        const search = this.state.search;
        const page = this.state.page;
        const data = await getSearchImage(search, page);

        this.setState((prev) => ({
          hits: [...prev.hits, ...data.hits],
          total: data.total,
        }));

        this.searchFailed(data);
      } catch (error) {
        toast.error('Sorry ERROR. Please try again.');
      } finally {
        this.setState({ loading: false});
      }
    }
  }

  searchFailed = ({ total }) => {
    if (total === 0) {
      return toast.warn('Sorry, there are no images matching your search query. Please try again.');
    }
  };

  handleFormSubmit = (search) => {
    console.log(search);
    this.setState({ search, page: 1, hits: [] });
  };

  btnLoadMorePage = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  toggelModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  onClickImage = e => {
    this.toggelModal();
    const find = this.state.hits.filter(itm => itm.id === e.target.name * 1);
    return this.setState({ largeImageURL: find[0].largeImageURL });
  };

  render() {

    return (
      <>
        <Searchbar formSubmit={this.handleFormSubmit} />
        <ImageGallery hits={this.state.hits} onClickImage={this.onClickImage} />
        <Loader loading={this.state.loading} />
        {this.state.total >= 12 && <Button handleLoadMore={this.btnLoadMorePage} />}

        {this.state.showModal &&
          <Modal
            toggelModal={this.toggelModal}
            largeImageURL={this.state.largeImageURL}
          />}

        <ToastContainer
          autoClose={3000}
          theme='colored'
          position='top-center'
        />

      </>
    );
  }
}
