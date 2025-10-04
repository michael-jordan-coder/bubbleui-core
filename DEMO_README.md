# BubbleUI Core Demo Website

This website demonstrates the `@daniel-dada/bubbleui-core` package in action, showcasing how the `<bubble-frame>` web component creates fluid, responsive layouts throughout the entire site.

## 🚀 Features

- **Fully Responsive**: Every section uses `<bubble-frame>` for adaptive layouts
- **Real-time Adaptation**: Layouts change dynamically as you resize the browser
- **Interactive Controls**: Test different layout modes with control buttons
- **Modern Design**: Clean, professional UI with smooth animations
- **Performance Optimized**: Uses locally installed package for fast loading

## 📦 Package Usage

The website demonstrates several use cases for `@daniel-dada/bubbleui-core`:

### Header Section
```html
<bubble-frame class="header-content">
    <h1 class="logo">BubbleUI</h1>
    <nav class="nav">...</nav>
    <button class="cta-button">Get Started</button>
</bubble-frame>
```

### Hero Section
```html
<bubble-frame class="hero-layout">
    <div class="hero-content">...</div>
    <div class="hero-visual">
        <bubble-frame class="demo-grid">...</bubble-frame>
    </div>
</bubble-frame>
```

### Features Grid
```html
<bubble-frame class="features-grid">
    <div class="feature-card">...</div>
    <div class="feature-card">...</div>
    <div class="feature-card">...</div>
</bubble-frame>
```

### Interactive Demo
```html
<bubble-frame class="responsive-layout">
    <div class="demo-card">...</div>
    <div class="demo-card">...</div>
    <!-- Cards adapt automatically -->
</bubble-frame>
```

## 🎯 Responsive Behavior

The JavaScript automatically adjusts layouts based on container width:

- **Header**: Stacks vertically on mobile (< 600px)
- **Hero**: Single column on mobile (< 768px)
- **Features**: 1-3 columns based on available space
- **Demo Cards**: Adaptive grid (1-3 columns)

## 🛠️ Installation

```bash
npm install @daniel-dada/bubbleui-core
```

## 🎮 Interactive Controls

- **Toggle Layout**: Switch between different grid configurations
- **Resize Container**: Test responsive behavior at different widths
- **Add Card**: Dynamically add new cards to see fluid layout adaptation

## 📱 Responsive Breakpoints

- **Mobile**: < 600px (single column layouts)
- **Tablet**: 600px - 900px (2-column layouts)
- **Desktop**: > 900px (multi-column layouts)

## 🔧 Technical Details

- **Package**: `@daniel-dada/bubbleui-core@0.1.0`
- **Framework**: Vanilla JavaScript with ES6 modules
- **Styling**: CSS Grid + Flexbox with custom properties
- **Performance**: ResizeObserver for efficient responsive updates
- **Accessibility**: Focus management and reduced motion support

## 🌐 Live Demo

Open `demo.html` in your browser to see the responsive behavior in action. Resize the window or use the control buttons to test different layout modes.

---

Built with ❤️ using BubbleUI Core - making responsive design fluid and intuitive.
