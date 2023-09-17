import { Component } from 'react';
import { toast } from 'react-toastify';
import { Head, Form, Button, Label, Input } from './Searchbar.styled';

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
        <Head>
          <Form onSubmit={this.handleSubmit} >
            <Button type='submit' className='button'>
              <Label>Search</Label>
            </Button>

            <Input
              onChange={this.handleSearchChange}
              value={this.state.search}
              type='text'
              autoComplete='off'
              autoFocus
              placeholder='Search images and photos'
            />
          </Form>
        </Head>
      </>
    );
  }
}
