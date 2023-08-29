# CONNECTING THINKERS

 “Connecting Thinkers” is a website directed at those who like to be on top of the news. The information is 
provided in a captive way from our debaters in a unique and innovative format.

Every week, a new subject is uploaded in the Connecting Thinkers’ Arena, and two professionals with
different expertise and background will debate about the same subject. You can easily access our latest
content clicking in the What's New button above or scrolling down to the Arena section.

Nowadays, people is becoming more politicized and speaking their minds as never before. Depending on 
their beliefs and personal interesting, the information vehicles can be seriously compromised with partiality.
According to Michael Altshuler - an American Author and Speaker about Business leadership - the “Bad news is time flies.
The good news is you’re the pilot”. You have the power to decide from where to get reliable information.

The way we use our time and the source we select to feed our brains can determine our deepest thoughts and existence
and this can influence us positively or not. In the past, the Greek philosophers for example were very well known for
their excellent time management skills and knowing how to grow their knowledge in different areas of actuation as math, sciences, 
speech, languages, and this mix of understanding made them amazing debaters.

Connecting Thinkers follows the same logical reasoning to bring you a quality debate crossing over different “Thinkers” 
point of view and background. Here in this section our current time is displayed as a reminder to use your time wisely.
The debaters will discuss the subject and you can check afterwards how much information you retained playing our quiz game.

![screenshot](documentation/mockup.png)

