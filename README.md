# Dealio 

---

**Dealio** is a mobile-first application designed to help young users find fast food discounts near their current location. It aggregates active promotions from major chains such as Burger King and McDonald's, providing a convenient way to discover nearby deals.

This project is being developed as part of a full-stack architecture separation. The backend is developed independently and consumed by the mobile frontend.

---

## Features

- **Fast Food Promotions API**  
  Exposes a RESTful API that returns current promotions and discounts available at major fast food chains.


- **Web Scraping Integration**  
  Periodically scrapes public promotional pages of selected food chains to collect up-to-date deals, following best practices and ethical guidelines.


- **Geolocation Filtering**  
  Returns promotions filtered by proximity, helping users discover relevant offers around their current location.


- **Scalable Architecture**  
  Built with scalability and maintainability in mind, ensuring clean separation of concerns and modular structure.

---

## Tech Used

- **Node.js** with **NestJS** (TypeScript) for backend development  
- **PostgreSQL** as database with **Supabase**
- **TypeORM** for database interaction  
- **Cheerio** or **Puppeteer** for web scraping

---

## Contributing

We welcome contributions! If you'd like to improve or add features to the project, feel free to fork the repository and create a pull request.

To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request describing your changes.

Every contribution helps make Dealio better!

---

## Roadmap

- [x] Define database schema
- [x] Create basic API endpoints
- [ ] Connect React Native frontend
- [ ] Implement web scraping logic
- [ ] Add authentication and user-specific features  
