# MordOS

## Live Demo

https://mordos-dlabs.netlify.app/

## Screenshots

Login screen

[![screenshot1.png](https://i.postimg.cc/hvGKD9R0/screenshot1.png)](https://postimg.cc/7GjFXJ6C)

Desktop

[![screenshot2.png](https://i.postimg.cc/9Q01dzCN/screenshot2.png)](https://postimg.cc/XrMw3jZw)

[![screenshot3.png](https://i.postimg.cc/tTQ5G5PL/screenshot3.png)](https://postimg.cc/NyDT1Rd4)

[![screenshot4.png](https://i.postimg.cc/W3G7Nkwt/screenshot4.png)](https://postimg.cc/S2K9Vj5p)

Mobile

[![screenshot-6.png](https://i.postimg.cc/CL1bttXR/screenshot-6.png)](https://postimg.cc/Z0G9vfTm)

[![screenshot5.png](https://i.postimg.cc/4NLQxZVv/screenshot5.png)](https://postimg.cc/2VWZ0sH3)

## How to run

`git clone` clone project
`cd MordOS` enter directory
`npm install` or `yarn install` install dependencies
`npm start` or `yarn start` start project locally

## Project requirements

You have just received a Slack message from Pete, our salesperson.

Borgoth, a serial entrepreneur with a plethora of mostly failed ventures, has contacted us to work on
his new idea. You can find a short brief below:

Mord OS, the operating system to rule them all. Borgoth believes that most entrepreneurs and
managers in his line of work require a more tailored operating system. It is possible to work with all the
different tooling that is already available but the constant context switch is not productive and
staggers the flow of work. He firmly believes that it should be web based so it is virtually available
everywhere. At this stage it would serve as an internal tool for his company but he is willing to offer it
later as a premium, if it receives enough traction.

Your assignment is to create a graphical user interface for a web based operating system. That couldn’t
sound more wild than it actually is. This is an MVP so functionally it’ll be quite far from an OS but it
does need to look and feel like an OS, be appealing and fun to explore.

Borgoth, being the flaming venture demon, completely understands a lean approach and gives us our
full support. However, he believes some functionalities bring a lot of value:

Mord OS should support creating and managing plain text files and include a directory mechanic in
order to organize the files as one wishes.

There should be a simple authentication feature so not everyone can access the OS. A simple email
and password flow will do for now. (email: borgoth@mordos.com / pass: 12bindthem)

Borgoth hasn’t decided on the look and feel of it yet and he doesn’t want us to reinvent the wheel. The
OS should look familiar to other systems so it doesn’t create confusion. He did mention that the web
is flooded with generic things so no visual UI libraries should be used.

Other functionalities that are not as crucial but could really help enrich the OS:

To keep up with all the news and banter going on, the OS could include a dedicated reader app. (data
source: https://jsonplaceholder.typicode.com/comments)

Having a camera app seems like a must for any OS today.

It would be good if the OS had a Gallery app to view images from different sources without having to
switch. (data source: https://jsonplaceholder.typicode.com/photos , but can include others)
The OS could also have a web browser. Can be simple at first.

Borgoth isn’t limiting us on anything here:
You can enrich the experience as much as you want!

## Components description

App - depending on whether you are logged in, renders Desktop or Auth components

### Components folder

Applications folder
  
- [Browser](https://github.com/nebo19/MordOS/tree/main/src/components/applications/Browser) - renders a browser window with ability to search through the internet
  
- [Camera](https://github.com/nebo19/MordOS/tree/main/src/components/applications/Camera) - renders a camera window and opens your own camera from pc/phone
  
- [FileExplorer](https://github.com/nebo19/MordOS/tree/main/src/components/applications/FileExplorer) - renders file explorer window and shows all text files created
  
- [Gallery](https://github.com/nebo19/MordOS/tree/main/src/components/applications/Gallery) - renders gallery window with pictures fetched from external api
  
- [NewsFeed](https://github.com/nebo19/MordOS/tree/main/src/components/applications/NewsFeed) - renders news feed window with news fetched from external api
  
- [TextEditor](https://github.com/nebo19/MordOS/tree/main/src/components/applications/TextEditor) - renders text editor window to create text files

[Auth](https://github.com/nebo19/MordOS/tree/main/src/components/Auth) - login screen for authentication

[Desktop](https://github.com/nebo19/MordOS/tree/main/src/components/Desktop) - main screen after having logged in

[NavBar](https://github.com/nebo19/MordOS/tree/main/src/components/NavBar) - shows wish message, date and time at the top of the Desktop component

[Taskbar](https://github.com/nebo19/MordOS/tree/main/src/components/Taskbar) - renders icons at the bottom of the Desktop component which on click opens components from the applications folder

[Window](https://github.com/nebo19/MordOS/tree/main/src/components/Window) - all components renders inside this Window components. It has drag, resize, maximize, minimize properties

### Context folder

[AuthContext](https://github.com/nebo19/MordOS/tree/main/src/context/AuthContext.js) - athentication context for authenticating you from login screen and keeping track of authentication through whole website

[FileExplorerContext](https://github.com/nebo19/MordOS/tree/main/src/context/FileExplorerContext.js) - file explorer context for create, delete, overwrite text files and sorting them by sortBy property

[PositionContext](https://github.com/nebo19/MordOS/tree/main/src/context/PositionContext.js) - window position context so Window components don't render over each other

[WindowContext](https://github.com/nebo19/MordOS/tree/main/src/context/WindowContext.js) - window context for keeping track of what application is open

[ZIndexContext](https://github.com/nebo19/MordOS/tree/main/src/context/ZIndexContext.js) - zIndex context for showing Window components in focus

### Hooks folder

[useDate](https://github.com/nebo19/MordOS/tree/main/src/hooks/useDate.js) - hook for getting current date and time for Desktop and date created for text files

## Possible updates

## Project structure
