# Forbid multiline props destructuring at Component declaration (@strdr4605/react-props-destructuring/no-multiline)

Destructuring Component props on multiple line may confuse the reader where the actual block or the function start.

## Rule Details

This rule checks all React Component and verifies that props are not destructuring on multiple lines at component declaration.

Examples of **incorrect** code for this rule:

```jsx
function Component({ 
  prop1, 
  prop2 
}) {
  return (
    <div>
      {prop1}
      {prop2}
    </div>
  );
}
```

```jsx
const Component = ({ 
  prop1, 
  prop2 
}) => (
  <div>
    {prop1}
    {prop2}
  </div>
);
```

Examples of **correct** code for this rule:

```jsx
function Component(props) {
  const { 
    prop1, 
    prop2 
  } = props;
  return (
    <div>
      {prop1}
      {prop2}
    </div>
  );
}
```

```jsx
function Component({ prop1, prop2 }) {
  return (
    <div>
      {prop1}
      {prop2}
    </div>
  );
}
```

```jsx
const Component = (props) => {
  const { 
    prop1,
    prop2
  } = props;

  return (
    <div>
      {prop1}
      {prop2}
    </div>
  );
};
```
