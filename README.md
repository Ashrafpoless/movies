# 🎬 **Movie App**

A dynamic and responsive web application for exploring and discovering movies and TV shows using **The Movie Database (TMDb) API**. Users can search, view details, and manage their favorite movies and TV shows seamlessly.

---

## 🟢 **Features**

- 🔍 Search for Movies, TV Shows, and People
- 🌟 View Popular, Top Rated, Upcoming, and Now Playing Movies
- 🎥 Explore TV Shows and Trending Content
- ❤️ Add/Remove Favorites with Local Storage Persistence
- 🗂️ Pagination for Smooth Navigation
- 🟢 Responsive Design for Mobile and Desktop
- 🚀 Built with React, Vite, CSS, Axios, 

---

## 🛠 **Tech Stack**

- **Frontend:** React, Vite, CSS 
- **API:** [TMDb API](https://www.themoviedb.org/documentation/api)
- **State Management:** React Hooks
- **Styling:**  CSS
- **Package Manager:** npm

---

## ⚙️ **Getting Started**

### 1️⃣ **Prerequisites**
Ensure you have **Node.js** and **npm** installed on your system.  
[Download Node.js](https://nodejs.org/)

---

### 2️⃣ **Clone the Repository**
```bash
git clone https://github.com/Ashrafpoless/movies
cd movies
```
3️⃣ Install Dependencies
```
npm install
```

4️⃣ Set Up Environment Variables

Create a .env file in the root directory and add your TMDb API Key:

``` bash    
VITE_API_KEY=YOUR_TMDB_API_KEY
VITE_API_URL=https://api.themoviedb.org/3
```
5️⃣ Run the App

 Start the development server:

 ```
 npm run dev
 ```
 Visit http://localhost:5173 to view the app in your browser.

🚀 Scripts

| Command         | Description                  |
| :-------------- | :---------------------------:| 
| npm run dev     | Start development server     | 
| npm run build   | Build the app for production | 
| npm run preview | Preview the production build | 

🌟 Usage
1. Search for movies, TV shows, or people using the search bar.

2. View detailed information about movies, TV shows, and actors.

3. Add movies and TV shows to your favorites list.

4. Navigate through multiple pages using pagination.

5. Enjoy your personalized movie collection!

🎥 Project Structure
```
src/
├── Api
│   ├── moviesApi.js          # API Calls
├── assets
├── components
│   ├── MovieCard.jsx         # Movie Component
│   ├── layout.jsx            # Loading Spinner
│   ├── missing.jsx           # Loading Spinner
│   ├── nav.jsx               # Navbar  
│   ├── Footer.jsx            # Footer
├── pages
│   ├── Home.jsx              # Home Page
│   ├── TopRated.jsx          # TopRated Page
│   ├── Popular.jsx           # Popular Page
│   ├── TVShow.jsx            # TV Shows Page
│   ├── Person.jsx            # Actors Page
│   ├── Favorites.jsx         # Favorites Page
│   ├── About.jsx             # about Page
├── context
│   ├── movieContext.jsx      # Context for State Management
└── App.jsx                   # Main App Component
```
📜 API Endpoints Used
1. Popular Movies: /movie/popular

2. Search Movies: /search/movie

3. Popular TV Shows: /tv/popular

4. Search TV Shows: /search/tv

5. Popular People: /person/popular

6. Search People: /search/person

📝 Known Issues & Future Improvements
- 🟠 Implement better error handling for API responses.

- 🟠 Add sorting and filtering options for search results.

- 🟠 Improve UI/UX with animations and transitions.

- 🟠 Implement user authentication for personalized lists.

💻 Contributing
Contributions are welcome!

1. Fork the project.

2. Create a new branch: git checkout -b feature/YourFeature

3. Commit changes: git commit -m "Add your feature"

4. Push the branch: git push origin feature/YourFeature

5. Open a pull request.

🌟 Acknowledgments

Special thanks to The Movie Database (TMDb) for providing the API.
This product uses the TMDb API but is not endorsed or certified by TMDb.

