const fs = require('fs');

const newCSS = `
@layer base {
  :root {
    --fs-h1: clamp(22px, 12px + 2.6vw, 54px);
    --fs-h2: clamp(19px, 11px + 1.9vw, 38px);
    --fs-h3: clamp(15px, 13px + 0.5vw, 20px);
    --fs-body: clamp(13px, 12px + 0.35vw, 17px);
    --fs-small: clamp(12px, 11.5px + 0.15vw, 14px);
  }

  main :where(h1):not([data-type-scale="off"] *) { 
    font-size: var(--fs-h1); 
    line-height: 1.12; 
    letter-spacing: -0.02em; 
    text-wrap: balance; 
    overflow-wrap: anywhere; 
  }
  
  main :where(h2):not([data-type-scale="off"] *) { 
    font-size: var(--fs-h2); 
    line-height: 1.15; 
    letter-spacing: -0.015em; 
    text-wrap: balance; 
    overflow-wrap: anywhere; 
  }
  
  main :where(h3):not([data-type-scale="off"] *) { 
    font-size: var(--fs-h3); 
    line-height: 1.25; 
    text-wrap: balance; 
  }
  
  main :where(p, li):not([data-type-scale="off"] *) { 
    font-size: var(--fs-body); 
    line-height: 1.6; 
  }
}
`;

fs.appendFileSync('app/(site)/globals.css', newCSS, 'utf8');
