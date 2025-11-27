
const  AboutSection = () => {
  return (
    <>
    <section className="bg-[#F7F7F4] relative  px-4  ">
        <div className="flex aling-content-center justify-center gap-5  pt-24 pb-48 px-4 ">
            <div className="flex flex-col justify-center content-center text-center py-18 px-14">
              <h2 className="titulo_h2"> Sobre Mi</h2>
              <p className="parrafo max-w-xl mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quidem modi ipsa perspiciatis officia veniam odio natus consequatur. Vel veritatis repellendus debitis eius nisi deserunt facere ipsa, velit nulla molestias?</p>
            </div>
            <article className="py-18 px-14">
              <img src="imagen_perfil_usuario.svg" alt="Foto_Perfil" width="430" height="430" />
            </article>
        </div>
        <div className="custom-shape-divider-bottom-1763566470 absolute bottom-0 w-full ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C 572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
    </svg>
</div>
    </section>
    
    </>
  )
}

export default AboutSection