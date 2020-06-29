var jsx = require("@babel/plugin-syntax-jsx").default;

module.exports = ({ types: t }) => ({
  name: "babel-plugin-snake-render-engine-jsx",
  visitor: {
    JSXElement: {
      exit: (path) => {
        const elementName = path.node.openingElement.name.name;
        const props = path.node.openingElement.attributes.map((attribute) => {
          const key = t.identifier(attribute.name.name);
          const value = attribute.value.expression;
          return t.objectProperty(key, value);
        });

        const children = path.node.children.filter(
          (x) => x.type === "CallExpression"
        );
        props.push(t.objectProperty(t.identifier("children"), t.arrayExpression(children)));

        path.replaceWith(
          t.callExpression(t.identifier(elementName), [
            t.objectExpression(props),
          ])
        );
      },
    },
  },
  inherits: jsx,
});
