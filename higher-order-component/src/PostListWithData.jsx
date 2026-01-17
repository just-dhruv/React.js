import PostList from "./PostList";

import withData from "./hoc/withData"; // hoc component

const PostListWithData = withData(PostList, 'https://jsonplaceholder.typicode.com/posts');

// give the component to the hoc component like PostList

export default PostListWithData