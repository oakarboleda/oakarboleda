import React, { useEffect, useState } from 'react';

const txt = [
  'Initializing boot sequence...',
  'FORCE: XX0022. ENCYPT://000.222.2345',
  'TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1',
  'RETRY: REINDEER FLOTILLA',
  'Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0',
  '================================================',
  'Priority 1 // local / scanning...',
  'scanning ports...',
  'BACKDOOR FOUND (23.45.23.12.00000000)',
  'BACKDOOR FOUND (13.66.23.12.00110000)',
  'BACKDOOR FOUND (13.66.23.12.00110044)',
  '...',
  '...',
  'BRUTE.EXE -r -z',
  '...locating vulnerabilities...',
  '...vulnerabilities found...',
  'MCP/> DEPLOY CLU',
  'SCAN: __ 0100.0000.0554.0080',
  'SCAN: __ 0020.0000.0553.0080',
  'SCAN: __ 0001.0000.0554.0550',
  'SCAN: __ 0012.0000.0553.0030',
  'SCAN: __ 0100.0000.0554.0080',
  'SCAN: __ 0020.0000.0553.0080',
];

const ConsoleComponent: React.FC = () => {
  const [lines, setLines] = useState<string[]>(txt);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setLines((prevLines) => {
        const updatedLines = [...prevLines];
        updatedLines.push(updatedLines.shift()!);
        return updatedLines;
      });
    }, 1000);

    return () => clearInterval(intervalID); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="console" className="text-slate-600">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default ConsoleComponent;
