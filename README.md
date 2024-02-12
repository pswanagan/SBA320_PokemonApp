Project Name: Pokémon App

Technologies Used

This project is built with:

React: A JavaScript library for building user interfaces. React is used for creating reusable UI components.

Axios: A promise-based HTTP client for the browser and node.js. Axios is used for making API requests to the PokéAPI.

PokéAPI: An external API providing data about Pokémon. This project fetches Pokémon data including names, abilities, and other characteristics.

CSS: For styling the components and providing a responsive design.

Approach Taken

The application is structured around several key React components, each responsible for a specific part of the UI and functionality:

App.jsx: The main component that initializes the application, manages state for Pokémon data, and renders subcomponents.

PokemonFilteredTable.jsx: A component that integrates a search bar and a table to display filtered Pokémon data.

PokemonTable.jsx: Displays a table of Pokémon, allowing for filtering based on search criteria.

PokemonRow.jsx: Represents a single row in the Pokémon table, displaying data for an individual Pokémon.

SearchBar.jsx: Provides input fields for filtering Pokémon by name or type.

The application fetches data from the PokéAPI and allows users to filter Pokémon by name and type, utilizing React's state and effect hooks to manage data and render updates to the UI dynamically.

Live Site

You can access the live version of the Pokémon App here: https://cozy-biscotti-dd8994.netlify.app/

Usage Instructions

To run the Pokémon Explorer locally:

Github repository: https://github.com/pswanagan/SBA320_PokemonApp

Clone the repository to your local machine.

Navigate to the project directory.

Install the dependencies with npm install.

Start the development server with npm start.

Open your browser and go to http://localhost:3000 to view the application.

Unsolved Problems

Performance Optimization: Currently, the application fetches individual Pokémon details on demand, which can lead to performance bottlenecks. Future improvements could include caching strategies or server-side rendering.

Advanced Filtering: The current version supports basic filtering by name and type. Expanding the filtering capabilities to include other criteria (e.g., abilities, stats) is a potential enhancement.

Responsive Design: While basic CSS is applied, the UI could be improved for better responsiveness across different devices and screen sizes.

Created By: Pavielle Swanagan