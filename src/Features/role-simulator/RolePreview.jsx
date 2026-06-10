import React, { useState } from 'react';

const RolePreview = () => {
  const [activeRole, setActiveRole] = useState('Admin');

  const rolesConfig = {
    Admin: {
      color: 'text-rose-400 border-rose-500/20 bg-rose-500/5',
      endpoints: ['GET /api/v1/admin/summary', 'POST /api/v1/courses/create', 'DELETE /api/v1/users/remove'],
      scope: 'Global management authority. Full write/delete permission blocks enabled.'
    },
    Faculty: {
      color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
      endpoints: ['GET /api/v1/faculty/courses', 'POST /api/v1/attendance/log', 'PUT /api/v1/grades/update'],
      scope: 'Academic tracking access scope. Grade modifications and roster evaluation limits apply.'
    },
    Student: {
      color: 'text-sky-400 border-sky-500/20 bg-sky-500/5',
      endpoints: ['GET /api/v1/student/profile', 'GET /api/v1/grades/view', 'POST /api/v1/courses/enroll'],
      scope: 'Self-contained sandbox space. Read access only across evaluation registries.'
    }
  };

  return (
    <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-sm font-bold text-slate-200">Spring Security JPA Microservice Monitor</h4>
          <p className="text-xs text-slate-500">Toggle identity tokens to verify dynamic endpoint mapping rules.</p>
        </div>
        
        {/* Toggle Controls */}
        <div className="flex rounded-md bg-slate-950 p-1 border border-slate-800">
          {Object.keys(rolesConfig).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-3 py-1 text-xs font-mono rounded transition-all ${
                activeRole === role 
                  ? 'bg-slate-800 text-emerald-400 font-bold shadow' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Scope Metadata */}
        <div className="md:col-span-1 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">JWT Token Scope</span>
          <div className={`p-4 rounded border font-mono text-xs ${rolesConfig[activeRole].color}`}>
            <p className="font-bold uppercase tracking-wider mb-2">// {activeRole} context</p>
            <p className="text-slate-400 leading-relaxed text-xs font-sans">{rolesConfig[activeRole].scope}</p>
          </div>
        </div>

        {/* Dynamic Endpoint Router Mapping */}
        <div className="md:col-span-2 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Authorized Endpoint Interceptors</span>
          <div className="bg-slate-950 p-4 rounded border border-slate-800 space-y-2 h-104px flex flex-col justify-center">
            {rolesConfig[activeRole].endpoints.map((endpoint, i) => {
              const [method, route] = endpoint.split(' ');
              return (
                <div key={i} className="flex items-center gap-3 font-mono text-xs">
                  <span className={`w-14 text-center px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    method === 'GET' ? 'bg-sky-500/10 text-sky-400' :
                    method === 'POST' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                  }`}>
                    {method}
                  </span>
                  <span className="text-slate-400 select-all">{route}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePreview;