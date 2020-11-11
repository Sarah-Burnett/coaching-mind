# Coaching Mind

> New React project to investigate Next.js and Strapi. Inspired by volunteer work with coaching enterprise. Intending to build out coaching management system for coach/coachee/staff with information and surveys to feedback progress. Following pages built so far:

Public:
- Index - landing page with reusable components and blog section integrating strapi blog
- Blog - integrating with strapi api and using dynamic routing for indiviual pages
- Login - strapi authentication (jwt) which upon success redirects to relevant user page (coach only at present)
- FAQ - faq page with collapsible questions

Private:
- Coach - display dynamic data about current coaching programme

## To do
- E-commerce pages (started shop branch)
- Brush up existing styling / check fully responsive
- Check page transitions
- Store JWT to prevent re-login
- Develop coach page - add components to link to forms/info.
- Add forms to join/track coaching session progress
- Add coachee/staff page
- Testing

## Installation
Root directory
``` bash
# install dependencies
npm install

# see separate details below for /strapi and /client
```
Strapi with Postgres
``` bash
#  install
npm install-strapi

# start dev strapi server
npm run strapi

# concurrent dev server with client
npm run dev

# Environmnent variables - postgres credentials, AWS S3
DATABASE_PORT
DATABASE_NAME
DATABASE_USERNAME
DATABASE_PASSWORD
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY

# Runs on port 1337

```
NEXT.JS Client
``` bash
#  install
npm install-client

# start dev strapi server
npm run client

# concurrent dev server with strapi
npm run dev

# Environmnent variables - strapi url
NEXT_PUBLIC_STRAPI_URL

# Runs on port 3000

```

<!-- 
Deploying heroku command: 
git subtree push --prefix strapi heroku master
``` -->

