# TypeScript Hello World

A simple TypeScript project that runs in the browser with a beautiful UI.

## Features

- TypeScript compilation to modern JavaScript
- Beautiful gradient background with glassmorphism design
- Time-based greetings (Good morning/afternoon/evening)
- Smooth animations
- Modern ES modules

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Open `index.html` in your browser, or use the start script:
   ```bash
   npm start
   ```

### Development

For development with automatic recompilation on file changes:
```bash
npm run watch
```

## Project Structure

```
typescriptBootstrap/
├── src/
│   └── app.ts          # Main TypeScript source code
├── dist/               # Compiled JavaScript (generated)
├── index.html          # HTML file to run in browser
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## How it Works

1. The TypeScript code in `src/app.ts` is compiled to JavaScript in the `dist/` folder
2. The HTML file loads the compiled JavaScript as an ES module
3. The application displays a greeting based on the current time of day
4. The UI features a modern glassmorphism design with smooth animations

## Customization

You can modify the greeting by editing the `getGreeting` method in `src/app.ts`. The method accepts optional parameters for customizing the name and time. 