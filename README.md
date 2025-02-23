# FULL-stack
A collection of full-stack projects showcasing frontend and backend development skills. Includes responsive interfaces, robust APIs, efficient databases, and live deployments. Built with technologies like ReactJS, Node.js, and MongoDB. Explore, learn, and contribute!

## Electric Car Website 🚗⚡
An interactive full-stack web application designed to showcase electric cars with a focus on modern design, user experience, and advanced animations. This project is built with a powerful tech stack to deliver seamless functionality across all pages.

![](https://github.com/username/repo-name/raw/main/video.mp4)


### 🌟 Features:
#### Frontend:
- **Home Page**: A visually appealing homepage with Spline animations and engaging content.
- **Login/Signup**: Secure user authentication to manage access.
- **Contact Page**: Allows users to get in touch with the team easily.
- **About Page**: Contains project details, including "Made by Aakash."
- **Search Functionality**: Enables users to search for electric cars.
- **Animations**: Interactive animations using Spline, synchronized with user actions like scrolling and cursor movement.

#### Backend:
- **User Authentication**: Managed with Supabase for secure and scalable authentication.
- **Database Management**: Stores and retrieves user and car data dynamically.
- **API Integration**: RESTful APIs for handling frontend-backend communication.

---

### 🛠 Tech Stack:
#### Frontend:
- **Framework**: React (TypeScript) with Vite for a blazing-fast development experience.
- **Styling**: Tailwind CSS for responsive and modern UI.
- **Animations**: Spline for 3D interactive animations.

#### Backend:
- **Database**: Supabase for user authentication and data storage.
- **API**: Custom API endpoints for seamless data flow between frontend and backend.

---

### 📜 Installation Guide:
Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AakashYd/electric-car-website.git
   cd electric-car-website
   
2. **Install dependencies**:
   ```bash
   npm install

3. **Setup environment variables**:
   
   - Create a .env file in the root directory.
   * Add your Supabase configuration:
   
   ```env
   VITE_SUPABASE_URL=<your-supabase-url>
   VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>

4. **Start the development server**:
   ```bash
   npm run dev

5. **View the application**:
   
   Open your browser and navigate to http://localhost:5173 .

# 🚀 Deployment:
This project can be deployed on platforms like Vercel, Netlify, or any other static hosting service for the frontend.  
For the backend, Supabase handles hosting and database management.

# 📂 Directory Structure:
```plaintext
  project-dixmwd
  ├── public                      # Static files
  ├── src                         # Frontend source code
  │   ├── components              # Reusable components
  │   ├── pages                   # Page-level components
  │   ├── assets                  # Images and icons
  │   ├── utils                   #  Helper functions
  │   └── styles                  # CSS and Tailwind files
  ├── supabase                    # Backend configuration files
  ├── package.json                # Project dependencies
  ├── vite.config.ts              # Vite configuration
  └── tailwind.config.js          # Tailwind CSS configuration
```

# 🤝 Contributing:
Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

