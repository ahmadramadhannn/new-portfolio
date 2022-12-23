---
snippet_name: "Absolute path"
description: "How to use path alias in js (vite)"
slug: "absolute-path"
tech_stack: "javascript"
---

## in vite

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
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
})
```

and that's it, now you can import your component or anything else like this

```js
import Header from '@/components/Header.vue'
import getData from '@/services/getData.js';
```