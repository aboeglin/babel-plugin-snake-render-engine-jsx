const spread = { x: 1, y: 2 };

const SomeNode = (props) => <Child {...spread} z={props.z} />;
