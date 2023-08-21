## Notes on assignment

Marking points on an image stores the point on the client so refreshing the page will refresh the points.
Would not be difficult to extend this to store them in a DB with some backend endpoints but thats outside the scope of the challenge.

## Notes on architecture and keeping the project clean

I went ahead and used [Next.js](https://nextjs.org/) (how aptly named) as the framework for the challenge, 
out of the box it is configured with typescript/tailwind/eslint and is easy to config, 
I enjoy working with the framework.

I've used `zustand` as the global state manager (lighter weight version of redux).
Only global state we have is the points marked on the images.

For UX I've added daisy UI to make things look nicer. Dasiy UI is free and works nicely with tailwind.

The project has a typical nextjs structure.

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




## Demo

https://github.com/KyleJonesNV/nextml-frontend/assets/93512808/2887d99e-83e9-4ea7-aaa6-6e58c61191f2






# Assignment

Build a simple frontend based on this boilerplate for these user stories:

1. User should be able to navigate between drone images
2. User should be able to zoom and pan a drone image
3. User should be able to add a point of interest with a comment

Estimated time: 4-6 hours

## Things we will look at

1. Maintainability of code
2. Readability of code
3. Intuitiveness of the interface
4. Responsiveness of the interface

## Drone images

Download the drone images and put them in `data/images`.

https://drive.google.com/file/d/1qOKw0ReDYCPlEE8uP9lveBbISFxiW5jO/view?usp=sharing

## Development

```bash
docker compose up --build
```

You will find the backend on `localhost:8000` and the frontend on `localhost:3000`.

### Backend

We recommend using pyenv and poetry to manage your python environment.

- https://github.com/pyenv/pyenv
- https://github.com/python-poetry/poetry

After installing you can add new dependencies with

```bash
cd backend && poetry add <dependency>
```
