# Content Showcase Application

The Content Showcase Application is a Proof of Concept (PoC) designed to demonstrate how publications—such as blog articles, case studies, brochures, and ebooks—can be dynamically displayed and filtered through a user-friendly interface. The application connects with an external API that supports pagination and OAuth, enabling users to search and view various content types in an organized manner.

## Features
- Display of content (publications) like blog posts, case studies, etc.
- Search and filter functionality for easy navigation through publications.
- OAuth authentication for secure access to the API.
- Pagination support to manage large datasets.
- Responsive design using Styled Components.

## Tech Stack
- **Vite**: For fast development builds.
- **React**: For building the UI components.
- **TypeScript**: To ensure type safety.
- **Styled Components**: For component-level styling.
- **Jest**: For unit testing.
- **Flaticon**: Flag icons created by [Freepik](https://www.flaticon.com/free-icons/flag?k=1730304050426&sign-up=google).
- **Material UI**: For icons and additional UI components. [Material Icons](https://mui.com/material-ui/material-icons/)

## Project Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14.x or above)
- npm

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MasindeOdera/content-showcase.git
   cd content-showcase-app

2. **Modify .env.example**
   - Open the .env.example file located in the root of the project.
   - Replace YOUR-CLIENT-ID and YOUR-CLIENT-SECRET with your actual API credentials.
   - Save the file as .env (removing the .example extension).


3. **Install dependencies**
   ```bash
   npm install

4. **Run the Application**
   ```bash
   npm run dev

5. **Run Unit Tests**
   ```bash
   npm run test
