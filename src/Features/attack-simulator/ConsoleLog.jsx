import React from 'react';

const ConsoleLog = ({ logs }) => {
  return (
    <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs border border-slate-800 h-48 overflow-y-auto shadow-inner">
      <div className="text-slate-500 mb-2 border-b border-slate-900 pb-1 flex justify-between">
        <span>SECURITY_MONITOR // LOGS</span>
        <span className="animate-pulse text-emerald-400">● LIVE</span>
      </div>
      <div className="space-y-1">
        {logs.length === 0 ? (
          <p className="text-slate-600">Waiting for system traffic...</p>
        ) : (
          logs.map((log, index) => (
            <p key={index} className="leading-relaxed">
              <span className="text-slate-500">[{log.time}]</span>{' '}
              <span className={
                log.type === 'error' ? 'text-rose-400 font-bold' :
                log.type === 'success' ? 'text-emerald-400' : 'text-sky-400'
              }>
                {log.message}
              </span>
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default ConsoleLog;