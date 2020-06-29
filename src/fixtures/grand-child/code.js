const SomeNode = (props) => (
  <Parent>
    <Child x={1} y={2}>
      <GrandChild></GrandChild>
    </Child>
    <Child x={10} y={20} />
  </Parent>
);
