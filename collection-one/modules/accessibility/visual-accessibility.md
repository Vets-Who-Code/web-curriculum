# Unit 4: Visual Accessibility

## Lesson: Color and Contrast

### Color Theory

1. **Purpose**: Understand the psychological and readability impacts of different colors.
2. **Accessibility**: Make sure color is not the only means of conveying information.

### Contrast Ratios

1. **Minimum Ratios**: Follow WCAG guidelines, which recommend a minimum contrast ratio of 4.5:1 for normal text.
2. **Large Text**: Lower contrast ratio requirements apply to large text (3:1).

### Tools for Checking Contrast

1. **Color Contrast Analyzers**: Tools like WebAIM's Contrast Checker can evaluate contrast ratios.
2. **Browser Extensions**: Extensions like Axe can run accessibility audits, including contrast checks.

---

## Lesson: Responsive and Mobile Accessibility

### Media Queries

1. **Breakpoints**: Use media queries to change layout at different screen sizes.
2. **Content Reorganization**: Ensure that content is still logically ordered when the layout changes.

### Flexible Grids

1. **Fluid Layout**: Use percentages rather than fixed units for element widths.
2. **Max and Min**: Use `max-width` and `min-width` to constrain content and maintain readability.

### Accessible Menus

1. **Keyboard Accessible**: Ensure menus can be navigated with the keyboard.
2. **ARIA Roles**: Use ARIA roles to make custom-built menus more accessible.

### Touch Targets

1. **Size**: Make touch targets large enough to interact with easily.
2. **Spacing**: Provide adequate space between touch targets to prevent errors.
