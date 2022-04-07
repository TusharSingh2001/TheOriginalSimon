# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tushar Singh**

Time spent: **10** hours spent in total

Link to project: (https://ethereal-happy-chungkingosaurus.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [yes] "Start" button toggles between "Start" and "Stop" when clicked. 
* [yes] Game buttons each light up and play a sound when clicked. 
* [yes] Computer plays back sequence of clues including sound and visual cue for each button
* [yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [yes] User wins the game after guessing a complete pattern
* [yes] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![https://recordit.co/TKI9SDq52z](gif1-link-here)
![https://recordit.co/6WoXdMMbJC](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Ans:
https://stackoverflow.com/
https://www.w3schools.com/


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
Ans:
One of the biggest challenges I encountered while creating the light and sound memory game was implementing the playable audio for all the 4 buttons in the game. At first, I was facing difficulties even in understanding which files out of html, CSS, and JavaScript am I supposed to add the audio links to. However, I constantly kept searching on websites like W3Schools, which ended up being pretty useful resources in overcoming this obstacle. Once I figured out where to add the audio links, another issue that I faced was not knowing how to implement playable audio files in Glitch, since I usually keep an assets folder(for placing image and sound files) for websites that make use of assets and then I just cite the relative/absolute path to the file. However, since content delivery is way different in Glitch mainly due to files not being stored in local storage, I had to directly reference the generated URL that was given to us by Glitch. In order to overcome this obstacle, I found some useful articles on the stack overflow website that helped me figure out how to access assets on Glitch. Next, I kept looking for more information on Stack Overflow and realized that all I had to do was to add the URL to the audio tag's property without any tags.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Ans:
Some of the questions I have after completing this light and sound game project are:
  - How does the implementation of backend work for more complex projects that make use of servers and utilise Maven?
  - How can the data structures and algorithms we learned in first year be applicable in developing web development projects?
  - What is the best way to do automated testing for the functionalities I implemented to identify bugs in my code and application?
  - What is the best way to structure your application as it gets confusing to maintain simple file structure when adding advanced functionalities to your project?
  - Which database scheme is utilised while creating sites that offer data storage?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Ans:
If I had some extra hours to work on this project, I would focus on implementing the optional features provided to us starting from changing the layout of the game to adding more features to the game in the form of playback speed on each turn and various difficulty levels in the game. In addition to this, I would have also tried creating the actual Simon game clock to give it a real look and would have put more emphasis on designing the outer background of the game. Some other functionalities I would have added to the game would be a leaderboard where users can view how they did in comparison to other players of the game. I would have also made my game friendly to all devices focusing on avoiding fixed quantities like screen width to ensure smooth playing experience for even mobile or tablet users.


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
