import React, { useState } from 'react';
import { InputForm } from './components/InputForm';
import { TemplatePreview } from './components/TemplatePreview';
import { FormData } from './types';
import { DEFAULT_QUOTE } from './constants';

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    spot: '',
    quote: DEFAULT_QUOTE,
    photoUrl: null,
  });

  return (
    <div className="min-h-screen bg-[#F0F2F5] pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-vvd-blue">
            VVD Amersfoort <span className="text-vvd-orange">Generator</span>
          </h1>
          <div className="text-sm text-gray-500 font-bold">
            GR2026 Campagne
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          
          {/* Input Section */}
          <section>
            <InputForm 
              formData={formData} 
              setFormData={setFormData}
            />
          </section>

          {/* Preview Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Preview Templates (Instagram 4:5)</h2>
                <button 
                  onClick={() => window.print()}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black transition text-sm font-bold"
                >
                  Opslaan als PDF / Print
                </button>
            </div>
            
            <TemplatePreview data={formData} />
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;