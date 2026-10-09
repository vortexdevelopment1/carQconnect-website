const fs = require('fs');
let content = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');

const useEffectSnippet = `  useEffect(() => {
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
  }, []);

  const handleSimulate`;

content = content.replace('  const handleSimulate', useEffectSnippet);

const buttonSnippet = `<button
              onClick={handleSimulate}
              className="rounded-[10px] border-[1.5px] border-[#FF5A00] bg-white px-6 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-[#FF5A00] transition-colors duration-200 hover:bg-[#FF5A00] hover:text-white"
            >
              Simulate scan
            </button>`;

content = content.replace(buttonSnippet, '');

fs.writeFileSync('components/qr/qr-scanner-demo.tsx', content, 'utf8');
