import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import ReactImageFallback from "react-image-fallback";
import { Divider, Image, Card } from 'semantic-ui-react';

class PostList extends React.Component {
  state = {
    src: '',
    fallbackSrc : `https://assets.your.md/conditions/lymphoedema/card/lymphoedema-female-card.jpg`,
    loaded : false,
    error: false
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  onImageLoaded = () => {
    this.setState({ loaded : true });
  }
  onImageError = () => {
    this.setState({ error : true });
  }
  addDefaultSrc(ev){
    ev.target.src = 'https://assets.your.md/conditions/lymphoedema/card/lymphoedema-female-card.jpg'
  }
  renderList() {
    const { src, loaded, fallbackSrc, error} = this.state;
    console.log(this.props.posts);
    return this.props.posts.map(post => {
      let src = post.image;
      //let imgSrc = (!error) ? src : fallbackSrc;
      return (
          <Card>
          <div className="item">
            {src ? <Image className="middle aligned" size='small' src={post.image}  onError= {this.addDefaultSrc} /> : <Image className="middle aligned" size='small' src={fallbackSrc}  onError= {this.addDefaultSrc} />}
            <Divider hidden />
            <div className="content">
              <div className="description">
                <h2>{post.label}</h2>
                <p>{post.snippet}</p>
              </div>
            </div>
          </div>
          </Card>
      );
    });
  }
  render() {
    //console.log(this.props.posts);
    return (
      <Card.Group itemsPerRow={4}>
        {this.renderList()}
      </Card.Group>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts })(PostList);

