---
sidebar_position: 1
sidebar_label: "Getting started"
---

# Create a Browser Extension with React

## Create React App

```bash
npx create-react-app my-brownser-extension
cd my-browser-extension
```

## Prepare for Browser Extension

### Modify manifest.json file in the public folder

####  Manifest version 2

```javascript
{
  "short_name": "Browser Extension",
  "name": "My Browser Extension",
  "icons": {
    "16": "favicon.ico",
    "48": "logo192.png",
   "128": "logo512.png"
  },
  "permissions": [
    "activeTab"
  ],
  "manifest_version": 2,
  "version": "0.0.1",
  "browser_action": {
    "default_popup": "index.html",
    "default_title": "My Browser Extension",
    "default_icon": "logo192.png"  }

}
```
####  Manifest version 3 (for Chrome)

```javascript
{
  "short_name": "Browser Extension",
  "name": "My Browser Extension",
  "icons": {
    "16": "favicon.ico",
    "48": "logo192.png",
   "128": "logo512.png"
  },
  "permissions": [
    "activeTab"
  ],
  "manifest_version": 3,
  "version": "0.0.1",
  "action": {
    "default_popup": "index.html",
    "default_title": "My Browser Extension",
    "default_icon": "logo192.png"  }
}
```
### Change package.json

#### Add scripts:

```javascript
"build-mac": "INLINE_RUNTIME_CHUNK=false react-scripts build",
"build-windows": "set INLINE_RUNTIME_CHUNK=false&&react-scripts build",
```

## Build

### Windows

```bash
npm run build-windows
```

### MAC

```bash
npm run build-mac
```

## Test locally

### Chrome

1. Launch [chrome://extensions/](chrome://extensions/) in Google Chrome
2. Make sure developer mode
3. Click “Load unpacked” and target “build” folder in your project.

### Firefox

1. Luanch [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox) in Firefox
2. Click “Load Temporary Add-on” and target “manifest.json” inside “build” folder in your project.

## That's it!
