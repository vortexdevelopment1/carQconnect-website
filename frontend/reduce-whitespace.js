const fs = require('fs');

// 1. app/(site)/trip-intelligence/page.tsx
let tiContent = fs.readFileSync('app/(site)/trip-intelligence/page.tsx', 'utf8');

// Reduce PageHeader top padding
tiContent = tiContent.replace(
  "style={{ paddingTop: 'clamp(80px, 12vw, 120px)' }}",
  "style={{ paddingTop: 'clamp(70px, 10vw, 96px)' }}"
);

// Reduce PageHeader bottom padding to 0
tiContent = tiContent.replace(
  'className="relative overflow-hidden pb-[16px]"',
  'className="relative overflow-hidden pb-0"'
);
// In case they didn't get the last update
tiContent = tiContent.replace(
  'className="relative overflow-hidden pb-[40px]"',
  'className="relative overflow-hidden pb-0"'
);

// Reduce Trip Planner section padding
tiContent = tiContent.replace(
  "style={{ paddingBottom: 'clamp(36px, 6vw, 64px)', paddingTop: 'clamp(16px, 3vw, 32px)' }}",
  "style={{ paddingBottom: 'clamp(24px, 4vw, 40px)', paddingTop: 'clamp(8px, 2vw, 24px)' }}"
);
tiContent = tiContent.replace(
  "style={{ paddingBlock: 'clamp(36px, 6vw, 64px)' }}",
  "style={{ paddingBottom: 'clamp(24px, 4vw, 40px)', paddingTop: 'clamp(8px, 2vw, 24px)' }}"
);
tiContent = tiContent.replace(
  "marginBottom: 'clamp(16px, 2.5vw, 24px)'",
  "marginBottom: 'clamp(8px, 1.5vw, 16px)'"
);

fs.writeFileSync('app/(site)/trip-intelligence/page.tsx', tiContent, 'utf8');

// 2. components/sections/ai-section.tsx
let aiContent = fs.readFileSync('components/sections/ai-section.tsx', 'utf8');
aiContent = aiContent.replace(
  "paddingBlock: 'clamp(36px, 6vw, 64px)'",
  "paddingBlock: 'clamp(20px, 4vw, 40px)'"
);
aiContent = aiContent.replace(
  "gap: 'clamp(24px, 5vw, 56px)'",
  "gap: 'clamp(16px, 3vw, 40px)'"
);
fs.writeFileSync('components/sections/ai-section.tsx', aiContent, 'utf8');

// 3. components/sections/voice-section.tsx
let voiceContent = fs.readFileSync('components/sections/voice-section.tsx', 'utf8');
voiceContent = voiceContent.replace(
  "paddingBlock: 'clamp(36px, 6vw, 64px)'",
  "paddingBlock: 'clamp(24px, 4vw, 40px)'"
);
voiceContent = voiceContent.replace(
  "marginTop: 'clamp(20px, 3vw, 32px)'",
  "marginTop: 'clamp(12px, 2vw, 20px)'"
);
fs.writeFileSync('components/sections/voice-section.tsx', voiceContent, 'utf8');

