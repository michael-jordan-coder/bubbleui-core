# bubbleui-core
**Make your UI breathe.** A tiny Web Component that turns rigid breakpoints into fluid, physics‑lite balance.

[![npm version](https://badge.fury.io/js/%40daniel-dada%2Fbubbleui-core.svg)](https://badge.fury.io/js/%40daniel-dada%2Fbubbleui-core)
[![npm downloads](https://img.shields.io/npm/dm/@daniel-dada/bubbleui-core)](https://www.npmjs.com/package/@daniel-dada/bubbleui-core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Security Policy](https://img.shields.io/badge/Security-Policy-blue.svg)](SECURITY.md)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-green.svg)](package.json)

## Install
```bash
npm i bubbleui-core
# or: pnpm add bubbleui-core
# or: bun add bubbleui-core
```

## Use (vanilla, no build needed)
```html
<script type="module">
  import 'bubbleui-core'; // registers <bubble-frame>
</script>

<bubble-frame comfort="860" k="0.65">
  <div class="cards">
    <article class="card">...</article>
  </div>
</bubble-frame>

<style>
  :root{
    --fs: clamp(14px, 1.8vw, 18px);
    --gap: clamp(8px, 1.6vw, 18px);
    --radius: clamp(12px, 2vw, 22px);
    --padY: clamp(10px, 1.2vw, 16px);
    --padX: clamp(12px, 1.6vw, 18px);
  }
  .cards{ display:flex; flex-wrap:wrap; gap: calc(var(--gap) * var(--bubble-gapMul, 1)) }
  .card{
    transform: scale(var(--bubble-scale, 1));
    border-radius: calc(var(--radius) * var(--bubble-radiusMul, 1));
    padding: calc(var(--padY) * var(--bubble-padMul, 1)) calc(var(--padX) * var(--bubble-padMul, 1));
    font-size: calc(var(--fs) * var(--bubble-fsMul, 1));
    line-height: calc(1.45 * var(--bubble-lhMul, 1));
    letter-spacing: var(--bubble-lsEm, 0em);
    box-shadow: 0 6px 18px rgba(0,0,0,var(--bubble-shadowA, .35));
    border: 1px solid rgba(255,255,255,var(--bubble-strokeA, .15));
  }
</style>
```

## Props
- `comfort` — width (px) above which global tension≈0 (default: 860)
- `k` — sensitivity of tension increase as width drops (default: 0.65)

## What it does
- Computes **global tension** from container width vs `comfort`.
- Computes **local tension** per row (crowding) for children.
- Writes CSS variables for you to map to styles. Everything animates smoothly.

## TypeScript
Importing `bubbleui-core` registers the element and provides ambient types for JSX.
