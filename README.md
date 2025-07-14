# Spreadsheet

This project is a meticulously crafted spreadsheet-like interface built with **React**, **Tailwind CSS**, and **react-table**, replicating Figma specifications with pixel-perfect precision.

---

## ✨ Overview

This implementation delivers a fully interactive spreadsheet UI composed of individually aligned column components with accurate layout, spacing, and styles. Every element from the Figma design system—padding, color tokens, typography, spacing—has been respected down to the pixel.

---

## 🧱 Component Architecture

| Component         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `IndexColumn`     | Displays row numbers with perfect alignment to each row in the grid         |
| `JobRequestColumn`| Shows job descriptions with scroll and truncation support                   |
| `SubmittedColumn` | Contains submission dates, right-aligned, with full keyboard navigation     |
| `StatusColumn`    | Renders styled status badges with colored backgrounds and labels            |
| `SubmitterColumn` | Displays submitter names, truncated, hover-highlighted, and fully focusable |
| `UrlColumn`       | Underlined URLs, aligned, with click and keyboard support                   |
| `AssignedColumn`  | Styled assignments with tag-like visuals and hover interactions             |
| `AnswerBlock`     | Two-column priority and due date table, with semantic coloring              |
| `ExtractColumn`   | Shows monetary estimates, with symbol separation and content justification  |
| `AddColumn`       | Adds new rows; top cell has a centered "+" icon to suggest row insertion    |

---

## 🧭 Navigation Features

- **Cell focus navigation** across the entire grid using `Arrow` keys (`↑ ↓ ← →`)
- `tabIndex=0` ensures full keyboard accessibility
- `focus:ring-1 focus:ring-green-800` visually indicates selected cells
- Every cell has `data-coordinates` for focus targeting

---

## 🧩 Layout + Styles

- Layout mimics Figma-provided **grid dimensions** exactly (e.g., `124px`, `256px`, `32px` tall rows)
- All components align vertically and horizontally to form a unified spreadsheet
- Uses `space-y-[1px]` to simulate the 1px gap between rows
- Scrollable main layout (`w-max`) wrapped in a horizontally scrollable container
- Top bar (`SpreadsheetHeaderBar`) and toolbar row (`ToolbarRow`) replicate Figma spacing and structure

---

## 🛠️ Libraries Used

- [React](https://reactjs.org/)
- [react-table](https://tanstack.com/table/v8)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/icons) – for consistent, modern icons

---

## ✅ Accessibility

- All interactive cells are focusable
- Keyboard users can navigate the grid fluidly
- Icons have fallback text where applicable

---

## 🚧 TODO (Optional Enhancements)

- Shared context for global selection state
- Inline editing and saving
- Row/column drag-and-drop
- Keyboard-driven insertion/deletion

---

## 📁 Folder Structure (Simplified)

components/
├── AssignedColumn.tsx
├── JobRequestColumn.tsx
├── SubmittedColumn.tsx
├── SubmitterColumn.tsx
├── UrlColumn.tsx
├── StatusColumn.tsx
├── IndexColumn.tsx
├── AnswerBlock.tsx
├── ExtractColumn.tsx
├── AddColumn.tsx
└── ToolbarRow.tsx
pages/
└── Dashboard.tsx
