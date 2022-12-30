---
snippet_name: "Dynamic Title Vue"
description: "Create a dynamic title with vue and vue router"
slug: "dynamic-title"
tech_stack: "vue"
tags:
  - "vue"
---

#### Just add something like this

```js
router.beforeEach((to, from, next) => {
  /*
    you can also use env if you want
    or whatever
  */
  document.title = `Ahmad Ramadhan - ${to.name}`;
  next();
});
```

if you want to add post title or product name too, you just to add something like this

```js
router.beforeEach((to, from, next) => {
  let documentTitle = `Ahmad Ramadhan - ${to.name}`;

  to.params.title ? (documentTitle += `${to.params.title}`) : "";

  document.title = documentTitle;

  next();
});
```
