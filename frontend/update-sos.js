const fs = require('fs');
let content = fs.readFileSync('components/sections/sos-section.tsx', 'utf8');

// Step 4 label
content = content.replace(
  '{ icon: LifeBuoy, label: "Emergency support" }',
  '{ icon: LifeBuoy, label: "Help within reach" }'
);

// Description paragraph
content = content.replace(
  'description="A deliberate press-and-hold starts the SOS flow ?" capturing your location, notifying the emergency contacts you\'ve configured, and keeping you connected to emergency support."',
  'description="A deliberate press-and-hold starts the SOS flow, capturing your location, notifying the emergency contacts you\'ve configured, and putting emergency calling and nearby help within reach."'
);

// Replace Bullets
const oldBullets = `<ul className="mt-8 space-y-3 text-[14px] text-neutral-700">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Press-and-hold activation reduces accidental triggers
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Latest location captured and shared with family contacts
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Short cancellation window before it becomes an active incident
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Emergency calling shortcuts and nearby emergency points
            </li>
          </ul>`;

const newBullets = `<ul className="mt-8 space-y-3 text-[14px] text-neutral-700">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Press-and-hold activation reduces accidental triggers
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Latest location captured and shared with your emergency contacts
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              A short cancellation window helps avoid false alarms
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Emergency calling shortcuts and nearby emergency points
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Add several emergency contacts and mark primary and secondary
            </li>
          </ul>`;

content = content.replace(oldBullets, newBullets);

fs.writeFileSync('components/sections/sos-section.tsx', content, 'utf8');
