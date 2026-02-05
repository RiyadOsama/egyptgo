# EgyptGo - Travel Booking Platform

A modern, full-featured travel booking platform for exploring and booking travel packages across Egypt. Built with Next.js, React, and Tailwind CSS with infinite scroll, real-time data fetching, and comprehensive admin dashboard.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.18-38B2AC?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-LTS-green?style=flat-square)

## 🌟 Features

### User Features

- **Browse Destinations**: Explore Egypt's top travel destinations with infinite scroll
- **Browse Travel Packages**: Discover and compare travel packages with flexible filtering
- **Package Booking**: Complete booking flow with form validation and confirmation
- **Sorting & Filtering**: Sort packages by price and other criteria
- **Responsive Design**: Fully responsive interface optimized for mobile, tablet, and desktop
- **Dark Mode Support**: Seamless theme switching with system preference detection
- **Loading States**: Skeleton loaders and spinners for better UX during data fetching
- **Error Handling**: Graceful error states with retry functionality

### Admin Features

- **Dashboard**: Centralized admin control panel
- **Manage Destinations**: Create, read, update, and delete destination listings
- **Manage Packages**: Create, read, update, and delete travel packages
- **View Reservations**: Track and manage customer bookings
- **User Management**: Admin user creation and management

### Technical Features

