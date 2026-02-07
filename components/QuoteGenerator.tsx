import React, { useState } from 'react';
import { generateCampaignQuotes, GeneratedQuote } from '../services/geminiService';

interface QuoteGeneratorProps {
  onSelectQuote: (quote: string) => void;
}

const TOPICS = [
  "Algemeen",
  "Verkeer & Parkeren",
  "Veiligheid & Handhaving",
  "Wonen",
  "Ondernemen & Werk",
  "Energie & Duurzaamheid",
  "Sport & Cultuur"
];

export const QuoteGenerator: React.FC<QuoteGeneratorProps> = ({ onSelectQuote }) => {
  const [selectedTopic, setSelectedTopic] = useState("Algemeen");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuotes, setGeneratedQuotes] = useState<GeneratedQuote[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const quotes = await generateCampaignQuotes(selectedTopic);
      setGeneratedQuotes(quotes);
    } catch (e) {
      setError("Er ging iets mis bij het genereren. Controleer of de API key actief is.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-4">
      <h3 className="text-vvd-blue font-bold text-md mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
        AI Quote Generator
      </h3>
      
      <div className="flex gap-2 mb-4">
        <select 
          className="flex-grow p-2 border border-gray-300 rounded text-sm focus:border-vvd-orange outline-none"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <button 
          onClick={handleGenerate}
          disabled={isLoading}
          className={`px-4 py-2 text-sm font-bold text-white rounded transition ${
            isLoading ? 'bg-gray-400' : 'bg-vvd-blue hover:bg-blue-800'
          }`}
        >
          {isLoading ? '...' : 'Genereer'}
        </button>
      </div>

      {error && <p className="text-red-500 text-xs mb-2">{error}</p>}

      <div className="space-y-3">
        {generatedQuotes.map((item, idx) => (
          <div 
            key={idx}
            onClick={() => onSelectQuote(item.quote)}
            className="bg-white p-3 rounded border border-gray-200 hover:border-vvd-orange cursor-pointer transition group"
          >
            <p className="font-bold text-vvd-blue text-lg leading-tight mb-2 group-hover:text-vvd-orange">
              “{item.quote}”
            </p>
            <p className="text-xs text-gray-500 italic">
              <span className="font-semibold">Bron:</span> {item.sourceText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};