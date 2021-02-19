import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Divider, Image, Card } from 'semantic-ui-react';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    console.log(this.props.posts);
    return this.props.posts.map(post => {
      return (
          <Card>
          <div className="item">
            <Image className="middle aligned" size='small' src={post.image} />
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

