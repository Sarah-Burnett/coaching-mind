# Coaching Mind

> New React project to investigate Next.js and Strapi. Inspired by volunteer work with coaching enterprise, built landing page and blog and intending to build out coaching management system (i.e. information, surveys and graphs to track progress) to make that process more efficient.

## In progress
Public:
- Index - landing page with reusable components and blog section integrating strapi blog
- Blog - integrating with strapi api and using dynamic routing for indiviual pages
- Login - strapi authentication (jwt) which upon success redirects to relevant user page (coach/coachee/user)

Private:
- Coach - display dynamic coach/coachee data, more to come... 

## To do
- Develop coach page - style existing, add in buttons to link to forms, add progress graph (e.g. recharts) etc.
- Brush up styling / check fully responsive
- Page transitions
- Connect up contact form
- Decide how to store JWT to prevent re-login
- Add forms to join/track coaching session progress
- Add coachee/staff pages
- Maybe do other public pages (e.g. faq)

## Installation
``` bash
# See package.json for commands - next, strapi and concurrent dev option
# Next on port 3000, strapi on port 1337



```

## Deploying 
``` bash
# Strapi deployed on heroku with pg add-on: coaching-mind-strapi
# Push strapi to heroku using subtree
git subtree push --prefix strapi heroku master

```

