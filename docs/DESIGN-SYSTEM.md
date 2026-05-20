# Design System

## Color Palette

### Backgrounds (Dark Theme)
| Token              | Value     | Usage                     |
|-------------------|-----------|---------------------------|
| `bg-primary`      | `#0a0a0f` | Page background           |
| `bg-secondary`    | `#111118` | Cards, header, footer     |
| `bg-tertiary`     | `#1a1a24` | Hover states, inputs      |
| `bg-elevated`     | `#22222e` | Elevated surfaces         |
| `bg-surface`      | `#2a2a38` | Subtle backgrounds        |

### Accent (Premium Tech Green)
| Token              | Value                       | Usage                |
|-------------------|-----------------------------|----------------------|
| `accent`          | `#22c55e`                   | Primary actions      |
| `accent-hover`    | `#16a34a`                   | Hover state          |
| `accent-muted`    | `#15803d`                   | Muted accent         |
| `accent-subtle`   | `rgba(34, 197, 94, 0.1)`   | Subtle backgrounds   |
| `accent-glow`     | `rgba(34, 197, 94, 0.15)`  | Glow effects         |

### Text
| Token              | Value     | Usage                     |
|-------------------|-----------|---------------------------|
| `text-primary`    | `#f0f0f5` | Headings, body text       |
| `text-secondary`  | `#a0a0b0` | Descriptions, labels      |
| `text-tertiary`   | `#6b6b80` | Captions, placeholders    |
| `text-inverse`    | `#0a0a0f` | Text on accent buttons    |

### Status Colors
| Token     | Value     | Usage       |
|----------|-----------|-------------|
| `success`| `#22c55e` | Success     |
| `warning`| `#eab308` | Warning     |
| `error`  | `#ef4444` | Error/Sale  |
| `info`   | `#3b82f6` | Info/New    |

## Typography Scale

| Token        | Size       | Usage                    |
|-------------|------------|--------------------------|
| `display`   | `3.5rem`   | Hero headlines           |
| `h1`        | `2.5rem`   | Page titles              |
| `h2`        | `2rem`     | Section titles           |
| `h3`        | `1.5rem`   | Card titles, sub-sections|
| `h4`        | `1.25rem`  | Small headings           |
| `body-lg`   | `1.125rem` | Lead paragraphs          |
| `body`      | `1rem`     | Body text                |
| `body-sm`   | `0.875rem` | Secondary body, buttons  |
| `caption`   | `0.75rem`  | Captions, metadata       |
| `overline`  | `0.6875rem`| Overline labels          |

**Font Stack:**
- Sans: Geist Sans → Inter → system-ui
- Mono: Geist Mono → JetBrains Mono → ui-monospace

## Spacing Scale (4px base)

```
0    → 0
0.5  → 2px
1    → 4px
1.5  → 6px
2    → 8px
2.5  → 10px
3    → 12px
4    → 16px
5    → 20px
6    → 24px
8    → 32px
10   → 40px
12   → 48px
16   → 64px
20   → 80px
24   → 96px
```

## Border Radius
| Token   | Value    |
|---------|----------|
| `sm`    | `4px`    |
| `md`    | `8px`    |
| `lg`    | `12px`   |
| `xl`    | `16px`   |
| `2xl`   | `24px`   |
| `full`  | `9999px` |

## Shadows
- `sm`: Subtle card shadow
- `md`: Dropdown shadow
- `lg`: Modal shadow
- `xl`: Popover shadow
- `glow`: Accent glow (hover effects)
- `glow-lg`: Large accent glow (hero sections)

## Animation Guidelines

### Transitions
| Duration | Token     | Usage                              |
|----------|-----------|-------------------------------------|
| 150ms    | `fast`    | Hover states, color changes        |
| 250ms    | `normal`  | Expanding, collapsing, sliding     |
| 400ms    | `slow`    | Page transitions, modals           |

### Easing
- `ease-out`: Deceleration (UI feels snappy)
- `ease-in-out`: Smooth two-way transitions

### Motion Rules
1. Minimal and purposeful — no gratuitous animation
2. Prefer CSS transitions over JS animation
3. Use Framer Motion only for complex sequences (page transitions, staggered lists)
4. Respect `prefers-reduced-motion`
5. Loading states use `shimmer` animation
6. Hover effects: scale, glow, border color

## Custom Utilities

| Class          | Effect                                    |
|---------------|-------------------------------------------|
| `glass`       | Glassmorphism (blur + border)             |
| `glow`        | Accent glow shadow                        |
| `glow-lg`     | Large accent glow                         |
| `text-gradient`| Accent gradient text                     |
| `skeleton`    | Shimmer loading animation                 |
| `line-clamp-1`| Truncate to 1 line                       |
| `line-clamp-2`| Truncate to 2 lines                      |
| `line-clamp-3`| Truncate to 3 lines                      |
