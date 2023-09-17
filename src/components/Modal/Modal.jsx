import { Component } from 'react';
import { Overlay, Mod } from './Modal.styled';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggelModal();
    }
  };

  handleBackdropClick = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.toggelModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <Mod>
          <img src={this.props.largeImageURL} alt='large' />
        </Mod>
      </Overlay>
    );
  }
}

