# McRamileux's Tech Blog
## 14th Challenge: Model-View-Controller (MVC) - Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

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
---- TO EDIT

## Links
- Github Repository: https://github.com/mcramileux/mcramileux-tech-blog
- Heroku Deployment: ---- TO EDIT

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
- MVC's Mini Project solved folder

## Acknowledgements and Credits
- Jacob Carver - weekly boot camp tutor
- AskBCS Learning Assistants
  
## Author
- © 2023 mcramileux 
  

