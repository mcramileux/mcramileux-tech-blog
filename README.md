# McRamileux's Tech Blog
## 14th Challenge: Model-View-Controller (MVC) - Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
- A CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. This application followed the MVC paradigm in its architectural structure, using Handlebars.js as the front-end template language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
- [McRamileux's Tech Blog](#mcramileuxs-tech-blog)
  - [14th Challenge: Model-View-Controller (MVC) - Tech Blog](#14th-challenge-model-view-controller-mvc---tech-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage and Screenshots](#usage-and-screenshots)
  - [Links](#links)
  - [Contributions](#contributions)
  - [License](#license)
  - [Questions](#questions)
  - [Reference](#reference)
  - [Acknowledgements and Credits](#acknowledgements-and-credits)
  - [Author](#author)

## Technologies Used
* Handlebars
* CSS
* Javascript
* Node.JS
* MySQL
* Bootstrap
* Express.JS

## Installation
- Navigate to this [repository](https://github.com/mcramileux/mcramileux-tech-blog).
- Open your terminal on your local machine and clone the repository.
- To install the package dependencies, run the following command in the terminal.
  ```md
  npm i 
  ```
- Create an .env file to insure the root directory of the application. Once done, fill up the following information needed for security purposes:
  ```md
  DB_NAME='techBlog_db'
  DB_PASSWORD='your MySQL password'
  DB_USER='your MYSQL username''
  ```
-  Run the command to open the mysql shell:
  ```md
  mysql -u root -p
  ```
- Enter your secured password as the terminal will prompt this question.
- Then run this command to create and present the database:
  ```md
  source schema.sql;
  ```
- To create the tables and its relationships to the application, run this step:
  ```md
  npm run seed
  ```
- Open the server file to run this command from the application root directory
  ```md 
  npm run start
  ```

## Usage and Screenshots
- Homepage:
- <img width="1332" alt="homepage" src="https://github.com/mcramileux/mcramileux-tech-blog/assets/122607160/8e86c05c-993f-44d4-b1fe-90532b359fef">
- Login:
- <img width="1015" alt="login" src="https://github.com/mcramileux/mcramileux-tech-blog/assets/122607160/ce8b149f-3f15-413b-a9b5-a3aec57b2a8b">
- Signup:
- <img width="1015" alt="signup" src="https://github.com/mcramileux/mcramileux-tech-blog/assets/122607160/e0c56359-a84a-44f2-81c8-85ab79d0d305">
- New blog:
- <img width="1416" alt="new-blog" src="https://github.com/mcramileux/mcramileux-tech-blog/assets/122607160/36a504a6-3ab1-4a15-b8cb-5926f5fb3142">
- With comment:
- <img width="1235" alt="with-comment" src="https://github.com/mcramileux/mcramileux-tech-blog/assets/122607160/54fe249c-20ec-48f2-b69f-4e86ef18c2a0">

## Links
- Github Repository: https://github.com/mcramileux/mcramileux-tech-blog
- Heroku Deployment: https://still-headland-43283-de293bb87f62.herokuapp.com/

## Contributions
* Contributions to this project won't be accepted as this is the reflection of the author's work hence the following questions and answers. Furthermore, forking or creating a pull request is acceptable.

## License
This project is under [MIT](https://choosealicense.com/licenses/mit/) license.

## Questions
* For more questions or inquiries, please contact the author at [GitHub](https://github.com/mcramileux) or email kristineramilo21@gmail.com.

## Reference
- [Node.js](https://nodejs.org/en) 
- [MySQL](https://www.mysql.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [.gitignore](https://github.com/jpd61/mvc-tech-blog/blob/master/.gitignore)
- MVC's Mini Project solved folder as starter code
- Second Group Project as starter code
- Mock up example photo as guide to create this blog site

## Acknowledgements and Credits
- Jacob Carver - weekly boot camp tutor
- AskBCS Learning Assistants
  
## Author
- © 2023 mcramileux 