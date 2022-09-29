import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="headline">Blog</h1>
      <div>
        <h3 className="question">How does react work?</h3>
        <p className="answer">
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It’s possible
          to have as many components as necessary without cluttering your code.
          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes. The declarative view makes your code more
            predictable and easier to debug. A React application is made of
            multiple components, each responsible for rendering a small,
            reusable piece of HTML. Components can be nested within other
            components to allow complex applications to be built out of simple
            building blocks. A component may also maintain an internal state –
            for example, a TabList component may store a variable corresponding
            to the currently open tab.
          </p>
        </p>
      </div>
      <div>
        <h3 className="question">Differences between props and state:</h3>
        <p className="answer">
          PROPS:
          <ul>
            <li>The Data is passed from one component to another.</li>
            <li>It is Immutable (cannot be modified).</li>
            <li>Props can be used with state and functional components.</li>
            <li>Props are read-only.</li>
          </ul>
          STATE:
          <ul>
            <li>The Data is passed within the component only.</li>
            <li>It is Mutable ( can be modified).</li>
            <li>
              State can be used only with the state components/class component
              (Before 16.0).
            </li>
            <li>State is both read and write.</li>
          </ul>
        </p>
      </div>
      <div>
        <h3 className="question">
          Uses of useEffect except data loading with API:
        </h3>
        <p className="answer">
            <h4>5 use case of useEffect:</h4>
          <ul>
            <li>Running on state change: validating input field</li>
            <li>Running on state change: live filtering</li>
            <li>
              Running on state change: trigger animation on new array value
            </li>
            <li>
              Running on props change: update paragraph list on fetched API data
              update
            </li>
            <li>
              Running on props change: updating fetched API data to get BTC
              updated price
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
