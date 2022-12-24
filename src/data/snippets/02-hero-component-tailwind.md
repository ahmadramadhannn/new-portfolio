---
snippet_name: "Hero component"
description: "Create different hero component with Tailwindcss"
slug: "hero-component-tailwindcss"
tech_stack: "tailwind"
tags:
  - css
  - tailwind
---

## With login form and dark mode support

with login form and dark mode support code :

```html
<div
  class="grid place-content-center place-items-center bg-white dark:bg-[#000] min-h-[30rem] pb-20"
>
  <div
    class="w-11/12 sm:w-[500px] md:w-[660px] lg:w-[800px] xl:w-[1200px] grid lg:grid-cols-2 place-content-center place-items-center gap-10 md:gap-x-24 mt-10"
  >
    <div class="grid gap-3">
      <h1
        class="text-center lg:text-start text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white font-bold"
      >
        This is hero with form and dark mode support
      </h1>
      <p
        class="text-black text-center lg:text-start dark:text-white font-medium"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        fugit, libero quis tempore consequatur amet eum tenetur, possimus dolor
        sed aut odit id, neque quia atque asperiores iure nobis totam.
      </p>
    </div>
    <div
      class="border border-gray-300 bg-[#f8f9fa] dark:bg-transparent min-h-[18rem] md:w-9/12 lg:w-[300px] xl:w-[400px] rounded-md p-10"
    >
      <div class="grid gap-4">
        <input
          type="email"
          id="email"
          name="email"
          class="bg-white dark:bg-transparent text-black dark:text-white border border-gray-300 w-full py-4 shadow-sm rounded-md focus:outline-none focus:ring focus:ring-cyan-300 focus:transition focus:duration-200 pl-5"
          placeholder="Email address"
        />
        <div>
          <input
            type="password"
            id="password"
            name="password"
            class="bg-white dark:bg-transparent text-black dark:text-white border border-gray-300 w-full py-4 shadow-sm rounded-md focus:outline-none focus:ring focus:ring-cyan-300 focus:transition focus:duration-200 pl-5"
            placeholder="****"
          />
          <a href="#" class="text-[12px] text-black/50 dark:text-white/50">
            Forgot password?
          </a>
        </div>
        <button
          aria-label="sign_up_button"
          type="button"
          class="w-full bg-blue-700 hover:bg-blue-600 hover:transition hover:duration-200 text-white py-3 rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>
```

with login form and dark mode support output :

dark desktop version
![This is an image](../../src/assets/snippets/hero_dark_lg.png)

white desktop version
![This is an image](../../src/assets/snippets/hero_white_lg.png)

## Simple hero

simple hero code :

```html
<div
  id="hero_container"
  class="min-h-[30rem] bg-[#212529] grid place-content-center place-items-center text-white"
>
  <div
    class="w-11/12 md:max-w-2xl 2xl:max-w-4xl grid gap-3 place-content-center place-items-center text-center"
  >
    <h1 class="font-bold text-3xl md:text-4xl">Simple Hero</h1>
    <p class="text-white/50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
      praesentium vel repellat perspiciatis quia delectus quibusdam fugit
      asperiores ex. In similique animi itaque tenetur magnam eaque error! Amet
      alias placeat et laboriosam suscipit ex a, minus consequuntur quas
      sapiente quis est repellat quia quo nemo quasi temporibus labore possimus!
      Fugiat.
    </p>
    <div class="grid sm:flex sm:justify-center gap-5 mt-10 w-full pb-10">
      <button
        class="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black hover:transition hover:duration-200 text-lg px-0 sm:px-4 py-2 rounded-md text-center"
      >
        Action one
      </button>
      <button
        class="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black hover:transition hover:duration-200 text-lg px-0 sm:px-4 py-2 rounded-md text-center"
      >
        Action two
      </button>
    </div>
  </div>
</div>
```

simple hero output:

desktop version
![This is an image](../../src/assets/snippets/hero_xl.png)

mobile version
![This is an image](../../src/assets/snippets/hero_sm.png)
