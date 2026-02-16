# Teaching Template Website (GitHub Pages Ready)

This is a simple starter website for learning purposes.
It uses **HTML + CSS + JavaScript** and is designed to teach students:
- common HTML page parts (header/nav/main/section/article/aside/footer)
- common components (cards, buttons, forms, tables)
- how files/folders fit together
- how to deploy a static site with GitHub Pages

---

## Folder structure

template-teaching-site/
├─ index.html
├─ about.html
├─ README.md
└─ assets/
├─ css/styles.css
└─ js/main.js


---

## How to run locally

Just open `index.html` in a browser.

Tip: If you use VS Code, you can install a “Live Server” extension, but it is NOT required.

---

## How to publish on GitHub Pages

1. Create a GitHub repository and upload these files.
2. Go to **Settings → Pages**
3. Set:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Save.
5. GitHub will show the published URL.

---

## Teaching features

### Labels
- The site uses small “teaching labels” (like: `SECTION: Hero`) placed on many elements.
- You can turn them on/off with: **Toggle: Show/Hide Teaching Labels**

### Theme
- Click **Theme Toggle** to switch Light/Dark.
- Theme choice is saved in localStorage.

### Demo form and modal
- The form is a safe demo: it does not really submit anywhere.
- The modal uses the HTML `<dialog>` element.

---

## Student exercises (ideas)

1. Change the page title and brand text.
2. Add a new `<section>` with a new card.
3. Add a new nav link to that section.
4. Change spacing and border radius in `styles.css`.
5. Add a new button and make it do something in `main.js`.
