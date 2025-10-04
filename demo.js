// Demo JavaScript for BubbleUI Core
// This script uses the locally installed @daniel-dada/bubbleui-core package

import { BubbleFrame } from './node_modules/@daniel-dada/bubbleui-core/dist/bubble-frame.js';

class BubbleUIDemo {
    constructor() {
        this.isInstalled = true;
        this.cardCount = 4;
        this.init();
    }

    async init() {
        console.log('🚀 Initializing BubbleUI Core Demo...');
        
        // Show installation status
        this.showInstallationStatus();
        
        // Initialize the responsive layout
        this.initializeResponsiveLayout();
        
        // Set up event listeners
        this.setupEventListeners();
        
        console.log('✅ BubbleUI Core Demo initialized successfully!');
    }

    showInstallationStatus() {
        const statusDiv = document.createElement('div');
        statusDiv.id = 'installation-status';
        statusDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #d1fae5;
                border: 1px solid #10b981;
                border-radius: 8px;
                padding: 12px 16px;
                font-size: 14px;
                color: #065f46;
                z-index: 1000;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            ">
                ✅ BubbleUI Core loaded successfully!
            </div>
        `;
        document.body.appendChild(statusDiv);
        
        // Remove status after 3 seconds
        setTimeout(() => {
            statusDiv.remove();
        }, 3000);
    }


    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #fee2e2;
                border: 1px solid #ef4444;
                border-radius: 8px;
                padding: 12px 16px;
                font-size: 14px;
                color: #991b1b;
                z-index: 1000;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            ">
                ❌ ${message}
            </div>
        `;
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    initializeResponsiveLayout() {
        const bubbleFrames = document.querySelectorAll('bubble-frame');
        bubbleFrames.forEach(bubbleFrame => {
            // Add responsive behavior
            bubbleFrame.style.transition = 'all 0.3s ease';
            
            // Add resize observer for responsive behavior
            const resizeObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    this.handleResize(entry);
                });
            });
            
            resizeObserver.observe(bubbleFrame);
        });
    }

    handleResize(entry) {
        const { width } = entry.contentRect;
        const bubbleFrame = entry.target;
        
        // Different responsive behavior based on component type
        if (bubbleFrame.classList.contains('header-content')) {
            // Header: stack vertically on small screens
            if (width < 600) {
                bubbleFrame.style.flexDirection = 'column';
                bubbleFrame.style.gap = '1rem';
            } else {
                bubbleFrame.style.flexDirection = 'row';
                bubbleFrame.style.gap = '2rem';
            }
        } else if (bubbleFrame.classList.contains('hero-layout')) {
            // Hero: single column on mobile
            if (width < 768) {
                bubbleFrame.style.gridTemplateColumns = '1fr';
                bubbleFrame.style.gap = '2rem';
            } else {
                bubbleFrame.style.gridTemplateColumns = '1fr 1fr';
                bubbleFrame.style.gap = '4rem';
            }
        } else if (bubbleFrame.classList.contains('features-grid')) {
            // Features: responsive grid
            if (width < 600) {
                bubbleFrame.style.gridTemplateColumns = '1fr';
            } else if (width < 900) {
                bubbleFrame.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                bubbleFrame.style.gridTemplateColumns = 'repeat(3, 1fr)';
            }
        } else if (bubbleFrame.classList.contains('responsive-layout')) {
            // Demo cards: adaptive grid
            if (width < 400) {
                bubbleFrame.style.gridTemplateColumns = '1fr';
            } else if (width < 600) {
                bubbleFrame.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                bubbleFrame.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
            }
        }
        
        console.log(`📱 Container resized to ${width}px, layout updated`);
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add hover effects to cards
        document.querySelectorAll('.demo-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Demo control functions
function toggleLayout() {
    const responsiveLayout = document.querySelector('.responsive-layout');
    if (responsiveLayout) {
        const currentColumns = responsiveLayout.style.gridTemplateColumns;
        
        if (currentColumns === '1fr' || !currentColumns) {
            responsiveLayout.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else if (currentColumns === 'repeat(2, 1fr)') {
            responsiveLayout.style.gridTemplateColumns = 'repeat(3, 1fr)';
        } else {
            responsiveLayout.style.gridTemplateColumns = '1fr';
        }
        
        console.log('🔄 Layout toggled');
    }
}

function resizeContainer() {
    const bubbleContainer = document.querySelector('.bubble-container');
    if (bubbleContainer) {
        const currentWidth = bubbleContainer.style.maxWidth;
        
        if (!currentWidth || currentWidth === '1200px') {
            bubbleContainer.style.maxWidth = '800px';
            bubbleContainer.style.margin = '3rem auto';
        } else if (currentWidth === '800px') {
            bubbleContainer.style.maxWidth = '400px';
        } else {
            bubbleContainer.style.maxWidth = '1200px';
            bubbleContainer.style.margin = '3rem auto';
        }
        
        console.log('📏 Container resized');
    }
}

function addCard() {
    const responsiveLayout = document.querySelector('.responsive-layout');
    if (responsiveLayout) {
        const cardCount = responsiveLayout.children.length + 1;
        
        const newCard = document.createElement('div');
        newCard.className = 'demo-card';
        newCard.innerHTML = `
            <h4>Card ${cardCount}</h4>
            <p>This is a dynamically added card using BubbleUI Core responsive layout.</p>
        `;
        
        // Add animation
        newCard.style.opacity = '0';
        newCard.style.transform = 'translateY(20px)';
        
        responsiveLayout.appendChild(newCard);
        
        // Animate in
        setTimeout(() => {
            newCard.style.transition = 'all 0.3s ease';
            newCard.style.opacity = '1';
            newCard.style.transform = 'translateY(0)';
        }, 10);
        
        console.log(`➕ Added card ${cardCount}`);
    }
}

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('⚡ Performance Metrics:');
            console.log(`   DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);
            console.log(`   Page Load Complete: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
            console.log(`   Total Load Time: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 DOM Content Loaded - Starting BubbleUI Demo');
    
    // Initialize the demo
    new BubbleUIDemo();
    
    // Start performance monitoring
    logPerformance();
    
    // Add some fun interactions
    addFunInteractions();
});

function addFunInteractions() {
    // Add click effects to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BubbleUIDemo, toggleLayout, resizeContainer, addCard };
}
