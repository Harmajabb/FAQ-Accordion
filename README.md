# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects using real-world layouts and interactions.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked  
- Navigate the questions and hide/show answers using keyboard navigation alone  
- View the optimal layout for the interface depending on their device's screen size  
- See hover and focus states for all interactive elements on the page  
- (Bonus) Enjoy a smooth expand/collapse animation when a question is opened or closed  


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

---

## My process

### Built with

- **Semantic HTML5** using `<details>` / `<summary>` for accessibility  
- **CSS Custom Properties** (variables)  
- **CSS Grid** and **Flexbox** for layout  
- **Mobile-first workflow**  
- **Media Queries + clamp()** for fluid and responsive typography  
- **Vanilla JavaScript** for enhanced interactions (exclusive accordion behavior + keyboard navigation)  
- **Prefers-reduced-motion** for accessibility-friendly animations  

---

### What I learned

This project was a deep dive into **semantic HTML, accessibility, and user experience**.

####  Semantic structure

I learned that using `<details>` and `<summary>` allows the browser to handle all basic interactions natively — including mouse clicks, keyboard navigation (`Tab`, `Enter`, `Space`), and ARIA states — without any JavaScript at all.

`<details>`
  `<summary>What is Frontend Mentor?</summary>`
  `<p>Frontend Mentor offers realistic coding challenges to improve your skills.</p>`
`</details>` 

#### CSS technique 

I applied a consistent system of CSS variables for colors, typography, spacing and shadows.

`:root {`
  `--purple-hard: hsl(292, 42%, 14%);`
  `--purple-smooth: hsl(292, 16%, 49%);`
  `--fs-600: clamp(1.25rem, 1rem + 1vw, 1.75rem);`
`}`

This allowed me to keep my design consistent and responsive. 
I also used `:focus-visible` instead of `:focus` to show outlines **only** for keyboard users, improving accessibility and UX.

`summary:focus-visible {`
  `outline: 2px solid var(--purple-smooth);`
  `outline-offset: 4px;`
`}`

#### Modern CSS units

I discovered new viewport-relative units like `svh` (Stable Viewport Height), which prevents layout jumps on mobile devices when browser UI elements appear or disappear.

#### Keyboard navigation

Using JavaScript, I implemented: 
- Exclusive accordion behavior (only one item open at a time)
- Keyboard navigation between questions using `ArrowUp` and `ArrowDown` keys
- ARIA-expanded synchronization for screen readers

`summary.addEventListener('keydown', (e) => {`
  `const { key } = e;`
  `if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) return;`

  `e.preventDefault();`
  `let idx = i;`
  `if (key === 'ArrowDown') idx = (i + 1) % summaries.length;`
  `if (key === 'ArrowUp')   idx = (i - 1 + summaries.length) % summaries.length;`

`  summaries[idx].focus();`
`});`

#### JavaScript pratice renforcement
I reinforced my understanding of:
- Using === and !== for strict equality
- Using requestAnimationFrame for smoother animations
- Keeping functions small and reusable (closeAll(), syncAria())

### Continued development
In future projects, I want to:

- Explore **ARIA patterns** further to make complex widgets fully accessible
- Improve my **animation timing functions** and performance
- Experiment with **CSS-only transitions** using max-height and compare their performance
- Continue structuring my CSS with a **BEM-like naming convention** for scalability
- Add testing for accessibility (keyboard + screen reader checks)

### Useful resources
- [MDN Web Docs on `<details>` and `<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) - Comprehensive guide on using these semantic elements for disclosure widgets.
- [MDN Clamp() function](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) - Helped me understand how to create fluid typography that adapts to screen size.
- [MDN :focus-visible pseudo-class:](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) - This resource helped me understand how to improve accessibility for keyboard users.
- [WAI-ARIA Authoring Practices 1.2 Accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/?utm_source=chatgpt.com) - Provided guidelines for implementing accessible accordion behavior.
- [CSS tricks](https://css-tricks.com/using-css-transitions-auto-dimensions/) - Smooth height transition.
- [Frontend Mentor](https://www.frontendmentor.io/community) - FAQ accordion challenge and community solutions.

### Author
- Lea Francois – Web development student at Wild Code School, currently learning fullstack development.