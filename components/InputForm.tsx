import React, { useRef } from 'react';
import { FormData } from '../types';
import { CANDIDATES_LIST } from '../constants';
import { QuoteGenerator } from './QuoteGenerator';

interface InputFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const InputForm: React.FC<InputFormProps> = ({
  formData,
  setFormData,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCandidateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const candidate = CANDIDATES_LIST.find((c) => c.name === selectedName);
    if (candidate) {
      setFormData((prev) => ({
        ...prev,
        name: candidate.name,
        spot: candidate.spot,
        photoUrl: candidate.defaultPhotoUrl || null,
      }));
    } else {
        setFormData((prev) => ({ ...prev, name: '', spot: '', photoUrl: null }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setFormData((prev) => ({ ...prev, photoUrl: ev.target!.result as string }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleQuoteSelect = (quote: string) => {
    setFormData((prev) => ({ ...prev, quote }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl text-vvd-blue font-bold mb-4">Selecteer Kandidaat</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Candidate & Quote */}
        <div>
           <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Kandidaat</label>
            <select
              className="w-full p-3 border border-gray-300 rounded focus:border-vvd-orange outline-none text-lg"
              onChange={handleCandidateSelect}
              value={CANDIDATES_LIST.find(c => c.name === formData.name) ? formData.name : ""}
            >
              <option value="">-- Kies een kandidaat --</option>
              {CANDIDATES_LIST.map((c, idx) => (
                <option key={idx} value={c.name}>
                  {c.name} (#{c.spot})
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Quote</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:border-vvd-orange outline-none"
              rows={3}
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              placeholder="Bijv. Voor een veilig Amersfoort!"
            />
            
            {/* AI Quote Generator Integration */}
            <QuoteGenerator onSelectQuote={handleQuoteSelect} />
          </div>
        </div>

        {/* Right Column: Photo Override */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Foto Aanpassen (Optioneel)</label>
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              De standaard foto wordt automatisch geladen. Upload hieronder alleen als je een andere foto wilt gebruiken.
            </p>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border bg-white border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};