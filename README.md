# Stack Website

[Stack](https://stack-block.netlify.app/)
![Stack](https://i.ibb.co/LCfhR7w/Stack-1.png)

## Overview

In this project, the goal is to create a simple website with a focus on performance, maintainability, and a sleek user interface. The front-end design will leverage the Tailwind CSS library, and all API calls will be implemented using Redux Toolkit Query (RTK Query). The entire website state will be managed using the Redux toolkit.

## Key Objectives

1. _Sign-in & Signup Page Design:_
   Create visually appealing sign-in and signup pages using Tailwind CSS. Implement authentication with password strength checks during user registration.

2. _Users Table:_
   Display user information through a table. Utilize RTK Query for efficient API calls to handle user retrieval, addition, editing, and deletion. Implement pagination for improved user list data handling.

3. _API Integration:_
   Implement all APIs using Redux Toolkit Query (RTK Query) for efficient data management. This includes API calls for user authentication, retrieval, addition, editing, and deletion.

4. _Private Route:_
   Implement private routes for the users' page, restricting access until the user signs in or registers.

5. _Public Route:_
   Set up public routes for the signin and signup pages, allowing access only when the user is not logged in.

6. _Folder Structure:_
   Maintain a well-structured project folder hierarchy to keep the codebase organized and easily maintainable. Components, Redux slices, styles, and utility functions will be neatly organized.
7. _Form Validation:_
   Validate all form inputs across the entire website using the "yup validator" with react-hook-form.

## Technology Stack

- _Language:_ Typescript
- _Frontend Library:_ React
- _Styling:_ Tailwind CSS
- _State Management:_ Redux Toolkit with RTK Query
- _Form Handling:_ React-hook-form