- **Infinite Scroll**: Auto-loading content as users scroll
- **Server-Side Data Fetching**: Optimized data loading with Next.js
- **Real-time Updates**: React Query for automatic cache invalidation
- **Form Validation**: Comprehensive form error handling and validation
- **Toast Notifications**: User feedback with toast alerts
- **Protected Routes**: Authentication middleware for secure pages

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) - React-based framework with SSR/SSG capabilities
- **UI Library**: [React 19.2.3](https://react.dev/) - JavaScript library for building UIs
- **Styling**: [Tailwind CSS 4.1.18](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: Custom components + [shadcn/ui](https://ui.shadcn.com/) primitives
- **Icons**: [lucide-react](https://lucide.dev/) - Beautiful icon library
- **Image Handling**: Next.js Image component with optimization

### Data Management

- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **State Management**: [React Query](https://tanstack.com/query/latest) - Server state management
- **Form Handling**: React Hook Form with validation

### Development

- **Testing**: [Vitest](https://vitest.dev/) - Unit testing framework
- **Component Testing**: React Testing Library
- **Build Tool**: Turbopack - Next.js bundler
- **Language**: JavaScript (JSX)

## 📁 Project Structure

```
egyptgo/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css               # Global styles
│   │   ├── layout.jsx                # Root layout
│   │   ├── (admin)/                  # Admin routes (protected)
│   │   │   ├── dashboard/            # Admin dashboard
│   │   │   ├── create-admin/         # Admin creation
│   │   │   ├── destinations/         # Destination management
│   │   │   ├── packs/                # Package management
│   │   │   └── reservations/         # Reservation viewing
│   │   ├── (auth)/                   # Auth routes
│   │   │   ├── login/                # Login page
│   │   │   └── signup/               # Signup page
│   │   └── (main)/                   # Public routes
│   │       ├── page.jsx              # Home page
│   │       ├── about/                # About page
│   │       ├── contact/              # Contact page
│   │       ├── destinations/         # Destinations listing
│   │       ├── packs/                # Packages listing
│   │       └── book-form/            # Booking form
│   │
│   ├── components/                   # Reusable React components
│   │   ├── ui/                       # UI primitives (button, input, etc.)
│   │   ├── admin-form.jsx            # Admin creation form
│   │   ├── booking-form.jsx          # Booking form
│   │   ├── contact-form.jsx          # Contact form
│   │   ├── destination-card.jsx      # Destination card component
│   │   ├── destination-list.jsx      # Destination list
│   │   ├── package-card.jsx          # Package card component
│   │   ├── package-list.jsx          # Package list
│   │   ├── infinite-scroll.jsx       # Infinite scroll wrapper
│   │   ├── detail-skeleton.jsx       # Loading skeleton for details
│   │   ├── card-skeleton.jsx         # Loading skeleton for cards
│   │   ├── error-state.jsx           # Error display component
│   │   ├── empty-state.jsx           # Empty state component
│   │   ├── loading-spinner.jsx       # Loading spinner
│   │   ├── header.jsx                # Navigation header
│   │   ├── footer.jsx                # Footer
│   │   ├── modal.jsx                 # Modal dialog
│   │   └── ...
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-auth.js               # Authentication hook
│   │   ├── use-packages.js           # Package data management
│   │   ├── use-destinations.js       # Destination data management
│   │   ├── use-bookings.js           # Booking management
│   │   ├── use-user.js               # User data hook
│   │   └── use-mobile.js             # Mobile detection hook
│   │
│   ├── lib/                          # Utility functions
│   │   ├── axios.js                  # Axios configuration
│   │   ├── get-allPackages.js        # Fetch packages server-side
│   │   ├── get-destinations.js       # Fetch destinations server-side
│   │   ├── utils.js                  # General utilities
│   │   └── mock-data.js              # Mock data for development
│   │
│   ├── services/                     # API service layer
│   │   ├── auth.js                   # Authentication API
│   │   ├── packages.js               # Packages API
│   │   ├── destinations.js           # Destinations API
│   │   ├── bookings.js               # Bookings API
│   │   └── user.js                   # User API
│   │
│   ├── test/                         # Test configuration
│   │   └── setup.js                  # Vitest setup
│   │
│   └── middleware.js                 # Request middleware
│
├── public/                           # Static assets
├── package.json                      # Dependencies and scripts
├── tailwind.config.js                # Tailwind configuration
├── next.config.mjs                   # Next.js configuration
├── jsconfig.json                     # JavaScript path aliases
└── vitest.config.js                  # Vitest configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd egyptgo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Development

```bash
# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Key Pages

| Route                          | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `/`                            | Home page with featured destinations            |
| `/destinations`                | Browse all destinations with infinite scroll    |
| `/destinations/[id]`           | Destination details with available packages     |
| `/packs`                       | Browse all travel packages with infinite scroll |
| `/packs/[id]`                  | Package details and booking                     |
| `/book-form/[id]`              | Booking form for selected package               |
| `/about`                       | About page                                      |
| `/contact`                     | Contact page                                    |
| `/login`                       | User login                                      |
| `/signup`                      | User registration                               |
| `/dashboard`                   | Admin dashboard                                 |
| `/dashboard/destinations`      | Manage destinations                             |
| `/dashboard/packs`             | Manage packages                                 |
| `/dashboard/reservations/[id]` | View reservation details                        |

## 🎨 Components

### UI Components (`components/ui/`)

- `button.jsx` - Reusable button component
- `input.jsx` - Form input component
- `select.jsx` - Dropdown select component
- `dialog.jsx` - Modal dialog component
- `separator.jsx` - Visual divider
- `skeleton.jsx` - Loading skeleton
- `tooltip.jsx` - Tooltip component
- `sidebar.jsx` - Sidebar navigation

### Feature Components

- **InfiniteScroll**: Wrapper component for auto-loading content
- **DetailSkeleton**: Loading state for detail pages
- **CardSkeleton**: Loading state for card lists
- **ErrorState**: Consistent error display with retry
- **EmptyState**: Empty state messaging
- **LoadingSpinner**: Animated loading indicator
- **PackageCard**: Individual package display
- **DestinationCard**: Individual destination display
- **BookingForm**: Multi-step booking form
- **ContactForm**: Contact page form
- **Header**: Navigation header with auth
- **Footer**: Site footer

## 🪝 Custom Hooks

### `useGetFullPackages`

Fetch all packages with infinite scroll support

```javascript
const { data, isLoading, isError } = useGetFullPackages();
```

### `useGetAllPackages(id)`

Fetch packages by destination ID

```javascript
const { data, isLoading, isError } = useGetAllPackages(destinationId);
```

### `useGetPackageById(id)`

Fetch single package details

```javascript
const { data, isLoading, isError } = useGetPackageById(packageId);
```

### `useGetDestinationById(id)`

Fetch single destination details

```javascript
const { data, isLoading, isError } = useGetDestinationById(destinationId);
```

### `useAuth`

Authentication state management

```javascript
const { user, isAuthenticated, login, logout } = useAuth();
```

## 🔐 Authentication

The application uses middleware-based authentication for route protection:

- Public routes: Home, About, Contact, Destinations, Packages
- Protected routes: Dashboard, Admin panels (authentication required)
- Authentication routes: Login, Signup

## 🎯 Key Features Implementation

### Infinite Scroll

The `InfiniteScroll` component uses the Intersection Observer API to automatically load more items as users scroll. Applied to:

- Package listings
- Destination listings

### Loading States

Three-level loading UI:

1. **Skeleton Loaders**: Content-aware loading placeholders
2. **Loading Spinner**: Full-page loading state
3. **Optimistic Updates**: Instant UI feedback

### Error Handling

- API error catching and logging
- User-friendly error messages
- Retry functionality for failed requests
- Form validation error display

### Form Validation

- Client-side validation with React Hook Form
- Server-side validation
- Error message display
- Form state management

## 🌐 API Integration

The app connects to a backend API with the following main endpoints:

```
GET  /api/packages/all         - Get all packages (paginated)
GET  /api/packages/:id         - Get package details
POST /api/packages             - Create package (admin)
PATCH /api/packages/:id        - Update package (admin)
DELETE /api/packages/:id       - Delete package (admin)

GET  /api/destinations         - Get all destinations (paginated)
GET  /api/destinations/:id     - Get destination details
POST /api/destinations         - Create destination (admin)
PATCH /api/destinations/:id    - Update destination (admin)
DELETE /api/destinations/:id   - Delete destination (admin)

POST /api/bookings             - Create booking
GET  /api/bookings/:id         - Get booking details

POST /api/auth/login           - User login
POST /api/auth/signup          - User registration
```

## 🧪 Testing

The project includes a test suite with Vitest and React Testing Library.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Test files are located alongside components with `.test.jsx` extension:

- `bookingForm.test.jsx` - Booking form component tests
- `destinationForm.test.jsx` - Destination form component tests
- `packageForm.test.jsx` - Package form component tests
- `loginPage.test.jsx` - Login page component tests
- `SignUp.test.jsx` - Signup page component tests

## 🎨 Styling

The project uses Tailwind CSS for styling with:

- **Dark mode support**: Automatic system preference detection
- **Custom theme**: Defined in `tailwind.config.js`
- **CSS variables**: For consistent theming
- **Responsive design**: Mobile-first approach

## 📦 Deployment

### Build for Production

```bash
npm run build
```

### Environment Setup for Prod

Update `.env.production` with production API URLs:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.egyptgo.com
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

### Dependencies Issues

Clear and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear build cache:

```bash
rm -rf .next
npm run build
```

## 📝 Code Standards

- **Component Structure**: Functional components with hooks
- **File Naming**: kebab-case for files
- **Import Order**: React imports, library imports, local imports
- **Error Handling**: Try-catch blocks with user feedback
- **Loading States**: Always provide loading indicators

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'feat: add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a pull request

## 📄 License

This project is proprietary and all rights are reserved.

## 👨‍💻 Developer Notes

- The application uses Next.js 16.1.6 with Turbopack for fast builds
- React Query manages server state and caching
- The UI is built with a combination of custom components and shadcn/ui components
- All API calls are centralized in the `/services` directory
- Custom hooks in `/hooks` provide reusable logic
- Form components support both client and server validation

## 📞 Support

For issues or questions, please create an issue in the repository or contact the development team.
