const SomeNode = props => Parent({
  children: [Child({
    x: 1,
    y: 2,
    children: [GrandChild({
      children: []
    })]
  }), Child({
    x: 10,
    y: 20,
    children: []
  })]
});
