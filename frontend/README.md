## Notes general

Marking points on an image stores the point on the client so refreshing the page will refresh the points.
Would not be difficult to extend this to store them in a DB with some backend endpoints but thats outside the scope of the challenge.

## Notes on architecture and keeping the project clean

I went ahead and used [Next.js](https://nextjs.org/) as the framework for the challenge, 
out of the box it is configured with typescript/tailwind/eslint and is easy to config, 
I enjoy working with the framework

I've used `zustand` as the global state manager (lighter weight version of redux).
Only global state we have is the points marked on the images.

For UX I've added daisy UI to make things look nicer. Dasiy UI is free and works nicely with tailwind.

The project as a typical nextjs structure.

/src/app/pages
  Nextjs's way of doing routing with `index.tsx` being the home page.
  (there is no other routing in this project.)
  
## Notes on backend
The backend endpoint for fetching the image file was not complete (I'm not sure if this was intentional ?) But I updated to return an image as a blob.

## Getting Started

It should be possible to run the application with the original setup
```bash
docker compose up --build 
```