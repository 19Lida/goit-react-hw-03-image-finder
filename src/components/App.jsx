import { Component } from 'react';
import { searchPosts } from 'services/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import styles from './App.module.css';
export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    error: null,
    loading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchPosts();
    }
  }
  async fetchPosts() {
    try {
      this.setState({ loading: true });
      const { query, page } = this.state;
      const data = await searchPosts(query, page);
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  onSubmitForm = data => {
    if (data === this.state.query) {
      return;
    }
    this.setState({ query: data, images: [], page: 1 });
  };
  onImageClick = data => {
    console.log(data);
    this.setState({
      largeImageURL: data,
      showModal: true,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
    });
  };
  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  render() {
    const { loading, images, largeImageURL, showModal } = this.state;
    // const { onSubmitForm, onImageClick, closeModal, loadMore } = this;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmitForm} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.onImageClick} />
        )}
        {images.length > 0 && !loading && <Button loadMore={this.loadMore} />}
        {loading && <Loader />}
        {showModal && (
          <Modal close={this.closeModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
