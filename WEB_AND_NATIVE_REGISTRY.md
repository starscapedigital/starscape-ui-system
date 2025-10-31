Short answer: **yes—for web & Electron “as-is”, and for Expo with a native track.**
The trick is to make your registry **multi-target**:

* **Web (Next.js) & Desktop (Electron/Vite/React):** share one **web** implementation (Radix + shadcn + Tailwind). Electron is just Chromium, so it uses the exact same components.
* **Mobile (Expo/React Native):** use a **native** implementation (no Radix; NativeWind + RN primitives). Same API, different internals.

```
tokens/                # design tokens (web CSS + native JS)
tailwind-preset/       # Tailwind preset (web/Electron)
ui-web/                # shadcn/Radix components (React DOM)
ui-native/             # NativeWind components (React Native)
ui-registry-web/       # optional: shadcn-style templates + CLI
ui-registry-native/    # optional: native templates + CLI
```

## Tokens once, two builds

* **Web/Electron:** `@starscape/tokens/css` → exports CSS variables (HSL) you load globally.
* **Native:** `@starscape/tokens/native` → exports a JS/TS object `{ colors, radii, spacing }`.

`packages/tokens/package.json`

```json
{
  "name": "@starscape/tokens",
  "exports": {
    ".": "./dist/index.js",
    "./css": "./dist/tokens.css",
    "./native": "./dist/native.js"
  }
}
```

## Web & Electron (shared)

* **`@starscape/ui-web`**: your shadcn wrappers around **Radix** using **Tailwind** with your preset.
* **`@starscape/tailwind-preset`**: maps CSS vars → Tailwind theme.
* Electron app just imports `@starscape/ui-web` and includes the same `globals.css` with tokens.

```tsx
// Next & Electron
import "@starscape/tokens/css";        // registers :root vars
import starscapePreset from "@starscape/tailwind-preset";
import { Button, Dialog } from "@starscape/ui-web";
```

## Expo / React Native (separate impl)

* **No Radix on RN.** Use RN primitives (`Pressable`, `Modal`/`react-native-modal`, `react-native-gesture-handler`, `react-native-reanimated`) and **NativeWind** for Tailwind-style classes.
* Keep **the same component API** where possible (`<Button variant="cosmic" size="lg" />`), but render native primitives.
* Use **class-variance-authority** or **tailwind-variants** to generate `className` strings. NativeWind will consume them.
* Provide a `ThemeProvider` that reads tokens from `@starscape/tokens/native`.

```tsx
// mobile/App.tsx
import { StarscapeProvider } from "@starscape/ui-native";
import tokens from "@starscape/tokens/native";
export default function App() {
  return <StarscapeProvider tokens={tokens}>{/* ... */}</StarscapeProvider>;
}
```

```tsx
// packages/ui-native/src/button.tsx
import { Pressable, Text } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "./cn"; // simple joiner
// NativeWind will style these classes
const buttonVariants = cva(
  "items-center justify-center rounded-2xl",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-muted text-foreground",
        ghost: "bg-transparent",
        destructive: "bg-destructive text-destructive-foreground",
        cosmic: "bg-accent text-white" // optionally add a gradient view wrapper
      },
      size: { sm: "h-8 px-3", md: "h-10 px-4", lg: "h-12 px-6" }
    },
    defaultVariants: { variant: "default", size: "md" }
  }
);
export function Button({ className, variant, size, children, ...props }) {
  return (
    <Pressable className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <Text className="font-medium">{children}</Text>
    </Pressable>
  );
}
```

> **Native gradients & glow:** wrap with `react-native-linear-gradient` for “cosmic” and add **shadow** classes via NativeWind (`shadow` / `shadow-lg`) or platform-specific styles.

## Tailwind / NativeWind config

* **Web/Electron:** Tailwind uses your preset (maps CSS vars).
* **Expo:** **NativeWind** `tailwind.config.js` should mirror your scales; you **cannot rely on CSS variables** on RN. Generate the same color names from tokens at build time (export a static palette in the preset or script-generate a `tailwind.native.config.js`).

Tip: have `@starscape/tailwind-preset` export two presets:

* `web` (uses `hsl(var(--sc-...))`)
* `native` (injects resolved hex/HSL literals from `@starscape/tokens/native`)

# Using & updating across all apps

### Make a change

* **Web/Electron change:** edit `packages/ui-web` component (or template in `ui-registry-web`).
* **Expo change:** edit `packages/ui-native` counterpart (or template in `ui-registry-native`).
* If it’s a **brand token** update, change `packages/tokens` (and bump both presets as needed).

### Publish (Changesets)

```bash
pnpm changeset         # mark @starscape/ui-web or @starscape/ui-native or tokens/preset
pnpm changeset version
pnpm -w build
pnpm -w publish        # npm or GitHub Packages
```

### Update apps

* **Next/Electron:** `pnpm add @starscape/ui-web@latest @starscape/tailwind-preset@latest @starscape/tokens@latest`
* **Expo:** `pnpm add @starscape/ui-native@latest @starscape/tokens@latest nativewind@latest`

  * If you changed the native Tailwind theme, also bump the native preset or re-generate `tailwind.config`.

# Optional: template registries (shadcn-style)

If you prefer **copy-in source** per app:

* `@starscape/ui-registry-web`: ships `templates/*.tsx` using Radix; `pnpm ui:add button`.
* `@starscape/ui-registry-native`: ships RN templates (`Pressable`, `react-native-modal`, etc.); `pnpm ui:add button --platform=native`.
* Provide `--force` (overwrite) and `--diff` (safe sync) modes.

# Gotchas & tips

* **Radix is web-only.** Don’t try to share Radix across RN. Keep parity at the **prop API** level.
* **Animations:** Web/Electron use CSS keyframes; RN use Reanimated for matching feel.
* **Focus/ring styles:** web via `:focus-visible` + Tailwind ring; RN via `Pressable` states & shadows.
* **Icons:** choose a shared icon set with **web** and **RN** targets (e.g., phosphor/react & phosphor/react-native) behind a tiny adapter.
* **Exports map:** make `@starscape/ui` a facade if you want a single import:

  ```json
  {
    "name": "@starscape/ui",
    "exports": {
      "react-native": "./native/index.js",
      "default": "./web/index.js"
    }
  }
  ```

  Then:

  * Web/Electron: `import { Button } from "@starscape/ui"`
  * Expo: `import { Button } from "@starscape/ui"` (Metro resolves `react-native` condition)

# TL;DR

* **One registry, two targets:** `ui-web` (Radix/shadcn/Tailwind) for Next.js & Electron; `ui-native` (NativeWind + RN primitives) for Expo.
* **One tokens package, dual outputs:** CSS variables for web, JS object for native.
* **Publish → bump apps.** Or offer per-platform template registries if you want copy-in code.
