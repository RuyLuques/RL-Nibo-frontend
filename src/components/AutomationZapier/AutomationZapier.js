import React, { useState, useEffect } from 'react';
import { ClipboardCheckIcon, GlobeIcon, LightBulbIcon, UsersIcon } from '@heroicons/react/outline';

function AutomationZapier() {
  const [automationData, setAutomationData] = useState([]);

  useEffect(() => {
    // Realize uma solicitação GET para a API
    fetch('http://localhost:8000/automationzapier')
      .then((response) => response.json())
      .then((data) => setAutomationData(data));
  }, []);

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Automation with Zapier</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {automationData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <ClipboardCheckIcon className="h-8 w-8 text-blue-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutomationZapier;
