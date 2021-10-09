function checkPropsDestructuring(node, report) {
  const firstParam = node.params[0];

  const functionName =
    node.type === "FunctionDeclaration" ? node.id.name : node.parent.id.name;

  if (functionName[0] !== functionName[0].toUpperCase()) {
    // Not a React Component
    return;
  }

  if (
    firstParam.type === "ObjectPattern" &&
    firstParam.loc.start.line !== firstParam.loc.end.line
  ) {
    report({
      node,
      message:
        "No multiple lines props destructuring at Component declaration, use 'props' parameter and destructure in function block",
      loc: {
        start: {
          line: firstParam.loc.start.line,
          column: firstParam.loc.start.column,
        },
        end: {
          line: firstParam.loc.end.line,
          column: firstParam.loc.end.column,
        },
      },
    });
  }
}

module.exports = {
  rules: {
    "no-multiline": {
      meta: {
        type: "suggestion",
        docs: {
          description:
            "Forbid multiline props destructuring at Component declaration",
          category: "Best Practices",
          recommended: false,
          url: "https://github.com/strdr4605/eslint-plugin-react-props-destructuring/blob/master/rules/no-multiline.md",
        },
      },
      create: function (context) {
        return {
          "FunctionDeclaration[params.length>0]": (node) =>
            checkPropsDestructuring(node, context.report),
          "ArrowFunctionExpression[params.length>0]": (node) =>
            checkPropsDestructuring(node, context.report),
        };
      },
    },
  },
};
