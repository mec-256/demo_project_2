# Walmart Horizon - Market Expansion Analytics

## Overview

Walmart Horizon is a comprehensive web application designed to help Walmart explore expansion opportunities into new cities. The system analyzes market potential, simulates demand, assesses delivery feasibility, and provides inventory planning insights. It's built as a full-stack application with a React frontend and Express backend, using PostgreSQL for data storage.

## User Preferences

- **Communication Style**: Simple, everyday language
- **Design Philosophy**: Modern, visually appealing, eye-catching interfaces
- **Feature Preference**: Rich interactive elements with real-time updates

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom Walmart branding
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL storage
- **API Design**: RESTful endpoints following conventional patterns
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Database Schema
The application uses four main tables:
- **Users**: Basic user authentication
- **Cities**: Master data for cities with market metrics
- **CityMetrics**: Detailed analytics for each city (demand, delivery, inventory)
- **Simulations**: Historical simulation runs and results

### Frontend Components
- **Dashboard**: Main application interface with tabbed navigation
- **City Selector**: Dropdown for selecting target cities
- **Tab Navigation**: Overview, Demand Analysis, Delivery Zones, Inventory Planning
- **Metric Cards**: Key performance indicators display
- **Map Integration**: Placeholder for future Mapbox integration

### API Endpoints
- `GET /api/cities`: Retrieve all available cities
- `GET /api/data/:cityCode`: Get comprehensive city data and metrics
- `POST /api/simulate`: Run market simulations (planned)

## Data Flow

1. **City Selection**: User selects a city from the dropdown
2. **Data Fetching**: Frontend queries city data via REST API
3. **Metrics Display**: City metrics are displayed across different tabs
4. **Simulation**: Users can adjust parameters and run demand simulations
5. **Results**: Updated metrics and recommendations are displayed

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database interactions
- **Connection Pooling**: Built-in with @neondatabase/serverless

### UI Components
- **Radix UI**: Accessible, unstyled component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for production
- **Vite**: Development server with HMR

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express backend
- **Database**: Connected to Neon PostgreSQL instance
- **Environment**: NODE_ENV=development with hot reload

### Production
- **Build Process**: Vite builds client assets, esbuild bundles server
- **Deployment**: Single Node.js application serving both API and static files
- **Database**: Production PostgreSQL with connection pooling
- **Environment**: NODE_ENV=production with optimized builds

### Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **Path Aliases**: Configured for clean imports (@/, @shared/)
- **Asset Handling**: Vite handles static assets and bundling

The application is designed to be deployed on platforms like Replit, Vercel, or traditional VPS hosting, with the database hosted separately on Neon or similar PostgreSQL providers.

## Recent Enhancements (January 2025)

### Visual Design Improvements
- **Modern UI Overhaul**: Complete redesign with gradient backgrounds, elegant shadows, and smooth animations
- **Dark Mode Support**: Full dark/light theme toggle with beautiful color schemes
- **Enhanced Animations**: Fade-in, slide-up, gentle bounce, and hover effects throughout
- **Glass Morphism**: Subtle backdrop blur effects for modern aesthetics
- **Improved Typography**: Better font hierarchy and spacing

### Interactive Charts & Visualizations
- **Real Chart Integration**: Replaced placeholder charts with working Recharts components
- **Demand Forecast Chart**: Interactive line chart showing historical vs projected demand
- **Revenue Projection**: Pie chart with category breakdowns and custom tooltips
- **Demand Heatmap**: Bar chart showing demand distribution across city zones
- **Category Performance**: Radar chart comparing current vs market potential

### Advanced Features
- **Real-time Analytics Dashboard**: Live KPIs with auto-updating metrics
- **Competitive Analysis**: Market share analysis with strategic insights
- **Export Functionality**: PDF reports, Excel data, and chart exports
- **Enhanced Loading States**: Beautiful loading overlays with progress indicators
- **Improved Navigation**: 7 tabs including new Analytics, Competition, and Export sections

### User Experience Enhancements
- **Responsive Design**: Better mobile and tablet layouts
- **Visual Feedback**: Hover effects, transitions, and micro-interactions
- **Enhanced City Selector**: Better styling with emojis and improved UX
- **Smart Map Placeholder**: Interactive map view with enhanced controls and legend
- **Improved Insights**: Color-coded insights with better visual hierarchy

### Technical Improvements
- **Performance Optimizations**: Smooth animations and efficient rendering
- **Accessibility**: Better color contrast and keyboard navigation
- **Code Organization**: Modular components with proper TypeScript typing
- **Error Handling**: Improved error states and user feedback