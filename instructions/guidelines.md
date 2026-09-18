# Design Guidelines

## 1. UX Laws

**1.1** Hick’s Law — Reduce the number of visible choices at any moment to speed up decision-making and prevent cognitive overload.  
**1.2** Law of Proximity — Place related elements close together and separate unrelated ones to clearly communicate relationships.  
**1.3** Fitts’s Law — Make important actions large, accessible, and easy to reach, especially for touch and frequent interactions.  
**1.4** Jakob’s Law — Follow familiar UI patterns and conventions so users can rely on prior experience instead of learning new behaviors.  
**1.5** Reusable Patterns — Use the same components, layouts, and interaction patterns across the product to improve learnability.  
**1.6** Predictable Interactions — Ensure similar actions always behave the same way so users can form reliable expectations.  
**1.7** Symmetry & Alignment — Align elements to a consistent structure to create visual balance and reduce scanning effort.  
**1.8** Whitespace — Use spacing intentionally to separate content, improve readability, and guide focus.  
**1.9** Consistent Colors — Apply colors consistently and semantically so meaning is clear and not re-learned per screen.  
**1.10** Typography Hierarchy — Use font size, weight, and spacing to clearly signal content importance and reading order.

## 2. Typography

**2.1** Use 1 font family (max 2 for hierarchy)  
**2.2** Define type scale: h1, h2, body, secondary (use CSS variables)  
**2.3** For Tailwind: use provided utility classes from the design system (e.g., text-gray-700, space-y-4, mt-4, border-gray-300 are allowed)  
**2.4** Line-height: larger text → tighter ratio, smaller text → looser ratio

## 3. Colors

**3.1** Limit accent colors to 4-5 max  
**3.2** Avoid pure black — use softer darks  
**3.3** Use CSS variables or Tailwind utilities from the design system (e.g., bg-gray-50, text-gray-900, border-gray-300)  
**3.4** Ensure contrast meets accessibility standards

## 4. Design System

**4.1** Use existing components, styles, and CSS variables only  
**4.2** Don't introduce new colors or sizes without system update  
**4.3** Maintain consistent component API across similar elements

## 5. Components

### 5.1 Reuse

**5.1** Reuse same components across app for consistency  

### 5.2 Variants

**5.2** Use variants (primary, secondary, danger) not duplicate components  

### 5.3 Icons

**5.3.1** Use a single icon library consistently across the app — don't mix icon sets  
**5.3.2** Standard sizes: 16px or 24px  
**5.3.3** Pair with text unless universally understood  
**5.3.4** Use flex-shrink: 0 to prevent distortion

### 5.4 Form Inputs

**5.4.1** Mark required fields clearly  
**5.4.2** Use labels (not placeholders) for instructions  
**5.4.3** Validate real-time and on submit  
**5.4.4** All inputs must have visible error states

## 6. Layout & Spacing

**6.1** Follow spacing scale (no random pixel values)  
**6.2** Use rem/em (not px) for spacing  
**6.3** Use %, flex, or grid for widths (not fixed pixels)  
**6.4** Use gap utilities (flex-gap, grid-gap) instead of margins

## 7. Hierarchy & Consistency

**7.1** Similar elements must look and behave identically  
**7.2** Clear hierarchy: page → section → content → details → meta  
**7.3** Don't repeat information on same page

## 8. Actions & States

**8.1** Use action verbs for buttons ("Save", not "OK")  
**8.2** One primary action per screen/section  
**8.3** All interactive elements need: hover, focus, active, disabled states  
**8.4** All actions need feedback: loading, success, error, confirmation

## 9. Loading & Empty States

**9.1** Show loading for all async actions  
**9.2** Use skeletons for content-heavy screens  
**9.3** Use progress bars for long operations  
**9.4** Empty states: explain why empty, suggest next steps, provide CTA  
**9.5** Show informative messages (not silent failures)

## 10. Accessibility

**10.1** Design mobile-first, test all breakpoints  
**10.2** All forms/inputs are keyboard accessible (tab, enter)  
**10.3** Links support Ctrl+Click and Enter  
**10.4** Use appropriate mobile keyboards (numeric, email, etc.)

## 11. Content

**11.1** Buttons use verbs ("Save changes", not "OK")  
**11.2** Allow space for longer text, truncate gracefully  
**11.3** Format data (dates, numbers) based on user region  
**11.4** Support copy/paste in forms and grids
