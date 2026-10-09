const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const replacementCopy = `<div className="hero__copy">
        <h1 className="hero__title">
          <span className="hero__line">CONNECT YOUR VEHICLE</span>
          <span className="hero__line">PROTECT EVERY</span>
          <span className="hero__line">JOURNEY</span>
        </h1>
        <p className="hero__lede">
          <span className="hero__line">Monitor your vehicle, stay connected on every trip, and enable</span>
          <span className="hero__line">safer public interaction through smart QR, GPS tracking, and</span>
          <span className="hero__line">intelligent mobility technology.</span>
        </p>

        <a className="buy" href="/marketplace">
          <span className="buy__body">
            <span className="buy__label">Download App</span>
          </span>
        </a>
      </div>`;

content = content.replace(/<div className="hero__copy">[\s\S]*?<\/div>\s*<\/section>/, replacementCopy + '\n    </section>');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
