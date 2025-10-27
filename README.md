# ShowSync - Artist & Event Organizer Platform

A modern web platform built with Next.js that connects talented artists with event organizers to create unforgettable experiences.

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom React components with orange brand theme
- **State Management**: React hooks (useState)
- **Icons & Images**: Next.js Image optimization

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with header/footer
│   ├── globals.css        # Global styles
│   ├── artists/           # Artists listing page
│   │   └── page.tsx
│   ├── event-creator/     # Event creation wizard
│   │   └── page.tsx
│   └── auth/              # Authentication pages
│       ├── login/
│       │   └── page.tsx
│       └── register/
│           └── page.tsx
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   └── ui/               # UI components
│       ├── Button.tsx    # Reusable button component
│       ├── Input.tsx     # Form input component
│       └── ArtistCard.tsx # Artist display card
├── data/                 # Mock data
│   └── mockArtists.ts    # Sample artist data
└── types/                # TypeScript definitions
    └── index.ts          # Core type definitions
```

## 🎯 Features

### ✅ Completed MVP Features

1. **Home Page**
   - Hero section with call-to-action
   - Features overview
   - Professional landing design

2. **Artists Page**
   - Browse all available artists
   - Filter by genre and availability
   - Search functionality
   - Artist cards with details

3. **Event Creator**
   - 3-step wizard interface
   - Event details form
   - Artist selection with budget tracking
   - Review and submit process

4. **Authentication Pages**
   - Login page with form validation
   - Registration page with role selection
   - Social login placeholders

5. **Navigation & Layout**
   - Responsive header with navigation
   - Footer with links and branding
   - Consistent styling across pages

## 🎨 Design System

### Colors
- **Primary**: Orange (500/600 variants) - Brand color from logo
- **Accent**: Orange gradient (from-orange-500 to-orange-600)
- **Secondary**: Gray scale (50-900)
- **Success**: Green (for available status)
- **Warning**: Yellow (for busy status)
- **Error**: Red (for unavailable status)

### Typography
- **Font**: Geist Sans (modern, clean)
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible

### Components
- **Buttons**: Primary, secondary, outline variants
- **Cards**: Clean shadows, rounded corners
- **Forms**: Consistent input styling with validation

## 🧪 Mock Data

The platform includes comprehensive mock data:

- **8 Sample Artists** with different genres:
  - Luna Rodriguez (Indie Rock)
  - The Midnight Collective (Electronic)
  - Marcus Chen (Jazz)
  - Sarah Williams (Folk)
  - Neon Dreams (Synthwave)
  - David Thompson (Blues)
  - Echo Chamber (Alternative)
  - Maya Patel (World Music)

- **Artist Properties**:
  - Name, genre, pricing
  - Availability status
  - Bio, location, rating
  - Years of experience

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Navigation

- **Home** (`/`) - Landing page with platform overview
- **Artists** (`/artists`) - Browse and filter artists
- **Event Creator** (`/event-creator`) - Create new events
- **Login** (`/auth/login`) - User authentication
- **Register** (`/auth/register`) - New user registration

## 🔧 Development Notes

### Form Validation
- Real-time validation with error messages
- Required field checking
- Email format validation
- Password strength requirements

### State Management
- Local component state with React hooks
- Form data persistence during multi-step processes
- Filter and search state management

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid layouts
- Touch-friendly interface

## 🎯 Next Steps for Full Implementation

1. **Backend Integration**
   - Connect to actual API endpoints
   - Real user authentication
   - Database integration

2. **Enhanced Features**
   - Real-time availability checking
   - Payment processing
   - Contract management
   - Messaging system

3. **Performance Optimization**
   - Image optimization
   - Lazy loading
   - Caching strategies

4. **Testing**
   - Unit tests for components
   - Integration tests
   - E2E testing

## 📝 Development Time

- **Total Time**: ~3 hours
- **Setup & Structure**: 30 minutes
- **Components & Layout**: 1 hour
- **Pages Implementation**: 1.5 hours

## 🎉 Demo Ready

The MVP frontend is now complete and ready for demonstration! All pages are functional with proper navigation, form handling, and responsive design.

Visit [http://localhost:3000](http://localhost:3000) to explore the ShowSync platform.
