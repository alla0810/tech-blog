# Tech Blog
  * Author: Kyosook Shin
  * Author's Email: kyosook.shin@gmail.com  
  * GitHub: https://github.com/alla0810/tech-blog
  
  * screenshot  

<img src='./images/screen1.png' width="800">  
<img src='./images/screen2.png' width="800">
<img src='./images/screen3.png' width="800">  
<img src='./images/screen4.png' width="800">  
<img src='./images/screen5.png' width="800">  


## Usage
* After downloading, you can run this program on your local machine by following the procedure below:
1. Get into your mysql account by running `mysql -u <username> -p`, and insert your mysql password after prompting.
2. On another terminal, run `source <source code path>\db\schema.sql` to initialize database.
3. Inside the same terminal, run `npm run seed` for seeding the database table.
4. At the same terminal, run `nodemon server.js` to run the backend server for tech-blog.
5. On an internet browser, type in the URL `localhost:3001`.
6. You're ready to go!


## Source Code References
  This project has used some reference codes from the following sites

   * https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-07-2023-U-LOLC.git   

   
## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinios


## Acceptance Criteria

GIVEN a CMS-style blog site

* WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in 

* WHEN I click on the homepage option, THEN I am taken to the homepage

* WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in

* WHEN I choose to sign up, THEN I am prompted to create a username and password

* WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site

* WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password

* WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out

* WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

* WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator's username, and date created for that post and have the option to leave a comment

* WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator's username, and the date created

* WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

* WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post.

* WHEN I click on the button to create a new post, THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

* WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard

* WHEN I click on the logout option in the navigation, THEN I am signed out of the site

* WHEN I am idle on the site for more than a set time, THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts.


## Mock-Up
The following animations show examples of the application's API routes being tested in Insomnia Core.
The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

<img src='./images/13-orm-homework-demo-01.gif' width="800" >

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

<img src='./images/13-orm-homework-demo-02.gif' width="800" >

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

<img src='./images/13-orm-homework-demo-03.gif' width="800" >

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core.

## Getting Started
You'll need to use the MySQL2 and Sequelize packages to connect to your Express.js API to a MySQL database and the dotenv package to use environment variables to store sensitive data, like your MySQL username, password, and database name.
Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands.  Use environment variables to store sensitive data, like your MySQL username, password, and database name.

## Database Models

Your database should contain the following four models, including the requirements listed for each model:

* `Category`  
  * `id`
  * Integer  
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `category_name`  
  * String  
  * Doesn't allow null values

* `Product`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `product_name`  
  * String  
  * Doesn't allow null values  
  * `price`  
  * Decimal
  * Doesn't allow null values  
  * Validates that the value is a decimal
  * `stock`  
  * Integer
  * Doesn't allow null values  
  * Set a default value of 10  
  * Validates that the value is numeric
  * `category_id`  
  * Integer
  * References the `category` model's `id`
  

* `Tag`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `tag_name`  
  * String  

* `ProductTag`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `product_id`  
  * Integer  
  * References the `product` model's `id`
  * `tag_id`  
  * Integer  
  * References the `tag` model's `id`


## Associations
You'll need to execute association methods on your Sequelize models to create the following relationships between them:
* `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.
* `Category` has many `Product` models.
* `Product` belongs to many `Tag` models.  Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.
* `Tag` belongs to many `Product` models.

Make sure you set up foreign key relationships that match the column we created in the respective models.

## Fill Out the API Routes to Perform RESTfull CRUD Operations
Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

Be sure to look at your module project's code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

## Seed the Database
After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

## Sync Sequelize to the Database on Server Start
Create the code needed in `server.js` to sync the Sequlize models to the MySQL database on server start.


## Delierables: 10%
* Your GitHub repository containing your application code.

## Walkthrough Video: 37%
* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your README file
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how to create the schema from the MySQL shell.
* The walkthrough video must demonstrate how to seed database from the command line.
* The walkthrough video must demonstrate how to start the application's server.
* The walkthrough video must demonstrate GET routes for al categories, all products, and all tags being tested in Insomnia Core.
* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.
* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

## Technical Acceptance Criteria: 40%
* Satisfies all of the preceding acceptance criteria plus the following:  
  * Uses the MySQL2 and Sequlize packages to connect to a MySQL database.
  * Uses the dotenv package to use environment variables to store sensitive data, like a user's MySQL username, password, and database name.
* Sync Sequelize models to a MySQL database on the server start.
* Includes column definitions for all four models outlined in the Challenge instructions.
* Includes model associations outlined in the Challenge instructions.

## Repository Quality: 13%
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, high-quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README file with description, a link to a walkthrough video.

