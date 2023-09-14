# Unit 3: Navigational and Interaction Accessibility

## Lesson: Keyboard Accessibility

### Tab Order

1. **Logical Flow**: The tabbing order should follow a logical sequence, usually top to bottom, left to right.
2. **Skip to Content**: Provide a way to skip navigation elements to go directly to the main content.

### Keyboard Shortcuts

1. **Mnemonics**: Use easily memorable shortcuts.
2. **Avoid Conflicts**: Ensure that the shortcuts do not conflict with existing browser and screen reader shortcuts.

### Focus States

1. **Visible**: The focus state should be easily distinguishable.
2. **Consistent**: Use consistent styles for focus states throughout the site.

### ARIA Roles

1. **Define Roles**: Use ARIA roles to define the role of each element (e.g., `role="navigation"` for navigation elements).
2. **Complementary Elements**: Use roles like `complementary` for sidebars, `main` for the main content.

---

## Lesson: Forms and Inputs

### Labels

1. **Explicit Labeling**: Use `<label>` elements associated with `id` attributes on input fields.
2. **Placeholder vs Label**: Placeholders are not a substitute for labels.

### Fieldsets

1. **Grouping**: Use the `<fieldset>` element to group related fields.
2. **Legend**: Use `<legend>` to provide a description for the fieldset.

### Validation Messages

1. **Real-time Feedback**: Provide validation messages as the user fills out the form.
2. **Accessible**: Make sure error messages are accessible to screen readers through ARIA attributes like `aria-describedby`.

### Accessible Dropdowns

1. **Native HTML**: Whenever possible, use native HTML `<select>` elements.
2. **ARIA**: If you're building a custom dropdown, use ARIA roles and states to indicate the dropdown functionality.
