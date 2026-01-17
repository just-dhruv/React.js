

function PostList({ data }) {
  return (
    <div>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default PostList;
