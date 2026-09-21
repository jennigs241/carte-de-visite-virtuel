'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();
      if (response.status === 200) {
        setStatus('Message envoyé avec succès ! 🎉');
        e.target.reset(); // Réinitialise les champs du formulaire
      } else {
        setStatus(result.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      setStatus('Erreur de connexion au serveur.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      {/* Clé d'accès Web3Forms */}
      <input type="hidden" name="access_key" value="bf2fe542-77a6-42dc-93ce-6b58b93b0b15" />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
        <input 
          type="text" 
          name="name" 
          required 
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
        <input 
          type="email" 
          name="email" 
          required 
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea 
          name="message" 
          required 
          rows="4" 
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="Votre message..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white p-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>

      {status && (
        <p className={`text-center text-sm mt-3 ${status.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
}