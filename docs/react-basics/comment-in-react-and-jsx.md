---
sidebar_position: 2
sidebar_label: "Comment in React and JSX"
---

# Comment in React and SJX

## Sample

```jsx
import React, { Component } from "react";

// This is a single line comment in react
class App extends Component {
  /* This is a multiline 
  comment in react*/
  render() {
    return (
      <div>
        {/* This is a signle line comment in JSX */}
        <h1>Hello World</h1>
        {/* This is a multi line 
        comment in JSX */}
      </div>
    );
  }
}

export default App;
```
