# Event Lead Capture Form 🎉

A premium, mobile-first, TurboTax-style multi-step form for capturing event leads with world-class UI/UX design.

## ✨ Features

### Core Functionality
- **6-Step Journey** - Thoughtfully designed flow from contact info to submission
- **Smart Auto-Advance** - Event type and venue selection auto-advance for faster completion
- **Real-Time Validation** - Inline error messages guide users to valid inputs
- **Progress Persistence** - Form data auto-saves to localStorage, never lose progress
- **Keyboard Shortcuts** - Power users can navigate with Enter/Esc keys

### Design & UX
- **Premium Gradient Design** - Beautiful indigo-to-purple color scheme
- **Smooth Animations** - Slide transitions, hover effects, and micro-interactions
- **Card-Based Layout** - Modern, spacious design with visual hierarchy
- **Icon-Enhanced Inputs** - Every field has contextual icons for clarity
- **Mobile-First & Responsive** - Optimized for all screen sizes
- **Trust Signals** - Privacy notice, progress indicator, and time estimate

### User Experience
- **Conversational Headers** - Friendly, engaging questions instead of form labels
- **Visual Feedback** - Selected states, checkmarks, and hover effects
- **One Question Per Screen** - Reduces cognitive load and feels effortless
- **Smart Number Input** - +/- buttons for easy guest count adjustment
- **Edit Anywhere** - Jump back to any section from the summary screen

### Accessibility
- **ARIA Labels** - Full screen reader support
- **Keyboard Navigation** - Complete keyboard accessibility
- **Focus Indicators** - Clear visual focus states for all interactive elements
- **WCAG Compliant** - Meets accessibility standards

## 🚀 Running the App

### Quick Start
```bash
npm install       # Install dependencies (if not already done)
npm run dev       # Start development server
```

The app will be available at: **http://localhost:5173/**

### Available Commands

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build optimized production bundle
npm run preview  # Preview production build locally
```

## 📂 Project Structure

```
event/
├── src/
│   ├── App.jsx      # Main form component with all logic
│   ├── main.jsx     # React entry point
│   └── index.css    # Tailwind + custom animations
├── public/          # Static assets
├── index.html       # HTML template
├── package.json     # Dependencies & scripts
├── vite.config.js   # Vite configuration
└── tailwind.config.cjs  # Tailwind CSS config
```

## 🎯 User Flow

### Step 1: Contact Information
- Name (with validation: min 2 characters)
- Phone Number (with validation: 10-digit format)
- Email (with validation: proper email format)
- Privacy reassurance message

### Step 2: Event Type 💍🎂🎊
- Wedding - "Create your dream wedding celebration"
- Birthday - "Make their special day unforgettable"
- Other Event - "Corporate, anniversary, or custom event"
- **Auto-advances on selection**

### Step 3: Event Setting 🏛️🌳
- Indoor - "Climate-controlled comfort, perfect for any weather"
- Outdoor - "Under the open sky, surrounded by nature's beauty"
- **Auto-advances on selection**

### Step 4: Guest Count 👥
- Number input with +/- buttons
- Visual, touch-friendly controls
- Validation: minimum 1 guest

### Step 5: Meal Options 🍽️
- Vegetarian 🥗 - "Plant-based delicious meals"
- Non-Vegetarian 🍖 - "Includes meat and poultry options"
- Vegan 🌱 - "100% plant-based, no animal products"
- Gluten-Free 🌾 - "Safe for gluten sensitivities"
- Multiple selections allowed
- Visual checkmarks on selected items

### Step 6: Summary & Review 📋
- Card-based summary of all information
- Edit buttons to jump back to any section
- Compelling pre-submit message
- Success banner with final CTA

## 🎨 Design System

### Colors
- **Primary Gradient**: Indigo-600 → Purple-600
- **Success**: Emerald-500 → Green-600
- **Background**: Indigo-50 → Purple-50 → Pink-50
- **Neutral**: Gray scale with proper contrast

### Animations
- Slide transitions (left/right based on direction)
- Hover scale effects (1.02x zoom)
- Focus ring with glow effect
- Smooth all transitions (200-500ms)
- Checkmark animations on selection

### Typography
- Gradient text for headers
- Clear hierarchy with font sizes (3xl → xs)
- Proper spacing and line height

## 🔧 Technical Stack

- **React 19.2.0** - Latest React with modern hooks
- **Vite 7.2.6** - Lightning-fast build tool
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing
- **LocalStorage API** - Data persistence

## 🎮 Keyboard Shortcuts

- **Enter** - Continue to next step
- **Escape** - Go back to previous step
- **Tab** - Navigate between form fields

## ✅ Completed Features

- ✅ 6-step conversational flow
- ✅ Real-time form validation
- ✅ Auto-advance for single selections
- ✅ LocalStorage persistence (auto-save)
- ✅ Keyboard shortcuts & navigation
- ✅ Edit functionality from summary
- ✅ Premium gradient design system
- ✅ Smooth animations & transitions
- ✅ Full accessibility (ARIA, keyboard, focus)
- ✅ Mobile-optimized with touch controls
- ✅ Trust signals (privacy, progress, time)
- ✅ Icon-enhanced inputs

## 📋 Future Enhancements

### Backend Integration
- [ ] Connect to REST API endpoint
- [ ] Add Firebase/Supabase integration
- [ ] Implement lead management dashboard
- [ ] Email notifications on form submission

### Advanced Features
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Analytics tracking (Google Analytics/Mixpanel)
- [ ] A/B testing framework
- [ ] Conditional logic based on event type
- [ ] File upload for event references
- [ ] Calendar integration for date selection
- [ ] SMS verification for phone numbers

### Optimization
- [ ] Add loading skeleton screens
- [ ] Implement error boundary
- [ ] Add retry logic for failed submissions
- [ ] Progressive Web App (PWA) capabilities
- [ ] Performance monitoring

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a standalone project. Feel free to fork and customize for your needs!

## 📄 License

ISC

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

*Last Updated: December 2025*
