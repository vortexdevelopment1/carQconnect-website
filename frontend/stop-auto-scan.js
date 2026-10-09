const fs = require('fs');

let demo = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');

const effectToRemove = `  useEffect(() => {
    const interval = setInterval(() => {
      handleSimulate();
    }, 4000);

    const timeout = setTimeout(() => {
      handleSimulate();
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);`;

demo = demo.replace(effectToRemove, '');
fs.writeFileSync('components/qr/qr-scanner-demo.tsx', demo, 'utf8');
