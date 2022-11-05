# Rock Paper Scissors
The Sudoku website is a user-interactive, JavaScript game based on the classic Rock Paper Scissors. The intention of this [site](https://cmikedev.github.io/rock-paper-scissors/) is to provide users with a simple, intuitive interface based on their expectations of what a Rock Paper Scissors game is.
____


![image](https://github.com/cmikedev/rock-paper-scissors/blob/main/assets/readme-images/amiresponsive-screenshot.png?raw=true)
Images created using [Am I Responsive](https://ui.dev/amiresponsive)<br />
<br />


## Deployed Website
https://cmikedev.github.io/rock-paper-scissors/


## Repository
https://github.com/cmikedev/rock-paper-scissors


## Design & User Stories

The site consists of a single page designed to be clear and intuitive for the user. The colour palette was chosen to be intentionally simple and subdued. The intention was to create a clean and minimal view which would enhance usability and clarity for new players.

Although the game is ubiquitous in English-speaking countries, it could not be assumed that all visitors would be familiar with the rules. An instructions section was addded into the initial page layout. This was updated in future drafts whereby the user could toggle the instructions from visible to hidden via a button thereby creating a cleaner page. 

User-interactive elements on the page such as the button and the images denoting the players choice have hover effects to further guide the user to interact with the game, enhacing the user experience.<br />
<br />


## Testing

### Responsiveness Testing

* The responsiveness tests were carried out manually using Google Chrome's [Inspect Function](https://developer.chrome.com/docs/devtools/open/) with also some real world testing on actual devices. Some of the devices tested included (but not limited to):
    * Nest Hub Max
    * iPad Mini
    * iPad Air
    * Samsung Galaxy S8+
    * iPhone SE
    * Samsung Galaxy S8 (real-world test on device)
    * Samsung Galaxy S9 (real-world test on device)
    * Apple MacBook Air (real-world test on device) <br />
    <br />


### Validator Testing

* #### W3C
    * HTML
        * The HTML was checked through the [W3C HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcmikedev.github.io%2Frock-paper-scissors%2F).
        
        Initially, 4 errors and 3 warnings were returned. The 4 errors were due to the use of alt attributes within the i elements and a stray footer tag. The warnings were due to the use of aria labels again within the i elements. Like the alt attributes, the aria labels were intended to provide greater accessibility for users. However, due to the errors and warnings being returned they have been removed. The HTML now returns no errors when put through the W3C HTML Validator.
    * CSS
        * There were no errors but 12 warnings were returned when the CSS when checked through The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcmikedev.github.io%2Frock-paper-scissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
        
        These warnings relate to the use of vendor extensions within the hover effects.<br />
        <br />
        ![image](https://github.com/cmikedev/rock-paper-scissors/blob/main/assets/readme-images/css-warnings.png?raw=true)<br />
        <br />

* #### JSHint
    * The JavaScript was tested through [JSHint](https://jshint.com/). There were no errors found.<br />
    <br />

* #### Lighthouse (web.dev)
    * Lighthouse through [web.dev](https://web.dev/) was used to test the site for: 
        * Performance
        * Accessibility
        * Best Practice
        * SEO<br />
        <br />
    Performance was the lowest scoring category at 85%<br />
    <br />
    ![image]()<br />
    <br />
    The addition of Google Fonts had a negative impact on performance<br />
    <br />
    ![image]()<br />
    <br />
    * The front page full test results can be found [here](https://web.dev/measure/?url=https%3A%2F%2Fcmikedev.github.io%2Frock-paper-scissors%2F)<br />
    <br />

## Bugs

* There are no unfixed bugs.<br />
<br />


## Deployment

### Deploying the repository via GitHub
* The website was deployed using GitHub pages via the following steps:
    * In the Respository section, select the [rock-paper-scissors](https://github.com/cmikedev/rock-paper-scissors) repository
    * From the horizontal menu above the repository contents select __Settings__
    * From the left-hand vertical menu, go to the __code and automation__ section and select __pages__
    * From the __Source__ selection drop-down, select __Branch__ > __main__
    * The page will then automatically refresh displaying a ribbon indicating deployment status<br />
    <br />
    The deployed website can be found here - https://cmikedev.github.io/rock-paper-scissors/<br />
    <br />

### Forking the repository
* The GitHub repository can be forked to make a copy of the original. This copy can then be viewed or changed without affecting the original repository via the following steps:
    * In the Respository section, select the [rock-paper-scissors](https://github.com/cmikedev/rock-paper-scissors) repository
    * At the top right of the page select __fork__ from the menu below your profile
    * A copy of the repository will now be created in your account

### Creating a local clone
* To create a local clone via GitHub:
    * In the Respository section, select the [rock-paper-scissors](https://github.com/cmikedev/rock-paper-scissors) repository
    * From the horizontal menu above the repository contents select __Code__
    * __Copy__ the link that that is shown
    * Within __Gitpod__ change the directory to where you would like the location of the cloned directory to be
    * Type __git clone__ and paste the link that you copied
    * Press __Enter__ and the local clone will be created<br />
    <br />



## Credits

### Content
* The favicon in the tile (page tab) was taken from [Flaticon](https://www.flaticon.com/)
* The images were taken from [Font Awesome](https://fontawesome.com/)
* The fonts were taken from [Google Fonts](https://fonts.google.com/)

### Research and Guidance
* [RedFlyer Coding](https://www.youtube.com/watch?v=ea3UBpMHDoc&t=1096s) (video series) for guidance on board creation logic and user experience
* [Stackoverflow](https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null) for guidance on the window load console error

----

## Acknowledgements
I would like to thank my course mentor Harry Dhillon for providing guidance on this project.

