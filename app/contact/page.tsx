"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "bf2fe542-77a6-42dc-93ce-6b58b93b0b15");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      setErrorMessage("Erreur de connexion au serveur. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0d233a] text-white p-6 md:p-12">
      <div className="max-w-2xl mx-auto w-full">
        {/* Bouton retour */}
        <Link href="/" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-8 gap-2">
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>

        <h1 className="text-3xl font-bold mb-2">Contactez-nous</h1>
        <p className="text-gray-300 mb-8 text-sm">
          Envoyez-nous un message, il sera acheminé directement vers notre boîte de réception.
        </p>

        {submitted ? (
          <div className="bg-emerald-800/50 border border-emerald-500 p-6 rounded-2xl text-center space-y-4">
            <h2 className="text-xl font-bold text-emerald-200">Message envoyé avec succès !</h2>
            <p className="text-sm text-gray-200">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-white text-[#0d233a] font-semibold rounded-xl text-sm hover:bg-gray-100 transition-all"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-3xl shadow-xl p-6 md:p-8 space-y-4">
            {/* Champ Nom */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Votre Nom</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ex: Jean Dupont"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d233a]"
              />
            </div>

            {/* Champ E-mail */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Votre Adresse E-mail</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Ex: jean.dupont@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d233a]"
              />
            </div>

            {/* Champ Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Votre Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Écrivez votre message ici..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d233a]"
              ></textarea>
            </div>

            {/* Message d'erreur éventuel */}
            {errorMessage && (
              <p className="text-red-600 text-sm text-center font-medium">{errorMessage}</p>
            )}

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#0d233a] hover:bg-[#143454] text-white font-semibold shadow-lg transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}