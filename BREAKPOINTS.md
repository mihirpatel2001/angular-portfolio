# Global Breakpoints Usage Guide

This project uses a centralized breakpoint system to ensure consistent responsive design across all components.

## Breakpoint Values

```scss
$breakpoints: (
  xs: 480px,   // Fold outer, small phones
  sm: 640px,   // Regular phones
  md: 768px,   // Large phones / small tablets
  lg: 1024px,  // Tablets
  xl: 1280px,  // Laptops
  xxl: 1440px  // Large desktops / ultrawide
);
```

## Usage in Tailwind CSS (HTML/Templates)

You can use these breakpoints directly in your HTML templates with Tailwind's responsive prefixes:

```html
<!-- Example: Show on xs and above -->
<div class="xs:block hidden">Content for xs+</div>

<!-- Example: Responsive text sizes -->
<h1 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>

<!-- Example: Responsive grid -->
<div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <!-- Grid items -->
</div>
```

### Available Tailwind Breakpoint Prefixes:
- `xs:` - 480px and above
- `sm:` - 640px and above
- `md:` - 768px and above
- `lg:` - 1024px and above
- `xl:` - 1280px and above
- `xxl:` - 1440px and above

## Usage in SCSS/CSS Files

### Method 1: Using Mixins (Recommended)

```scss
// Import breakpoints in your component SCSS file
@import 'styles/breakpoints';

.my-component {
  padding: 1rem;
  
  // Apply styles for sm and above
  @include sm {
    padding: 2rem;
  }
  
  // Apply styles for md and above
  @include md {
    padding: 3rem;
  }
  
  // Apply styles for lg and above
  @include lg {
    padding: 4rem;
  }
}
```

### Method 2: Using respond-to Mixin

```scss
@import 'styles/breakpoints';

.my-component {
  font-size: 14px;
  
  @include respond-to(sm) {
    font-size: 16px;
  }
  
  @include respond-to(lg) {
    font-size: 18px;
  }
}
```

### Method 3: Using Max-Width Mixins

```scss
@import 'styles/breakpoints';

.my-component {
  // Styles for screens smaller than md
  @include md-max {
    display: block;
  }
  
  // Styles for screens md and above
  @include md {
    display: flex;
  }
}
```

### Method 4: Using Range Mixins

```scss
@import 'styles/breakpoints';

.my-component {
  // Styles only for screens between sm and lg
  @include respond-to-range(sm, lg) {
    max-width: 800px;
  }
}
```

### Method 5: Direct Variable Usage

```scss
@import 'styles/breakpoints';

.my-component {
  @media (min-width: $breakpoint-md) {
    padding: 2rem;
  }
  
  @media (min-width: $breakpoint-lg) {
    padding: 3rem;
  }
}
```

## Available Mixins

### Min-Width Mixins
- `@include xs { }` - 480px and above
- `@include sm { }` - 640px and above
- `@include md { }` - 768px and above
- `@include lg { }` - 1024px and above
- `@include xl { }` - 1280px and above
- `@include xxl { }` - 1440px and above

### Max-Width Mixins
- `@include xs-max { }` - Below 480px
- `@include sm-max { }` - Below 640px
- `@include md-max { }` - Below 768px
- `@include lg-max { }` - Below 1024px
- `@include xl-max { }` - Below 1280px
- `@include xxl-max { }` - Below 1440px

### Utility Mixins
- `@include respond-to($breakpoint) { }` - Min-width for any breakpoint
- `@include respond-to-max($breakpoint) { }` - Max-width for any breakpoint
- `@include respond-to-range($min, $max) { }` - Range between two breakpoints

## Examples

### Example 1: Component with Responsive Padding

```scss
@import 'styles/breakpoints';

.hero-section {
  padding: 1rem;
  
  @include sm {
    padding: 2rem;
  }
  
  @include md {
    padding: 3rem;
  }
  
  @include lg {
    padding: 4rem;
  }
}
```

### Example 2: Responsive Grid Layout

```scss
@import 'styles/breakpoints';

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @include sm {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @include md {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  @include lg {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Example 3: Mobile-First Approach

```scss
@import 'styles/breakpoints';

.navigation {
  // Mobile styles (default)
  display: none;
  
  // Show on tablet and above
  @include md {
    display: flex;
  }
}
```

## Best Practices

1. **Use Tailwind classes in HTML** for simple responsive utilities
2. **Use SCSS mixins** for complex component-specific responsive styles
3. **Follow mobile-first approach** - write base styles for mobile, then enhance for larger screens
4. **Be consistent** - use the same breakpoints throughout the project
5. **Test on all breakpoints** - ensure your design works across all device sizes

## File Location

- **SCSS Variables**: `src/styles/_breakpoints.scss`
- **Tailwind Config**: `tailwind.config.js`
- **Global Styles**: `src/styles.scss`

