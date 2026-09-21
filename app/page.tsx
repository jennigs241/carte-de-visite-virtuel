import Image from "next/image";
import Link from "next/link";
import { Globe, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen items-center bg-[#0d233a] font-sans text-white">
      {/* En-tête de l'entreprise */}
      <header className="flex flex-col items-center justify-center pt-8 pb-12 px-6 text-center w-full bg-[#0d233a]">
        <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg mb-4 flex items-center justify-center overflow-hidden relative">
          <Image
            src="/image/LOGO REFAIS..pdf.jpg"
            alt="Logo Ogooue Consulting"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold tracking-wider text-white">
          OGOOUE CONSULTING
        </h1> 
        <p className="text-sm text-gray-300 mt-1">
          la stratégie au coeur de vos opérations
        </p> <br />  <br />
      </header>

      {/* Corps principal avec la carte de profil et les liens */}
      <main className="flex flex-1 w-full max-w-md flex-col items-center px-4 pb-12">
        {/* Carte de profil blanche */}
        <div className="w-full bg-white text-gray-900 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center -mt-6 mb-6">
          <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden -mt-16 mb-3 bg-gray-200 relative">
            <Image
              src="/image/1789653287407 - Copie.jpg"
              alt="Mr Beaugard Fongbemi - CEO"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            Mr Beaugard Fongbemi
          </h2>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-1">
            CEO
          </p>
        </div>

        {/* Liste des boutons de contact */}
        <div className="w-full flex flex-col gap-4">
          {/* Site Web */}
          <a
            href="https://ogoouegroupe.ga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-2xl bg-[#0d233a] hover:bg-[#143454] border border-blue-900/40 shadow-lg transition-all gap-4 group"
          >
            <div className="p-2 rounded-xl bg-blue-950/80 text-white group-hover:scale-110 transition-transform">
              <Globe size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-gray-400 tracking-wider">
                SITE WEB
              </p>
              <p className="text-sm font-medium text-white">
                ogoouegroupe.ga
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/241062173838"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-2xl bg-[#0d233a] hover:bg-[#143454] border border-blue-900/40 shadow-lg transition-all gap-4 group"
          >
            <div className="p-2 rounded-xl bg-blue-950/80 text-white group-hover:scale-110 transition-transform">
              <Phone size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-gray-400 tracking-wider">
                WHATSAPP
              </p>
              <p className="text-sm font-medium text-white">
                +241 062 173 838
              </p>
            </div>
          </a>

          {/* Mail / Page de Contact interne */}
          <Link
            href="/contact"
            className="flex items-center p-4 rounded-2xl bg-[#0d233a] hover:bg-[#143454] border border-blue-900/40 shadow-lg transition-all gap-4 group"
          >
            <div className="p-2 rounded-xl bg-blue-950/80 text-white group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-gray-400 tracking-wider">
                ÉCRIVEZ-MOI
              </p>
              <p className="text-sm font-medium text-white">
                Envoyer un message direct
              </p>
            </div>
          </Link>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/beaugard-fongbemi-779b01133/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-2xl bg-[#0d233a] hover:bg-[#143454] border border-blue-900/40 shadow-lg transition-all gap-4 group"
          >
            <div className="p-2 rounded-xl bg-blue-950/80 text-white group-hover:scale-110 transition-transform flex items-center justify-center">
              <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-gray-400 tracking-wider">
                LINKEDIN
              </p>
              <p className="text-sm font-medium text-white">
                Beaugard Fongbemi
              </p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}