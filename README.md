# Coaching Mind

> New React project to investigate Next.js. Inspired by volunteer work with coaching enterprise, built landing page and blog and intending to build out coaching management system (i.e. information, surveys and graphs to track progress) to make that process more efficient. Using Strapi (headless CMS) to speed up the back-end and give something else a go.

## In progress
Public:
- Index - landing page using reusable components and json to make much cleaner, blog section integrating strapi blog
- Blog - integrating with strapi api and using dynamic routing for indiviual pages

Private:
- Login - strapi authentication (jwt) which upon success redirects to relevant user page (coach/coachee/user)
- Coach - page exists needs work

## To do or more just brainstorming ideas at the moment
- Brush up styling / check responsive
- Add images to index to look into compressing - look at using html5 picture for different size screens
- Connect up contact form
- Logout page
- Develop coach page - style existing, add in buttons to link to forms, eventually add progress graph (recharts) etc.
- Decide how to store JWT to prevent re-login
- Add forms to join/track coaching session progress
- Add coachee/staff pages
- Maybe do other public pages (e.g. faq)
- Research different next.js data fetching prop options - not sure getInitialProps is right... 

## Installation
``` bash
# See package.json for commands - next, strapi and concurrent dev option
# Next on port 3000, strapi on port 1337
```

