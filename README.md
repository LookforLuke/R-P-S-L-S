# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a site which looks to demonstrate the workings of JavaScript in the contaxt of a real world example.  The sight is aimed at those who are looking for an example of how to implement JavaScript ideas into a fun site, but also those looking for an exiting spin on the traditional game, those looking to honourably settle a dispute among friends, or those who want to kill some time playing a fun game. Rock Paper Scissors Lizard Spock is a fully responsive game allowing users to play the game popularised by 'The Big Bang Theory'.

![](assets/images/responsive.png)

## Features

**- Heading**

- The heading, featured at the top of the page, clearly and prominently displays the in a manner that is easy for the user to see. This also allows the user to locate the name of the game as soon as they view the page.
![](assets/images/Heading.png)

**- Game Area**

- This section allows the user to play the game.
- The icons allow the user to start the game, simply by clicking on them. Th icons are clear, and react when hovered over.
![](assets/images/Icons.png)

**- The choices area**

- this area shows the user what choice they and the computer have selected.
![](assets/images/uChoice.png) ![](assets/images/pcChoice.png)

**- The Results area**

- This area shows the user the results of the match.
![](assets/images/Winner.png)

### Features left to implement

- We will look to implement a score board in future, allowing the user to keep track of their record.

## Testing

- I tested that this page works in OperaGX, Chrome and Firefox.
- I have verified that the project is responsive, functional and looks good on all the standard screen sizes by using the devtools device toolbar.
- I confirmed that all text in each section is easy to read and understand.
- I tested the results are all correct and shopwing as they should be.

### Bugs

**Solved bugs**

- When initially coding the pcChoice, I noted that it was not logging correctly in the console.  
- I discovered this was due to incorrect syntax causing an error.
- once the syntax was corrected, this logged correctly.

- When I created the share results section of the main game function,  I found that the console was logging only tie's or wins.
- I discovered that this was becasue the inputs were both in text format, but that I was attempting to use modular maths to select the correct outcome.
- I added a function to convert the user and computer selections to the correctly associated numbers.
- This solved the issued and the correct outcome was being selected.

## Validator Testing

- HTML
  - No errors returned when passing all pages through the official W3C validator
- CSS
  - No errors returned when passing through the official Jigsaw Validator
- JavaScript
    - No errors returned when passing through the official Jshint validator
    - the following metrics were returned:
    - There are 6 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 0.
    - Largest function has 40 statements in it, while the median is 2.5.
    - The most complex function has a cyclomatic complexity value of 22 while the median is 1.5.
  
## Deployment

- The site was deployed to GitHub pages.
- from the GitHub repository, go to the settings tab
- from the code and automation section, select pages
- from the source dropdown section, select deploy from branch
- from the branch dropdown section, select main branch
- from here, click save. the page then provides the link to the completed website

the live link can be found here - https://lookforluke.github.io/R-P-S-L-S/