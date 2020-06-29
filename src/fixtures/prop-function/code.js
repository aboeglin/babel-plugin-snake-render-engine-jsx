const SomeNode = (props) => (
  <Child x={1} y={2} z={props.z} onClick={(e) => doStuffWithEvent(e)} />
);
