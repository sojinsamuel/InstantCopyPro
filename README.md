# InstantCopyPro
A simple web application that generates content based on a user-specified query.

## Features
- Accepts a user-specified query and generates content based on that query
- Allows the user to specify the number of words they want in the generated content
- Renders the generated content as Markdown
- Provides a slider to adjust the number of words in the generated content
- Allows the user to copy the generated content to their clipboard with a single click
- Displays a loading spinner while the content is being generated

## Technologies
This project was built with the following technologies:
*  [React](https://reactjs.org/) for the frontend.
* [Marked](https://marked.js.org/) for rendering Markdown
* [RC Slider](https://www.npmjs.com/package/rc-slider) for the slider component

## Setup
1. Clone this repository to your local machine:
    ```
    git clone https://github.com/sojinsamuel/InstantCopyPro.git
    ```
2. Navigate to the root directory of the project and install the dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm run dev
    ```
4. Open a web browser and go to http://localhost:5173 to view the application.

**NOTE:** The OpenAI API key used in this project has been removed for the purpose of preserving the privacy of the user who originally created the API key. If you wish to try out this project, you can simply replace the text `OPEN_AI_API_KEY` in the `FetchContent.js` file under `src` directory with your own API key. This will allow you to use the project as intended. Please note that an API key is necessary for the proper functioning of the project.
You can sign up for an API key at the [OpenAI Developer Portal](https://beta.openai.com/signup/)
