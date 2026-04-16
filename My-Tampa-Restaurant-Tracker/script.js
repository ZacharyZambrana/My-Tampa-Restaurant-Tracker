// ===== SAMPLE RESTAURANT DATA =====
const restaurantData = [
    {
        id: 1,
        name: "Bricks of Ybor",
        city: "Tampa",
        cuisine: "Italian",
        rating: 4,
        price: "$$",
        phone: "(813) 248-2497",
        address: "1910 E 7th Ave, Tampa, FL 33605",
        website: "https://www.bricksofybor.com",
        notes: "Authentic Italian cuisine in a historic Ybor City setting. Great pasta and wine selection.",
        image: "🍝"
    },
    {
        id: 2,
        name: "Impasto",
        city: "Tampa",
        cuisine: "Italian",
        rating: 5,
        price: "$$$",
        phone: "(813) 254-5373",
        address: "1812 W Kennedy Blvd, Tampa, FL 33606",
        website: "https://www.impastotampa.com",
        notes: "Outstanding Italian restaurant with fresh pasta made daily. South Tampa location.",
        image: "🍜"
    },
    {
        id: 3,
        name: "Salt Block",
        city: "Tampa",
        cuisine: "Mediterranean",
        rating: 4.5,
        price: "$$$",
        phone: "(813) 253-1030",
        address: "502 S Armenia Ave, Tampa, FL 33609",
        website: "https://www.saltblocktampa.com",
        notes: "Modern Mediterranean cuisine with fresh seafood. Located in Hyde Park.",
        image: "🐟"
    },
    {
        id: 4,
        name: "Sake Room",
        city: "Tampa",
        cuisine: "Asian",
        rating: 4.2,
        price: "$$",
        phone: "(813) 258-1916",
        address: "2124 W Kennedy Blvd, Tampa, FL 33606",
        website: "https://www.sakeroom.com",
        notes: "Japanese sushi and ramen with great sake selection. South Tampa.",
        image: "🍣"
    },
    {
        id: 5,
        name: "El Tipico",
        city: "Tampa",
        cuisine: "Mexican",
        rating: 4.1,
        price: "$",
        phone: "(813) 243-8862",
        address: "2207 E 7th Ave, Tampa, FL 33605",
        website: "https://www.eltipico.com",
        notes: "Authentic Mexican cuisine with homemade tortillas. Ybor City location.",
        image: "🌮"
    },
    {
        id: 6,
        name: "Oysterbox Seafood",
        city: "Tampa",
        cuisine: "American",
        rating: 4.3,
        price: "$$$",
        phone: "(813) 250-1555",
        address: "409 S Armenia Ave, Tampa, FL 33609",
        website: "https://www.oysterbox.com",
        notes: "Fresh seafood and raw bar in a casual atmosphere. Hyde Park.",
        image: "🦪"
    },
    {
        id: 7,
        name: "Casa Juancho",
        city: "Miami",
        cuisine: "Spanish",
        rating: 4.4,
        price: "$$$",
        phone: "(305) 642-2344",
        address: "2436 SW 8th St, Miami, FL 33135",
        website: "https://www.casajuancho.com",
        notes: "Upscale Spanish cuisine in Little Havana. Excellent paella and tapas.",
        image: "🥘"
    },
    {
        id: 8,
        name: "Juvia Miami",
        city: "Miami",
        cuisine: "Mediterranean",
        rating: 4.6,
        price: "$$$",
        phone: "(305) 577-0027",
        address: "1111 Lincoln Rd, Miami Beach, FL 33139",
        website: "https://www.juviamia.com",
        notes: "Pan-Latin and Mediterranean fusion dining on Lincoln Road.",
        image: "🍽️"
    },
    {
        id: 9,
        name: "Stubborn Seed",
        city: "Miami",
        cuisine: "American",
        rating: 4.5,
        price: "$$$",
        phone: "(305) 531-7555",
        address: "47 SW 11th St, Miami, FL 33130",
        website: "https://www.stubbornseeddining.com",
        notes: "Contemporary American cuisine by Chef Jeremy Ford in Wynwood.",
        image: "🥩"
    },
    {
        id: 10,
        name: "Vizcaya Restaurant",
        city: "Miami",
        cuisine: "Asian",
        rating: 4.3,
        price: "$$",
        phone: "(305) 381-9595",
        address: "4199 NE 2nd Ave, Miami, FL 33137",
        notes: "Vietnamese and Asian cuisine in the Design District.",
        image: "🍲"
    }
];

