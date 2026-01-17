function withAuth(WrappedComp) {
  return function Protected(props) {
    const isLogIn = true;
    if (!isLogIn) return <h3>Please login</h3>;
    return <WrappedComp {...props} />;
  };
}

export default withAuth;
