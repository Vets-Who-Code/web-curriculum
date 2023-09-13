# **Introduction to CSS**

CSS (Cascading Style Sheets) is the language used to style and layout web pages. It describes how elements on a webpage should appear in terms of design, positioning, and responsive behavior.

---

## **CSS Cheatsheet**

### **1. A Brief History:**
- **1996:** CSS1 released, providing basic styling capability.
- **1998:** CSS2 introduced positioning and table layout.
- **2011:** CSS3 started modularizing the spec, introducing features like animations, transitions, and media queries.

### **2. Syntax:**
A basic CSS rule consists of a selector and a declaration block:

```css
selector {
    property: value;
}
```

### **3. Selectors:**
Selects HTML elements based on their name, id, class, attribute, etc.
- **Element Selector:** `p`
- **Class Selector:** `.className`
- **ID Selector:** `#idName`
- **Attribute Selector:** `[attribute="value"]`

### **4. Properties:**
Attributes you want to style in a selector, e.g., `color`, `font-size`, `margin`.

### **5. Values:**
The style definition for a property, e.g., `red`, `16px`.

### **6. The Importance of CSS:**
- Enhances user experience.
- Provides responsive designs for different devices.
- Allows for visual consistency across webpages.

### **7. The Cascade:**
Determines how to apply conflicting styles:
1. Importance (!important)
2. Specificity
3. Source Order

### **8. Specificity:**
Determines which CSS rule is applied by the browsers by calculating which one is more specific:

- **Type selectors**: `0,0,0,1`
- **Class selectors**: `0,0,1,0`
- **ID selectors**: `0,1,0,0`
- **Inline styles**: `1,0,0,0`

The value with a higher sum is applied.

### **9. Inheritance:**
Some properties, like `font-size` or `color`, are inherited from parent elements if not specified.

### **10. Media Queries:**
Allow content to adapt to different conditions like screen width:

```css
@media only screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

---

This cheatsheet provides a concise overview of CSS for beginners. While CSS is vast and continuously evolving, mastering the basics is crucial to developing efficient, attractive, and responsive web designs.