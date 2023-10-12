# LotusLife

Our aim with LotusLife was to create an accessible and interactive hub to allow people of varying experience to access mindfulness practices through a library of different resources and tools.

## Contributors

Andrea Vandyck - [github profile](https://github.com/andreavandyck "‌")

Max Pollock -[ github profile](https://github.com/maxpollock "‌")

Kara Sealeaf -[ github profile](https://github.com/karasealeaf "‌")

Sarah Barron - [github profile](https://github.com/sarahibarron "‌")

## Github

[Here is a link to our Github repository](https://github.com/maxpollock/LotusLife "‌")

## Wireframes

[Here is a link to view our initial wireframe idea](https://www.canva.com/design/DAFwfSEJJZQ/sXQXKa2xACbnMNkQqu03Ow/edit?utm_content=DAFwfSEJJZQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton "‌")

## Presentation

[Here is a link to our project deck presentation](https://docs.google.com/presentation/d/14IBkXQO3UCokFv0XR6J2JuMEEXRattHUkAuRQ52ZRd0/edit?usp=sharing "‌")

## Project Management

For project management - we used the tool Trello for planning, to organise our workflow and allocate tasks.

[Here is a link to our Trello board!](https://trello.com/b/wGHjzv5n/lotuslife-201-project "‌")

## User Stories

1. As a new user, I want to easily sign up and create a user profile, so I can see my website styling preference and view an ‘achievements' area that is automatically updated based on my engagement of the content on the website.
2. As a returning user on the same device, I want my saved preferences and achievements to be saved to local storage so that I can see my continuing progress and continue to view the website in my preferred style mode.
3. As someone interested in yoga, I want to browse a library of yoga video tutorials categorized by style, so I can find the perfect practice for my needs.
4. As a user, I want to be able to use an interactive breathing tool using CSS animation so that I can use this as a personal tool for reducing anxiety levels and practicing mindfulness.
5. As someone interested in mindfulness, I want to access a series of guided audio meditation sessions categorized by style, so I can find the perfect practice for my needs.
6. As a user, I want to be able to access a variety of signposting resources so that I can find out more information about mindfulness and meditation and develop my practice.
7. As a user, I want to be able to use a form to get in touch for more information and enquiries so that I can find out more.

‌

## Domain Modelling

We have used user data and inputs to display various elements throughout our website.

 Starting from the Home page, we track the clicks made on the Breathing Lotus Leaf start button, then Users can log their meditations and yoga practice via buttons next to each resource.

The clicks are tracked on each page and placed into Local Storage. When the userprofile page is loaded, it looks at local storage values for yoga, meditation and breathing lotus.

Depending on the amount of clicks (i.e. >5 or >10) it will display a medal in the achievements section.

On the contact form, on the about page, it takes the inputted data and displays a message underneath confirming the data inputted, i.e. “We will contact you on #inputtedemail”.

We have used a constructor function for the user profile form. This takes the values of name, email, birthday, theme preference. This allows us to use prototype functions to generate a user profile information chart. This has been added to local storage so when the page reloads, the user profile information stays there.

The theme preference is updated and triggers the darkmode/lightmode function to run. This is updated when you click on the toggle at the top too.