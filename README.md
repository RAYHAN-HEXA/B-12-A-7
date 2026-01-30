1. What is JSX, and why is it used?

JSX (JavaScript XML) is a special syntax used in React that lets you write HTML-like code inside JavaScript.
It looks like HTML, but it’s actually JavaScript under the hood.

Example with JSX:

function App() {
  return <h1>Hello, world!</h1>;
}


Without JSX:

function App() {
  return React.createElement('h1', null, 'Hello, world!');
}


Why we use JSX:

It’s easier to read and write than plain React.createElement calls.

It makes the code look like the structure of the UI.

It allows embedding JavaScript logic inside HTML-like syntax using {}.

2. What is the difference between State and Props?

State and props are both used to store data in React, but they serve different purposes.

Feature	State	Props
Definition	Internal data managed by the component itself	External data passed to a component
Can change?	✅ Yes (mutable)	❌ No (read-only)
Who updates it?	The component itself	The parent component
Use case	Tracking things like user input, toggles, counters	Passing data and functions from parent to child components

Examples:

Props:

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}


State:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

3. What is the useState Hook, and how does it work?

useState is a React Hook that lets you add state to functional components.

How it works:

Call useState(initialValue).

It returns an array with two things:

The current state value.

A function to update it.

Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}


Every time setCount is called, React re-renders the component with the new value.

4. How can you share state between components in React?

To share state, lift the state up to a common parent component and pass it down as props.

Example:

import { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("Hello!");

  return (
    <>
      <Child1 message={message} />
      <Child2 setMessage={setMessage} />
    </>
  );
}

function Child1({ message }) {
  return <p>{message}</p>;
}

function Child2({ setMessage }) {
  return <button onClick={() => setMessage("Hi there!")}>Change Message</button>;
}


Here:

The state message lives in the Parent component.

Child1 reads it through props.

Child2 updates it using a function passed as a prop.

This keeps data in sync across multiple components.

5. How is event handling done in React?

Event handling in React is similar to HTML, but with camelCase event names and functions instead of strings.

Example:

function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}