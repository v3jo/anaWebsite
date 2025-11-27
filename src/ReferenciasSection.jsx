import  { useState } from 'react';

const ReferenciasSection= () => {

    const testimonials = [
    {
      id: 1,
      name: "Raquel",
      location: "Guayaquil, Ecuador",
      text: "Estaba buscando un psicólogo online para un momento difícil que me estaba costando atravesar. Hoy puedo decir que fue la mejor decisión que tomé gracias a que me abrí a pedir ayuda psicológica. Trabajé por tres meses en mí misma y puedo decir que no hay nada igual.",
      date: "15 - 05 - 2024",
    },
    {
      id: 2,
      name: "Andrés G.",
      location: "Madrid, España",
      text: "La terapia me ayudó a encontrar claridad en un momento de mucha confusión profesional. La psicóloga es muy empática y sus herramientas fueron clave para superar mis bloqueos.",
      date: "01 - 04 - 2024",
    },
    {
        id: 3,
        name: "María F.",
        location: "Bogotá, Colombia",
        text: "Nunca pensé que la terapia online sería tan efectiva. Me siento más conectada conmigo misma y he aprendido a gestionar mejor mi ansiedad. ¡Totalmente recomendable!",
        date: "20 - 03 - 2024",
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const goToNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <>
    <section className="bg-[#F7F7F4] py-25 px-4 pb-5  "> {/* Fondo blanco, padding vertical */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Lo que dicen mis pacientes
      </h2>

      <div className="relative max-w-4xl mx-auto flex items-center justify-between">
        {/* Botón Izquierdo */}
        <button
          onClick={goToPrev}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 absolute -left-10 z-10"
        >
          &larr;
        </button>

        {/* Contenido del Testimonio */}
        <div className="flex-1 text-center px-12"> {/* Añadí px para evitar que el texto se pegue a las flechas */}
          <p className="text-xl font-semibold mb-2">
            {currentTestimonial.name}
          </p>
          <p className="text-gray-600 text-sm mb-6">
            {currentTestimonial.location}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            {currentTestimonial.text}
          </p>
          <p className="text-gray-500 text-xs">
            {currentTestimonial.date}
          </p>
        </div>

        {/* Botón Derecho */}
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 absolute -right-10 z-10"
        >
          &rarr;
        </button>
      </div>
    </section>
    </>
  )
}

export default ReferenciasSection