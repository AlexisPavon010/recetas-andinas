const withLayout = (Layout) => (Component) => {
  Component.Layout = Layout;
  return Component;
};

export default withLayout;