// ===== NAVBAR MOBILE TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar_menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar_links');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });

    // Initialize restaurants on read page
    if (document.getElementById('restaurantsContainer')) {
        renderRestaurants(restaurantData);
    }

    // Add event listeners for filters
    const searchInput = document.getElementById('searchInput');
    const cityFilter = document.getElementById('cityFilter');
    const cuisineFilter = document.getElementById('cuisineFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterRestaurants);
    }
    if (cityFilter) {
        cityFilter.addEventListener('change', filterRestaurants);
    }
    if (cuisineFilter) {
        cuisineFilter.addEventListener('change', filterRestaurants);
    }

    // Form submission handlers
    const restaurantForm = document.getElementById('restaurantForm');
    if (restaurantForm) {
        restaurantForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit('create');
        });
    }

    const updateForm = document.getElementById('updateRestaurantForm');
    if (updateForm) {
        updateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit('update');
        });
    }
});

// ===== RENDER RESTAURANTS =====
function renderRestaurants(restaurants) {
    const container = document.getElementById('restaurantsContainer');
    if (!container) return;

    container.innerHTML = '';

    if (restaurants.length === 0) {
        container.innerHTML = '<div class="no_results"><p>No restaurants found. Try adjusting your filters.</p></div>';
        return;
    }

    restaurants.forEach(restaurant => {
        const ratingStars = '⭐'.repeat(Math.round(restaurant.rating));
        const card = document.createElement('div');
        card.className = 'restaurant_card';
        card.innerHTML = `
            <div class="restaurant_image">${restaurant.image}</div>
            <div class="restaurant_info">
                <h3>${restaurant.name}</h3>
                <div class="restaurant_meta">
                    <p><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
                    <p><i class="fas fa-utensils"></i> ${restaurant.cuisine}</p>
                    <p class="restaurant_rating">${ratingStars} ${restaurant.rating.toFixed(1)}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${restaurant.price}</p>
                    <p><i class="fas fa-phone"></i> ${restaurant.phone}</p>
                </div>
                <p style="font-size: 0.9rem; color: #999; margin-top: 10px;">${restaurant.notes}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// ===== FILTER RESTAURANTS =====
function filterRestaurants() {
    const searchInput = document.getElementById('searchInput');
    const cityFilter = document.getElementById('cityFilter');
    const cuisineFilter = document.getElementById('cuisineFilter');

    const searchTerm = searchInput?.value.toLowerCase() || '';
    const selectedCity = cityFilter?.value || '';
    const selectedCuisine = cuisineFilter?.value || '';

    const filtered = restaurantData.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) ||
                            restaurant.cuisine.toLowerCase().includes(searchTerm);
        const matchesCity = !selectedCity || restaurant.city === selectedCity;
        const matchesCuisine = !selectedCuisine || restaurant.cuisine === selectedCuisine;

        return matchesSearch && matchesCity && matchesCuisine;
    });

    renderRestaurants(filtered);
}

// ===== FORM SUBMISSION HANDLER =====
function handleFormSubmit(action) {
    const formData = new FormData(
        action === 'create' 
            ? document.getElementById('restaurantForm')
            : document.getElementById('updateRestaurantForm')
    );

    const newRestaurant = {
        id: restaurantData.length + 1,
        name: formData.get('restaurantName'),
        city: formData.get('city'),
        cuisine: formData.get('cuisineType'),
        rating: parseFloat(formData.get('rating')),
        price: formData.get('priceRange'),
        phone: formData.get('phoneNumber'),
        address: formData.get('address'),
        website: formData.get('website'),
        notes: formData.get('notes'),
        image: '📍'
    };

    if (action === 'create') {
        restaurantData.push(newRestaurant);
        alert(`✅ "${newRestaurant.name}" has been added to your restaurant tracker!\n\nIn the final version, this would be saved to the database.`);
        document.getElementById('restaurantForm').reset();
    } else {
        alert(`✅ "${newRestaurant.name}" has been updated!\n\nIn the final version, these changes would be saved to the database.`);
        document.getElementById('updateRestaurantForm').reset();
    }
}

// ===== NO RESULTS STYLING =====
const style = document.createElement('style');
style.textContent = `
    .no_results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        background: #f9f9f9;
        border-radius: 10px;
    }
    
    .no_results p {
        font-size: 1.1rem;
        color: #999;
    }
`;
document.head.appendChild(style);
