import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Divider, Image, Card } from 'semantic-ui-react';

class PostList extends React.Component {
  state = {
    src: '',
    fallbackSrc: `https://assets.your.md/conditions/lymphoedema/card/lymphoedema-female-card.jpg`
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  addDefaultSrc(ev) {
    ev.target.src = 'https://assets.your.md/conditions/lymphoedema/card/lymphoedema-female-card.jpg'
  }
  renderList() {
    const { fallbackSrc } = this.state;
    console.log(this.props.posts);
    return this.props.posts.map(post => {
      let src = post.image;
      return (
        <Card>
          <div className="item">
            {src ? <Image className="middle aligned" size='small' src={post.image} onError={this.addDefaultSrc} /> : <Image className="middle aligned" size='small' src={fallbackSrc} />}
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

