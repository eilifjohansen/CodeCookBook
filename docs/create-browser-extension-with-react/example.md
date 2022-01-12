---
sidebar_position: 3
---

# Sample extension

The sample app shows the current URL you are on when clicking on the plugin icon in your brownser. Simply replace the following code in app.js to get the sample app working, and then build and test
[build](/docs/create-browser-extension-with-react/getting-started#build) and [test locally](/docs/create-browser-extension-with-react/getting-started#test-locally) in your brownser.

```jsx
/*global chrome*/
import React, { useEffect, useState } from "react";

function App() {
  const [siteUrl, setSiteUrl] = useState("");
  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // Get tab info
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        const siteUrl = activeTab[0].url;
        setSiteUrl(siteUrl);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="site-info">{siteUrl && <p>{siteUrl}</p>}</div>
      </header>
    </div>
  );
}

export default App;
```
