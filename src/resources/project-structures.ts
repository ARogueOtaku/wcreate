import { TFolder } from "../utils/types";

export const tailwindStructure: TFolder = {
  __typname: "Folder",
  content: [
    {
      __typname: "File",
      name: ".gitignore",
      content: `/node_modules
/.parcel-cache
/dist`,
    },
    {
      __typname: "File",
      name: "package.json",
      content: `{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "tailwind:watch": "tailwindcss -i ./tailwind.css -o ./src/styles/tailwind.output.css --watch",
    "tailwind:build": "tailwindcss -i ./tailwind.css -o ./src/styles/tailwind.output.css",
    "parcel:build": "parcel build src/index.html --dist-dir dist --public-url ./",
    "parcel:serve": "parcel serve src/index.html",
    "start": "concurrently \\"npm run tailwind:watch\\" \\"npm run parcel:serve\\"",
    "build": "npm run tailwind:build && npm run parcel:build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^7.2.2",
    "parcel": "^2.6.2",
    "tailwindcss": "^3.1.4"
  }
}`,
    },
    {
      __typname: "File",
      name: "tailwind.config.js",
      content: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
`,
    },
    {
      __typname: "File",
      name: "tailwind.css",
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
    {
      __typname: "Folder",
      name: "src",
      content: [
        {
          __typname: "File",
          name: "index.html",
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="./styles/tailwind.output.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A Fancy Page</title>
  </head>
  <body class="h-screen w-screen flex flex-col items-center bg-slate-800 text-slate-200">
    <main class="flex flex-grow items-center text-5xl font-semibold relative">Your Beautiful Homepage</main>
    <footer class="m-5"><em>Made using WCreate</em></footer>
  </body>
</html>
`,
        },
        {
          __typname: "Folder",
          name: "styles",
        },
      ],
    },
  ],
  name: "project",
};
