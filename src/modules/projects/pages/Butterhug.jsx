import ProjectGallery from '../components/ProjectGallery';

const Butterhug = () => {
  const images = [
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/BUTTERHUG/proyectos%20para%20WEB-15.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/BUTTERHUG/proyectos%20para%20WEB-16.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/BUTTERHUG/proyectos%20para%20WEB-17.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/BUTTERHUG/proyectos%20para%20WEB-18.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/BUTTERHUG/proyectos%20para%20WEB-19.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/BUTTERHUG/proyectos%20para%20WEB-20.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/BUTTERHUG/proyectos%20para%20WEB-21.jpg',
  ];

  const descriptions = [
    'Butterhug es una galletería especializada en crear piezas de repostería de gran formato, caracterizadas por su textura perfecta: un exterior ligeramente crujiente que resguarda un corazón suave, denso y cargado de sabor.',
    'No solo se limita a vender galletas; ofrece una experiencia sensorial. Cada producto es elaborado con ingredientes de alta calidad y una técnica que prioriza el volumen y la generosidad de los rellenos.',
  ];

  return (
    <ProjectGallery
      number="04"
      title="Butterhug"
      strategy="Identidad visual"
      year="2025"
      location="Puebla, Pue."
      descriptions={descriptions}
      mainQuote="Una identidad creada para ser saboreada con la vista."
      images={images}
    />
  );
};

export default Butterhug;