Deployed site link: [CONNECTING THINKERS](https://felipeseiberlich.github.io/connecting-thinkers/)

## UX
‘Connecting Thinkers’ design is inspired by the cogs, representing our brain’s function, by the ropes that connect spaces and tight things up, by the bulb lamp representing the knowledge and ideas, by the Greek buster representing our reference to the Greek philosophers and by the boxing ring representing a modern arena. Following the variety of movements and animation applied to the titles and buttons at Connecting Thinkers website, the reference is that different opinions should meet in the middle and knowledge needs to emanate as waves.
The navigation was designed in a way that the user could be easily taken to any part of the landing and quiz pages. The links are displayed intentionally in the diagonal to reference one more time that extremities can be linked and to provide a clean and harmonic layout.

### Colour Scheme
In the early stages of the project, I envisioned a nice contrast between tones of orange black and grey. In the middle of the project the lavender was added to the scheme color palette to bring freshness and joy . 
My inspiration for Connecting Thinkers website was based on the visuals of complementary colours, by the elegance of black and white for the headings and page's background and the eye catching Davy's grey for general text.

- `#000000` used for primary text.
- `#E84610` used for primary highlights.
- `#4A4A4F` used for secondary text.
- `#009FE3` used for secondary highlights.

I used [coolors.co](https://coolors.co/e84610-009fe3-4a4a4f-445261-d63649-e6ecf0-000000) to generate my colour palette.
![screenshot](documentation/coolors.png)

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️
If you've used CSS `:root` variables, consider also including a code snippet here!
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
I've used CSS `:root` variables to easily update the global colour scheme by changing only one value, instead of everywhere in the CSS file.
```css
:root {
    /* P = Primary | S = Secondary */
    --p-text: #000000;
    --p-highlight: #E84610;
    --s-text: #4A4A4F;
    --s-highlight: #009FE3;
    --white: #FFFFFF;
    --black: #000000;
}
```
### Typography
The font-family selected for 'Connecting Thinkers' body is Lato, sans-serif and for the Headings Oswad, sans-serif a typographic style that is appealing and clear.
Example:
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
- [Montserrat](https://fonts.google.com/specimen/Montserrat) was used for the primary headers and titles.
- [Lato](https://fonts.google.com/specimen/Lato) was used for all other secondary text.
- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the social media icons in the footer.
## Features
‘Connecting Thinkers’ website is composed by 2 pages – the Index and the Quiz game. The landing page contains a header, an about section, the Our History section, the Arena section, and the footer. The Quiz game page contains the logo, a card displaying the game and a footer.
The Index Page
The Index Page has a compound background image bounding a very vibrant color with a monochromatic one, showing that differences can live side by side. The navigation can be made throughout the header. The logo image links the user to the Quiz game page, the ‘What’s new’ button displayed in the center of the header links to the Arena and the About button leads the user to Our History.
The ‘Our History’ section display the concept of the Connecting Thinkers website and the current date, day, and time as a reminder for users to use their time wisely.
In the following section the users can find our Arena, the place we present our debaters of the week and their following professions. The debate can be watched by the users in the center of the Arena with an expandable video.
The footer displays a button that leads the user all the way up to the page's header and the copyright mark.
 
The header
The header shows the logo followed by the website's name, Connecting Thinkers, presented in black capitals, one of the main colours of the website's palette. 
The index webpage is displayed in almost full viewport but allows the user to scroll down to the other sections or to click in the linked button, image, and text to reach them.
The Connecting Thinkers tittle present in the header has an intended animation applied to it as reference that different opinions should meet in the middle and the button bellow effects that knowledge needs to emanate.
Finally, the header is connected to the About section that display a linked text leading the users to the following section.
The About section
The About section was created with the intention to be connected to the header and to lead the users to the following section with a click. These two sections bounded provide the users an efficient navigation to all sections and side page. As elucidated before the background image was selected with the intention to nicely contrast with the header’s color and background and to make a reference of the brain function represented by the cogs. The text displayed in this section changes its color to orange when hovered over by the users.
The Our History section
The ‘Our History’ section contains some vital information about the page itself, about the Connecting Thinkers creation process the frequency of videos uploads. One of Connecting Thinkers references goes back in time until the great Greeks Philosophers like Aristotle and Plato. A Greek bust statue decorates this section following by our current date, time, and hour. This functionality was integrated to the website to reminder the users to use their time wisely.
This section was designed like a flash card following the concept of knowledge comes with hardwork, dedication and education.
The Arena section
The Arena section has an important role in this website. It hosts the debate and presents the week’s debaters. The concept of creating an arena transcend the Ancient Roman Empire, where gladiators used to fight for their lives while the emperor provides entertainment to the people.
Connecting Thinkers in the other hand modernized the concept bringing a box ring so the debaters can intellectually “fight” to keep their point of view alive.
On the top of the background image, a heading contains the week’s subject, and it is displayed in a subtle purpled colour animation to create a visual contrast. Every week a new subject, a new video and new debaters will be selected and added to this panel.
After or before the intellectual nourishment, users can be entertained by a quiz game clicking on the “Do you know?” Button and an external page will display the game.
The Footer 
The footer has its background colour in black and hosts the copyright and a function button that brings the users to the top of the page
### Existing Features
- **Back to top button**
- Having a "back to top" button on a website is important. It allows users to easily scroll back to the top of the page. Java Script was used for this addition.
![screenshot](documentation/feature01.png)
- **Display current date and time**
- Even that most of devices has the current date and time displayed, Connecting Thinkers website brings this feature in the center of the page side-by-side the main text. The golden ratio was applied so the human eye can process it faster and that causes our brain to feel pleased.
![screenshot](documentation/feature02.png)
- **Quiz game**
- This feature is an important addition to the website because offer the users an interactive way of solidifying their knowledge. 
![screenshot](documentation/feature03.png)
### Future Features
In the future I would like to include the following features:
- Video gallery
    - A space reserved to all videos published by Connecting Thinkers.
- Flash cards
    - In the Our history section, I would like to include a text carrousell simulating a flash card. 
- Quiz total score
    - I would like to add the user's total score in the end of the game.
## Tools & Technologies Used
⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️
In this section, you should explain the various tools and technologies used to develop the project.
Make sure to put a link (where applicable) to the source, and explain what each was used for.
Some examples have been provided, but this is just a sample only, your project might've used others.
Feel free to delete any unused items below as necessary.
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS :root variables](https://www.w3schools.com/css/css3_variables.asp) used for reusable styles throughout the site.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) used for an enhanced responsive layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.
## Testing
For all testing, please refer to the [TESTING.md](TESTING.md) file.
## Deployment
The site was deployed to GitHub Pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/FelipeSeiberlich/connecting-thinkers), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found [here](https://felipeseiberlich.github.io/connecting-thinkers)
### Local Deployment
This project can be cloned or forked in order to make a local copy on your own system.
#### Cloning
You can clone the repository by following these steps:
1. Go to the [GitHub repository](https://github.com/FelipeSeiberlich/connecting-thinkers) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
    - `git clone https://github.com/FelipeSeiberlich/connecting-thinkers.git`
7. Press Enter to create your local clone.
Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/FelipeSeiberlich/connecting-thinkers)
Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).
#### Forking
By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/FelipeSeiberlich/connecting-thinkers)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!
### Local VS Deployment
⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️
Use this space to discuss any differences between the local version you've developed, and the live deployment site on GitHub Pages.
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
## Credits
⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️
In this section you need to reference where you got your content, media, and extra help from.
It is common practice to use code from other repositories and tutorials,
however, it is important to be very specific about these sources to avoid plagiarism.
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
### Content
⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️
Use this space to provide attribution links to any borrowed code snippets, elements, or resources.
A few examples have been provided below to give you some ideas.
Ideally, you should provide an actual link to every resource used, not just a generic link to the main site!
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://traveltimn.github.io/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) | contact page | interactive pop-up (modal) |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Grid Garden](https://cssgridgarden.com) | entire site | modern responsive layouts |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [YouTube](https://www.youtube.com/watch?v=YL1F4dCUlLc) | leaderboard | using `localStorage()` in JS for high scores |
| [YouTube](https://www.youtube.com/watch?v=u51Zjlnui4Y) | PP3 terminal | tutorial for adding color to the Python terminal |
| [strftime](https://strftime.org) | CRUD functionality | helpful tool to format date/time from string |
| [WhiteNoise](http://whitenoise.evans.io) | entire site | hosting static files on Heroku temporarily |
### Media
⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️
Use this space to provide attribution links to any images, videos, or audio files borrowed from online.
A few examples have been provided below to give you some ideas.
If you're the owner (or a close acquaintance) of all media files, then make sure to specify this.
Let the assessors know that you have explicit rights to use the media files within your project.
Ideally, you should provide an actual link to every media file used, not just a generic link to the main site!
The list below is by no means exhaustive. Within the Code Institute Slack community, you can find more "free media" links
by sending yourself the following command: `!freemedia`.
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Pexels](https://www.pexels.com) | entire site | image | favicon on all pages |
| [Lorem Picsum](https://picsum.photos) | home page | image | hero image background |
| [Unsplash](https://unsplash.com) | product page | image | sample of fake products |
| [Pixabay](https://pixabay.com) | gallery page | image | group of photos for gallery |
| [Wallhere](https://wallhere.com) | footer | image | background wallpaper image in the footer |
| [This Person Does Not Exist](https://thispersondoesnotexist.com) | testimonials | image | headshots of fake testimonial images |
| [Audio Micro](https://www.audiomicro.com/free-sound-effects) | game page | audio | free audio files to generate the game sounds |
| [Videvo](https://www.videvo.net/) | home page | video | background video on the hero section |
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |
### Acknowledgements
⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️
Use this space to provide attribution to any supports that helped, encouraged, or supported you throughout the development stages of this project.
A few examples have been provided below to give you some ideas.
🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑
- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my partner (John/Jane), for believing in me, and allowing me to make this transition into software development.
- I would like to thank my employer, for supporting me in my career development change towards becoming a software developer.
