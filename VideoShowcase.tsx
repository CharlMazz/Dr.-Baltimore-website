@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --color-primary: #dc2626;
  --color-primary-hover: #b91c1c;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-black text-white antialiased;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .text-3d {
    text-shadow: 0.04em 0.04em 0px rgba(0, 0, 0, 0.8), 0.08em 0.08em 0px rgba(0, 0, 0, 0.4);
  }

  .text-3d-primary {
    text-shadow: 0.04em 0.04em 0px rgba(185, 28, 28, 0.5), 0.08em 0.08em 0px rgba(0, 0, 0, 0.6);
  }
}
