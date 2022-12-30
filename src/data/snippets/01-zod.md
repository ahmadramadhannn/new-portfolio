---
snippet_name: "Basic Validate with Zod"
description: "How to use zod with TS"
slug: "basic-zod"
tech_stack: "typescript"
tags:
  - javascript
  - typescript
---

### What is zod?

Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object.
for more information go to zod documentation

[zod](https://zod.dev/)

#### installation

```
npm install zod       # for npm
yarn add zod          # for yarn
bun add zod           # for bun
pnpm add zod          # for pnpm
```

#### basic usage for validate student

```ts
/* 
  we just need to import z object and we can use all of inside of zod
  for example if use another library, you must import something like this
  import { string, number, date, boolean } from 'another-library'
*/
import { z } from "zod";

/*
  very simple student schema
  by default, every single validation is required in zod
  if you want to use optional
  just add optional, like :
  const age: z.number().optional()
*/
const StudentSchema = z.object({
  /* use min value for name
     if name < 5 the custom message will be displayed
     if you not use custom message, the default message will be
     displayed and success data return false
  */
  name: z
    .string()
    .min(5, { message: "Name must be 5 or more characters long" }),
  age: z.number().optional(), // optional
  studentNumber: z.number(),
  hobby: z.string(),
});

type Student = z.infer<typeof StudentSchema>;

const student: Student = {
  name: "Ahmad Ramadhan",
  age: 22,
  studentNumber: 102030,
  hobby: "Programming",
};

/*
  success is boolean value, is mean the return value is true or false
  if all validation is corret, success is return true
  otherwise success return false
  is very usefull, when we don't need error message, we just need true or false
*/
console.log(StudentSchema.safeParse(student).success);
```

success output without .success
![zod-success](/assets/snippets/zod-success.png)

success output with .success
![zod-success](/assets/snippets/zod-with-success.png)

failed or error output with custom message without .success
![zod-failed](/assets/snippets/zod-error-without-success.png)

failed or error output with custom message with .success
![zod-failed](/assets/snippets/zod-error-with-success.png)
