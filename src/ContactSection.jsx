// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-[#EAE0D5] py-16 px-4"> {/* Fondo gris cálido, padding vertical */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#535353]">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Contacta conmigo para agendar una primera sesión o resolver cualquier duda. Estoy aquí para escucharte y ayudarte a encontrar el bienestar.
        </p>

        {/* Formulario de Contacto */}
        <form 
          action="https://formspree.io/f/xwpklajj" // ⚠️ ¡IMPORTANTE: Reemplaza 'tuIDpersonal' con tu ID de Formspree!
          method="POST" 
          className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto"
        >
          {/* Campo: Nombre */}
          <div className="mb-6 text-left">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84A98C]"
              required
            />
          </div>

          {/* Campo: Correo Electrónico */}
          <div className="mb-6 text-left">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84A98C]"
              required
            />
          </div>

          {/* Campo: Mensaje */}
          <div className="mb-6 text-left">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
              Tu Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84A98C]"
              required
            ></textarea>
          </div>

          {/* Botón de Envío */}
          <button
            type="submit"
            className="w-full bg-[#84A98C] text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition duration-300 shadow-md"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;