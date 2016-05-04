# What is Fitness Food Tracker?

Fitness Food tracker is an app that allows users to create, store, and recall meals with access to a database of over 8000 foods. The nutritional information in the foods table was distributed by the USDA. Foods have attributes of a description, grams per serving, calories per serving, carbs, monosaturated fats, polysaturated fats, saturated fats, sugars, protein, sodium, cholesterol, and fiber.

# Technologies Used

Front End:
 - Javascript
 - HTML
 - CSS
 - Jquery
 - Handlebars.js
 
 Back End:
 - Ruby on Rails

# Database Structure

There are four tables:
  - Users
  - Meals
  - Meal_items
  - Foods
    
  Users have many meals. Meals have many foods through meal_items. 
    
# Wire Frames

[link] (https://app.moqups.com/louarnos/7K1jE6OVH6/view)

# User Stories

- As a user I want to be able to search the database and see all entries containing keywords like “chicken"
- As a user I want to be able to see my last 5 meals
- As a user I want to be able to see my meals from a given date
- As a user I want to have an ideal macronutrient breakdown and see if my meal meets the ideal

# Next Step

- Make the foods table searchable by keyword
- Make meals searchable by name
- Make meals searchable by date
- Create an calorie goal calculator based on users age, weight, gender, etc. with designated macronutrients breakdown
- Graph macronutrients of a given meal or day, and compare against goal designated by calculator. 
- Total calories and macros for a given day.
