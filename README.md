A modern, visually rich card-based UI component built for a **Digital Banking Platform** to showcase prospective customer segmentation across three distinct groups.

<img width="1881" height="951" alt="image" src="https://github.com/user-attachments/assets/6e1820da-c5bf-4b07-8c71-e8399d9c0af1" />


---

## Preview

The UI features a full-width section layout with:

- A bold typographic heading block on the left: **"Prospective customer segmentation"**
- Three image-backed cards (numbered 1, 2, 3) displayed side by side
- Each card presents a segment label, descriptive text, and a call-to-action button

---

## Features

- Numbered segment cards with full-bleed background images
- Overlay text with category labels (`Satisfied`, `UnderServed`, `UnderBanked`)
- Arrow CTA buttons for navigation or drill-down actions
- Pill-style navigation labels (`TARGET AUDIENCE`, `DIGITAL BANKING PLATFORM`)
- Responsive card layout with consistent spacing
- Clean monochromatic typographic section header

---

## Customer Segments

| # | Segment | Description |
|---|---------|-------------|
| 1 | **Satisfied** | Customers with high satisfaction and full access to banking products |
| 2 | **UnderServed** | Customers with limited access to banking products or services |
| 3 | **UnderBanked** | Customers who lack access to mainstream financial services |

---

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** CSS / Tailwind CSS
- **Dev Server:** `localhost:5173`
- **Language:** JavaScript / JSX

---

## Project Structure

```
cards-ui/
├── public/
│   └── assets/          # Card background images
├── src/
│   ├── components/
│   │   ├── Card.jsx         # Individual segment card component
│   │   ├── CardGrid.jsx     # Three-column card layout
│   │   └── SectionHeader.jsx # Left-side heading + description block
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/cards-ui.git
cd cards-ui
npm install







