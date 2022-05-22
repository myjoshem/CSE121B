/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const fullName = 'Michelle Markham';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('figcaption').textContent = `Name: ${fullName}`;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const profileImage = 'images/profile.jpg';
const profileAlt = "My Profile Picture and then my alarm goes off."

// Step 6: copy your image into the "images" folder
//Done
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', profileImage);
document.querySelector('img').setAttribute('alt', profileAlt);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let faveFoods = ['Korean', 'Mexican', 'taco', 'Tommys chili burger'];

// Step 2: place the values of the favorite foods variable into the HTML file
const food = document.querySelector('#food');
food.innerHTML = faveFoods.join(', ');

// Step 3: declare and instantiate a variable to hold another favorite food
const oohMoreFood = 'Chocolate';

// Step 4: add the variable holding another favorite food to the favorite food array
faveFoods.push(oohMoreFood);

// Step 5: repeat Step 2
food.innerHTML = faveFoods.join(', ');

// Step 6: remove the first element in the favorite foods array
faveFoods.shift();

// Step 7: repeat Step 2
food.innerHTML = faveFoods.join(', ');

// Step 8: remove the last element in the favorite foods array
faveFoods.pop();

// Step 7: repeat Step 2
food.innerHTML = faveFoods.join(', ');