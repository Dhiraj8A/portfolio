import React, { useState } from 'react';
import ConsoleLog from './ConsoleLog';
import Button from '../../Component/Button';

const AttackDashboard = () => {
  const [logs, setLogs] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [rateLimitActive, setRateLimitActive] = useState(true);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [{ time: timestamp, message, type }, ...prev]);
  };

  const handleLaunchAttack = () => {
    if (isLocked) {
      addLog('⚠️ Request dropped: IP address blocked by Rate Limiter Policy.', 'error');
      return;
    }

    const currentAttempts = attempts + 1;
    setAttempts(currentAttempts);
    
    addLog(`🚨 POST /api/v1/auth/login - Invalid credentials (Attempt ${currentAttempts})`, 'error');

    if (rateLimitActive && currentAttempts >= 3) {
      setIsLocked(true);
      addLog('🛑 CRITICAL: Brute-force threshold breached! Rate limiting active.', 'error');
      addLog('🔒 SECURITY ACTION: IP address jailed for 10 seconds via Cryptographic Control.', 'info');
      
      // Auto cooldown block
      setTimeout(() => {
        setIsLocked(false);
        setAttempts(0);
        addLog('🔄 System Reset: Rate limiter pool flushed. IP unblocked.', 'success');
      }, 10000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-800">
        <div>
          <h4 className="text-sm font-bold text-slate-200">2FA Defensive Guard Module</h4>
          <p className="text-xs text-slate-500">Simulate brute-force attacks to test mitigation handling.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Rate Limiter:</span>
          <button 
            onClick={() => {
              setRateLimitActive(!rateLimitActive);
              addLog(`Config updated: Rate limiting policy set to ${!rateLimitActive ? 'ENABLED' : 'DISABLED'}`, 'info');
            }}
            className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
              rateLimitActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }`}
          >
            {rateLimitActive ? 'ACTIVE' : 'BYPASSED'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-950 p-6 rounded-lg border border-slate-800/80 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <label className="block text-xs font-mono text-slate-500 mb-1">TARGET_ENDPOINT</label>
              <input type="text" readOnly value="https://api.dhiraj.dev/auth/login" className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-1.5 text-xs font-mono text-slate-400 focus:outline-none" />
            </div>
            <div className="mb-6">
              <label className="block text-xs font-mono text-slate-500 mb-1">PAYLOAD_INJECTION</label>
              <div className="bg-slate-900 p-3 rounded font-mono text-xs text-slate-400 border border-slate-800">
                <span className="text-emerald-400">"username"</span>: <span className="text-amber-300">"admin"</span>,<br />
                <span className="text-emerald-400">"password"</span>: <span className="text-amber-300">"password_injector_v1"</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleLaunchAttack}
            variant={isLocked ? 'secondary' : 'primary'}
            className="w-full"
          >
            {isLocked ? '⛔ System Locked' : '💥 Inject Brute-Force Payload'}
          </Button>
        </div>

        <ConsoleLog logs={logs} />
      </div>
    </div>
  );
};

export default AttackDashboard;