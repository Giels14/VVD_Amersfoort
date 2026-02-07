import React from 'react';
import { FormData } from '../types';
import { LOGO_STANDARD } from '../constants'; // Alleen deze hebben we nog nodig

interface TemplatePreviewProps {
  data: FormData;
}

const PLACEHOLDER_IMG = "https://picsum.photos/600/750";
const SLOGAN = "Stem op 18 maart. VVD Amersfoort.";

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ data }) => {
  const photo = data.photoUrl || PLACEHOLDER_IMG;
  const aspectRatioClass = "aspect-[4/5]";

  const formatName = (name: string) => {
    const parts = name.split(' ');
    if (parts.length > 2) {
       return (
         <>
           <span className="block">{parts[0]}</span>
           <span className="block text-0.8em">{parts.slice(1).join(' ')}</span>
         </>
       )
    }
    return name;
  };

  const formatSpot = (spot: string) => {
    if (!spot) return "";
    if (spot.toLowerCase() === 'lijsttrekker') return spot;
    return spot.startsWith('#') ? spot : `#${spot}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
      
      {/* TEMPLATE 1: THE LEADER (BLUE) */}
      <div className={`relative bg-vvd-blue overflow-hidden shadow-2xl ${aspectRatioClass} flex flex-col group`}>
        <div 
          className="absolute inset-0 bg-gray-200"
          style={{
            backgroundImage: `url("${photo}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-vvd-blue via-vvd-blue/80 to-transparent opacity-90 mt-20" />

        {/* GEWIJZIGD: Nu LOGO_STANDARD */}
        <img 
            src={LOGO_STANDARD} 
            alt="VVD Logo" 
            className="absolute top-6 left-6 w-32 z-10 drop-shadow-lg" 
        />
        
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
            <div className="mt-auto">
                <span className="inline-block bg-vvd-orange text-white text-xs font-bold px-2 py-1 mb-2 uppercase tracking-wider">
                    {formatSpot(data.spot)}
                </span>
                <h2 className="text-white text-4xl font-bold leading-none mb-4 drop-shadow-lg break-words">
                    {formatName(data.name || "NAAM")}
                </h2>
                <div className="bg-white/10 backdrop-blur-sm border-l-4 border-vvd-orange p-4 mb-6">
                    <p className="text-white text-xl font-bold italic leading-tight">
                        “{data.quote || "Kies voor doen."}”
                    </p>
                </div>
                <p className="text-white/80 text-sm font-bold uppercase tracking-widest border-t border-white/20 pt-4">
                    {SLOGAN}
                </p>
            </div>
        </div>
      </div>


      {/* TEMPLATE 2: THE MODERN (WHITE) */}
      <div className={`relative bg-white overflow-hidden shadow-2xl ${aspectRatioClass} flex flex-col`}>
        <div className="h-[65%] w-full relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-gray-100"
                style={{
                    backgroundImage: `url("${photo}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%'
                }}
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
        </div>

        {/* Logo */}
        <img 
            src={LOGO_STANDARD} 
            alt="VVD Logo" 
            className="absolute top-6 right-6 w-28 z-10" 
        />

        <div className="flex-grow px-8 pb-8 flex flex-col justify-center relative">
            <h2 className="text-vvd-blue text-3xl font-bold leading-none mb-1">
                {data.name || "NAAM"}
            </h2>
            <p className="text-vvd-orange text-xl font-bold mb-4">
                {formatSpot(data.spot)}
            </p>
            
            <p className="text-gray-800 text-lg font-bold leading-tight mb-4">
                “{data.quote || "Kies voor doen."}”
            </p>

            <div className="mt-auto pt-4 border-t-2 border-vvd-blue flex justify-between items-center">
                 <span className="text-vvd-blue font-bold text-sm uppercase">VVD Amersfoort</span>
                 <span className="text-vvd-orange font-bold text-sm">Stem 18 maart</span>
            </div>
        </div>
      </div>


      {/* TEMPLATE 3: THE ACTIVIST (ORANGE) */}
      <div className={`relative bg-vvd-orange overflow-hidden shadow-2xl ${aspectRatioClass} flex flex-col`}>
         <div className="absolute top-0 right-0 w-[80%] h-full bg-vvd-blue transform skew-x-12 translate-x-20 opacity-10"></div>

         {/* GEWIJZIGD: Nu LOGO_STANDARD */}
         <img 
            src={LOGO_STANDARD} 
            alt="VVD Logo" 
            className="absolute top-6 left-6 w-32 z-10 drop-shadow-md" 
        />

         <div className="pt-24 px-8 relative z-10">
            <h2 className="text-white text-5xl font-bold leading-none mb-2 break-words drop-shadow-md">
                {data.name?.split(' ')[0] || "NAAM"}
            </h2>
            <h3 className="text-vvd-blue text-3xl font-bold leading-none mb-6">
                {data.name?.split(' ').slice(1).join(' ') || "ACHTERNAAM"} <span className="text-white">{formatSpot(data.spot)}</span>
            </h3>
         </div>

         <div className="absolute bottom-0 right-0 w-[85%] h-[60%] overflow-hidden bg-white rounded-tl-[100px] border-t-8 border-l-8 border-white shadow-2xl">
             <img src={photo} className="w-full h-full object-cover object-top" alt="Candidate" />
         </div>

         <div className="absolute bottom-8 left-6 w-[60%] z-20">
            <div className="bg-vvd-blue text-white p-4 shadow-lg rounded-tr-xl rounded-bl-xl">
                 <p className="text-lg font-bold leading-tight">
                    “{data.quote || "Kies voor doen."}”
                </p>
            </div>
         </div>
      </div>

    </div>
  );
};