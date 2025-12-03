# Landing Page Standardization & Refactoring Guide

## Overview
This document outlines the standardized CSS classes created in `global.css` to replace inline Tailwind styles for consistency across the landing page.

## Standardized CSS Classes

### Section Spacing
- `.section` - Standard section padding (4rem vertical, 1rem horizontal)
- `.section-compact` - Reduced section padding (3rem vertical)

### Typography
- `.section-header` - Main section headings (text-3xl, yellow, centered, mb-3)
- `.section-divider` - Yellow divider line below headers (6rem wide, mb-6)
- `.section-intro` - Intro paragraph below headers (text-lg, gray-300, centered, mb-8)
- `.subsection-header` - White subsection headings (text-2xl, mb-4)
- `.subsection-header-yellow` - Yellow subsection headings (text-xl, mb-3)
- `.text-body` - Standard body text (gray-300, leading-relaxed, mb-4)
- `.text-emphasis` - Emphasized text (white, font-semibold)
- `.text-small` - Small text (text-sm)
- `.text-tiny` - Tiny text (text-xs)

### Cards
- `.card` - Standard card (gray-700 bg, yellow border, p-6, hover effect)
- `.card-compact` - Compact card (p-4)
- `.card-left-accent` - Card with left border accent only

### Buttons
- `.btn` - Base button styles
- `.btn-primary` - Yellow button (primary CTA)
- `.btn-secondary` - White button (secondary CTA)
- `.btn-outline` - Outlined button with yellow border

### Lists
- `.feature-list` - Container for feature list items
- `.feature-list-item` - Individual feature with icon
- `.feature-icon` - Yellow checkmark/icon (text-xl, yellow)
- `.city-list` - Container for city lists
- `.city-list-item` - Individual city item
- `.city-arrow` - Yellow arrow icon

### Reviews
- `.review-card` - Review card container
- `.star-rating` - Star rating container
- `.star-icon` - Individual star (w-5 h-5)
- `.star-icon-large` - Large star (w-8 h-8)
- `.review-text` - Review quote text
- `.review-author` - Author name
- `.review-date` - Review date

### Contact
- `.contact-item` - Contact info item container
- `.contact-icon-wrapper` - Yellow icon background
- `.contact-icon` - Icon (w-6 h-6)
- `.contact-label` - Label text (text-sm, gray-400)
- `.contact-value` - Value text (text-xl, white, hover yellow)

### Layout
- `.container-standard` - Max-width 72rem (max-w-6xl)
- `.container-narrow` - Max-width 56rem (max-w-4xl)
- `.grid-2-col` - 2-column grid (responsive)
- `.grid-3-col` - 3-column grid (responsive)

## Refactoring Priority

### High Priority (Consistency & Maintainability)
1. **Section Headers** - Replace all section h2 tags
2. **Section Dividers** - Replace all yellow divider lines
3. **Buttons** - Replace all CTA buttons
4. **Cards** - Replace service cards, county cards, review cards

### Medium Priority (Code Cleanliness)
5. **Typography** - Replace repeated text styles
6. **Lists** - Replace feature lists and city lists
7. **Contact Items** - Standardize contact info display

### Low Priority (Nice to Have)
8. **Grid Layouts** - Replace grid classes
9. **Container Widths** - Replace max-w classes

## Example Refactoring

### Before (Inline Tailwind):
```html
<h2 class="text-3xl font-bold text-brand-yellow text-center mb-3">About Us</h2>
<div class="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
```

### After (CSS Classes):
```html
<h2 class="section-header">About Us</h2>
<div class="section-divider"></div>
```

### Before (Button):
```html
<a href="tel:+19044082450" 
   class="px-8 py-3 bg-brand-yellow text-black text-lg font-bold rounded hover:bg-yellow-400 transition">
  Call Now
</a>
```

### After (Button):
```html
<a href="tel:+19044082450" class="btn btn-primary">
  Call Now
</a>
```

### Before (Card):
```html
<div class="bg-gray-700 border-2 border-brand-yellow rounded-lg p-6 hover:bg-gray-600 transition">
  <h3 class="text-xl font-bold text-brand-yellow mb-3">Title</h3>
  <p class="text-gray-300">Content</p>
</div>
```

### After (Card):
```html
<div class="card">
  <h3 class="subsection-header-yellow">Title</h3>
  <p class="text-body">Content</p>
</div>
```

## Benefits of Standardization

1. **Consistency** - All sections use identical spacing and typography
2. **Maintainability** - Change once in CSS, applies everywhere
3. **Readability** - Cleaner HTML, easier to understand structure
4. **Performance** - Smaller HTML file size, better caching
5. **Scalability** - Easy to add new sections with consistent styling

## Next Steps

1. Review and approve CSS classes
2. Refactor sections one at a time (start with headers/dividers)
3. Test responsive behavior
4. Remove unused Tailwind classes
5. Document any custom variations needed

## Notes

- Keep Tailwind for layout utilities (grid, flex, responsive breakpoints)
- Keep Tailwind for one-off spacing adjustments
- Use CSS classes for repeated patterns and components
- Maintain existing functionality while refactoring
