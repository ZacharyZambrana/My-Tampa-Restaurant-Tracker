# My Tampa Restaurant Tracker

A static frontend website prototype for tracking and rating restaurants in Tampa. This project demonstrates website design, CRUD functionality, data visualization, and AI chatbot integration.

## 📋 Project Overview

This static website serves as a prototype for a restaurant tracking application where you and your girlfriend can log, rate, and review restaurants you've visited together in Tampa. The application organizes restaurants by:
- **City**: Downtown Tampa, Hyde Park, South Tampa, Ybor City, New Tampa
- **Cuisine Type**: Italian, Asian, Mexican, Mediterranean, American, French, Spanish
- **Rating**: 1-5 stars
- **Price Range**: $ (Budget) to $$$$ (Fine Dining)
- **Images**: Photos of restaurants or dishes

## 🗂️ Project Structure

```
My-Tampa-Restaurant-Tracker/
├── index.html              # Home page with project intro and CRUD buttons
├── read.html               # View all restaurants with filters
├── create.html             # Form to add new restaurants
├── update.html             # Form to update restaurant information
├── delete.html             # Interface to delete restaurants
├── visualizations.html     # Interactive charts (Chart.js)
├── about.html              # Team info and logical data model
├── mybot.html              # Botpress AI chatbot integration
├── styles.css              # Responsive CSS styling
├── script.js               # JavaScript for interactivity
└── README.md               # Project documentation
```

## 📄 Pages Included

### 1. **Home Page (index.html)**
- Project title and description
- Feature highlights (6 cards)
- CRUD operation buttons (Create, Read, Update, Delete)
- Responsive design for all devices

### 2. **View Restaurants (read.html)**
- Display all restaurants in a grid
- Filter by name/search
- Filter by city
- Filter by cuisine type
- Individual restaurant cards with details

### 3. **Add Restaurant (create.html)**
- Form to add new restaurants
- Fields: Name, City, Cuisine, Rating, Price, Address, Phone, Website, Notes, Image URL
- Form validation
- Submit button connects to backend (in final version)

### 4. **Update Restaurant (update.html)**
- Dropdown to select restaurant
- Pre-filled form with existing data
- Update any field and submit
- Changes saved to database (in final version)

### 5. **Delete Restaurant (delete.html)**
- List of restaurants to delete
- Confirmation dialog before deletion
- Shows restaurant details (City, Cuisine, Rating)
- Delete button with confirmation

### 6. **Visualizations (visualizations.html)**
- **6 Interactive Charts using Chart.js:**
  1. Restaurants by Rating (Bar Chart)
  2. Distribution by Cuisine Type (Doughnut Chart)
  3. Price Range Distribution (Horizontal Bar Chart)
  4. Restaurants by City (Bar Chart)
  5. Visit Frequency Over Time (Line Chart)
  6. Average Rating by Cuisine (Bar Chart)
- Summary statistics (Total restaurants, Average rating, etc.)
- Responsive chart layout

### 7. **About Us (about.html)**
- Team member profiles
- Project purpose and goals
- **Logical Data Model** with three tables and relationships
- Technologies used
- GitHub repository link

### 8. **Chatbot (mybot.html)**
- Botpress AI chatbot integration
- Instructions for setting up the bot
- Example questions
- Data model overview

## 🎨 Design Features

### Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)

### Color Scheme
- Primary: `#ce4c3a` (Red-Orange)
- Secondary: `#f78c6b` (Light Orange)
- Dark: `#1a1a1a` (Dark Gray)
- Light: `#f9f9f9` (Light Gray)

## ✅ Features Implemented

✅ Navigation Bar with responsive mobile menu
✅ CRUD Operations (Create, Read, Update, Delete)
✅ Search and filtering functionality
✅ 6 interactive Chart.js visualizations
✅ Logical data model with primary/foreign keys
✅ Form validation and submission
✅ Responsive design for all devices
✅ Botpress chatbot integration setup

## 📊 Sample Data

8 sample restaurants included with full details:
- Bricks of Ybor (Italian, Ybor City)
- Impasto (Italian, South Tampa)
- Salt Block (Mediterranean, Hyde Park)
- Cafe Escada (Mediterranean, Downtown)
- Ceviche Tapas Bar (Spanish, Ybor City)
- Sake Room (Asian, South Tampa)
- El Tipico (Mexican, Ybor City)
- Oysterbox Seafood (American, Hyde Park)

## 🤖 Botpress Chatbot Setup

1. Create account at https://botpress.com/
2. Create table with 10+ restaurants
3. Build knowledge base from data
4. Create workflow (Start → Autonomous Node)
5. Enable knowledge search
6. Publish and embed script in mybot.html

## 🛠️ Technologies

- HTML5
- CSS3 (Flexbox, Grid, Responsive)
- JavaScript
- Chart.js
- Botpress AI
- Font Awesome Icons

## 🚀 How to Run

1. Clone the repository
2. Open `index.html` in your browser
3. Explore all pages and features
4. Test filters and forms

## 📱 Responsive Breakpoints

- Mobile: ≤480px
- Tablet: 481px - 768px
- Desktop: ≥769px

## 👥 Team

- **Zach**: Project Lead & Full Stack Developer
- **Lauren**: Product Manager & Business Analyst

## 📝 Assignment Requirements Met

✅ Website design with meaningful domain
✅ All required pages included
✅ 6 interactive Chart.js visualizations
✅ CRUD operations with navigation
✅ Logical data model (>2 one-to-many relationships)
✅ Fully responsive design
✅ Botpress chatbot integration

## 🔮 Future Enhancements

- Backend API integration
- Database for persistent storage
- User authentication
- Real chatbot deployment
- Photo upload functionality
- Advanced search features
- Mobile app version

---

**Status**: Static Prototype Complete ✅
**Class**: ISM 6225 Application Development for Analytics
**University**: University of South Florida
