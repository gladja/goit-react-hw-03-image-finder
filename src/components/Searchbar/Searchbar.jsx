import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    search: '',
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search === '') {
      return toast.warn('Sorry, type search query. Please try again.')

    }
    this.props.formSubmit(this.state.search);
    this.setState({search: ''})
  }

  handleSearchChange = e => {
    const search = e.currentTarget.value.trim().toLowerCase();
    this.setState({search})
    // console.log(e.currentTarget.value);
  }

  render() {
    return (
      <>
        <header className='searchbar'>
          <form onSubmit={this.handleSubmit} className='form'>
            <button type='submit' className='button'>
              <span className='button-label'>Search</span>
            </button>

            <input
              onChange={this.handleSearchChange}
              value={this.state.search}
              className='input'
              type='text'
              autoComplete='off'
              autoFocus
              placeholder='Search images and photos'
            />
          </form>
        </header>
      </>
    );
  }
}
