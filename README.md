# Rock Paper Scissors
The Sudoku website is a user-interactive, JavaScript game based on the classic Rock Paper Scissors. The intention of this [site](https://cmikedev.github.io/rock-paper-scissors/) is to provide users with a simple, intuitive interface based on their expectations of what a Rock Paper Scissors game is.
____


![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/amiresponsive-front.png?raw=true)
Images created using [Am I Responsive](https://ui.dev/amiresponsive)<br />
<br />


## Deployed Website
https://cmikedev.github.io/rock-paper-scissors/


## Repository
https://github.com/cmikedev/rock-paper-scissors


## User Stories
### Structure

* The site consists of one page:
    * index.html
    * game.html<br />
    <br />

### Styling

The colour palette was chosen to be intentionally simple and subdued. The intention was to create a clean and minimal view which would enhance usability and clarity for new players.

Although the game is ubiquitous in English-speaking countries, it could not be assumed that all visitors would be familiar with the rules. An instructions section was addded into the initial page layout. This was updated in future drafts whereby the user could toggle the instructions from visible to hidden via a button thereby creating a cleaner page. 

User-interactive elements on the page such as the button and the images denoting the players choice have hover effects to further guide the user to interact with the game, enhacing the user experience.

## Features

* ### Main Text
    * The front page provides instructions for users on how to play Sudoku as well as a bold, obvious link to the game page.<br />
    <br />

    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/instructions.png?raw=true)<br />
    <br />


* ### The Footer
    * The footer section contains social media links encouraging the user to connect and engage via social media.
    * The social media links open in a new tab allowing easy navigation for the user.<br />
    <br />

    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/social-media-footer.png?raw=true)<br />
    <br />
    

* ### The Game Page
    * Users can access the game page by clicking on the 'To The Game Page!' link on the front page.
    * When users arrive on the game page they are presented with a very simple layout allowing them a choice of 'Easy', 'Medium' or 'Hard' and the 'Start Game!'.
    * The difficulty choice will determing how many lives a user will be given from 12, 7 down to 3.<br />
    <br />

    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/game-page.png?raw=true)<br/>
    <br />

    * When the user clicks on 'Start Game!' the board will generate.
    * At any stage the user can click the 'Reset' button and the board will disappear leaving the user free to select a new difficulty level and start again.<br />
    <br />

    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/game-page-board.png?raw=true)<br />
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
        * The HTML was checked through the [W3C HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcmikedev.github.io%2Frock-paper-scissors%2F). Initially, 4 errors and 3 warnings were returned. The 4 errors were due to the use of alt attributes within the i elements and a stray footer tag. The warnings were due to the use of aria labels again within the i elements. Like the alt attributes, the aria labels were intended to provide greater accessibility for users. However, due to the errors and warnings being returned they have been removed. The HTML now returns no errors when put through the W3C HTML Validator.
    * CSS
        * There were no errors or warnings within the CSS when checked through The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcmikedev.github.io%2Fsudoku%2Fgame.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)<br />
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
    On the front page, the Accessibility, Best Practices and SEO were all 100%. However, the Performance came in lower at 89%<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-front-results-1.png?raw=true)<br />
    <br />
    With the addition of Google Fonts, the Performance score dipped further to 77%.<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-front-results-2.png?raw=true)<br />
    <br />
    Althought Google Fonts is a factor, the biggest driver of the sub-optimal performance on the front page is the background image.<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-opportunity-image.png?raw=true)<br />
    <br /> 
    [web.dev](https://web.dev/) suggests changing the image format from its current format of .PNG to either AVIF or WebP. However, given that .PNG is widely supported across browsers and that the website itself is relatively small and shows no sluggishness in real-world testing, the image has been left in its .PNG format (see Bugs section for further comment).<br />
    <br />
    On the first test of the game page all returned results with the exception of Accessibility (96%) came in at 100%<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-game-results-1.png?raw=true)<br />
    <br />
    Again, with the addition of Google Fonts, the Performance score dropped on the second test to 89%.<br />
    <br />
    ![image](https://github.com/cmikedev/sudoku/blob/main/assets/readme-images/lighthouse-game-results-2.png?raw=true)<br />
    <br />
    <br />
    * The front page full test results can be found [here](https://web.dev/measure/?url=https%3A%2F%2Fcmikedev.github.io%2Fsudoku%2F)<br />
    <br />
    
    * The game page full test results can be found [here](https://web.dev/measure/?url=https%3A%2F%2Fcmikedev.github.io%2Fsudoku%2Fgame.html)<br />
    <br />

## Bugs

### Console Errors (fixed)
* JavaScript is only called upon html items in the game.html page. However, a console error was appearing on the index.html page.<br />
<br />

![image](https://raw.githubusercontent.com/cmikedev/sudoku/main/assets/readme-images/console-error.png)<br />
<br />
* This error was due to the 'window.onload' call which was being applied to all pages.<br />
<br />

![image](https://raw.githubusercontent.com/cmikedev/sudoku/main/assets/readme-images/window-onload.png)<br />
<br>
* The fix was to ensure that the 'window.onload' event only occurred if the id being called actually existed on the html page. In the case of the id 'start-button', this only existed in 'game.html' so setting a conditional of 'True' solved the console error.<br />
<br />

![image](https://raw.githubusercontent.com/cmikedev/sudoku/main/assets/readme-images/window-onload-fix.png)<br />
<br />

### Board Replication (fixed)
* When the user starts a new game, they are able to select the 'Start Game!' button again and another board will generate below the one previously generated with an overlap. It is possible for a user to continue generating boards. The start game process does not recognise another board having already been generated.<br />
<br />

![image](https://raw.githubusercontent.com/cmikedev/sudoku/main/assets/readme-images/new-game-duplication.png)<br />
<br />

* This was fixed by removing the even listener from the start game button once the board had been loaded and then adding it back to the start game button when the game is reset.<br />
<br />

### Performance (unfixed)
* As in the testing section above, the use of Google Fonts and the background image both had a negative effect on the performance of the website. In real-world testing on other devices the website showed no sign of being adversely effected when being loaded. For that reason fixes or further optimization have not been applied to both of these elements for this release. They are being recorded as unfixed bugs as the potential for users to experience performance issues should the site be scaled up is noted.<br />
<br />

### Responsiveness (unfixed)
* As noted above, the responsiveness suffers on a screen width of less than 500 pixels. Even at larger screens the footer and title are off-set to the right of the main box. This comes down to a fundamental aspect of the design whereby the game board is 450 pixels (9x9 50 pixel squares) housing 45 divs created via JavaScript that is then positioned using percentages. To fix this issue would require a revision of the creation of the game board itself and is currently unfixed for this release.<br />
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

