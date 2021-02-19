import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    console.log(this.props.posts);
    return this.props.posts.map(post => {
      return (
        <div className="item">
          <img className="large middle aligned" src={post.image} />
          <div className="content">
            <div className="description">
              <h2>{post.label}</h2>
              <p>{post.snippet}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.posts);
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts })(PostList);

