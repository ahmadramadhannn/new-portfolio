---
project_name: "E-commerce with Supabase"
description: "An e-commerce website built with vue js, vue router, pinia, tailwindcss and supabase for backend or API"
slug: "e-commerce"
image: "/assets/projects/tokopedia.png"
singleImage: "/assets/projects/tokopedia.png"
githubLink: "https://github.com/ahmadRamadhan-dotcom/e-commerce-vue-supabase"
demoLink: "https://e-commerce-vue-supabase.vercel.app/"
tech_stack:
  - ["Vue Js", "vue"]
  - ["Vue Router", "vue-router"]
  - ["Tailwindcss", "tailwind"]
---

```js
export async function getStaticPaths() {
  const allProjects = await Astro.glob("../../data/projects/*.md");

  return allProjects.map((project) => {
    return {
      params: { slug: project.frontmatter.slug },
      props: { ...project },
    };
  });
}
```
