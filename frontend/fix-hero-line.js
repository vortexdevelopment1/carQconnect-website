const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

const replacement = `.hero__title {
        font-size: clamp(24px, 7vw, 34px);
        line-height: 1.08;
        text-align: right;
        align-self: flex-end;
        overflow-wrap: break-word;
    }
    .hero__line, .hero__word {
        white-space: normal !important;
        display: inline !important;
    }`;

content = content.replace(/\.hero__title \{\s*font-size: clamp\(20px, 6vw, 32px\);\s*line-height: 1\.08;\s*text-align: right;\s*align-self: flex-end;\s*text-align: right;\s*\}/, replacement);

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
