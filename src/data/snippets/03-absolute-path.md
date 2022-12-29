---
snippet_name: "Absolute path"
description: "How to use path alias in js or typescript"
slug: "absolute-path"
tech_stack: "javascript"
tags:
  - javascript
  - typescript
---

if you do not want to import components like this, you must use absolute path

```js
// in detailPage example : (src/views/User/UserDetailComponents)
import DepthComponents from "../../components/dashboard/DepthComponents.vue";
```

### in vite

create tsconfig.json / jsconfig.json in root project

```js
{
    "compilerOptions": {
        "baseUrl": "./src",
        "paths": {
            "@/*": ["./*"]
        }
    }
}
```

after that go to vite.config.ts or vite.config.js

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // alias is refers to "paths" in compiler options
    },
  },
  plugins: [vue()],
});
```

and that's it, now you can import your component or anything else like this

```js
import Header from "@/components/Header.vue";
import DepthComponents from "@/components/dashboard/DepthComponents.vue";
import getData from "@/services/getData.js";
```

### in webpack

```js
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src");
    }
  }
}
```
