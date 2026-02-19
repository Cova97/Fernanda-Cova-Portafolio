import ProjectGallery from '../components/ProjectGallery';

const GasGP = () => {
  const images = [
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/GAS%20GP/proyectos%20para%20WEB-22.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/GAS%20GP/proyectos%20para%20WEB-23.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/GAS%20GP/proyectos%20para%20WEB-24.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/GAS%20GP/proyectos%20para%20WEB-25.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/GAS%20GP/proyectos%20para%20WEB-26.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/GAS%20GP/proyectos%20para%20WEB-27.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/GAS%20GP/proyectos%20para%20WEB-28.jpg',
  ];

  const descriptions = [
    'GAS GP, se dedica a la venta de gas LP con un enfoque en la transparencia y excelencia en el servicio. Se compromete a proporcionar litros completos, atención personalizada y operaciones eficientes, asegurando la satisfacción y confianza de sus clientes.',
    'Buscan ser el aliado energético de hogares, transportes y comercios en Acapulco.',
  ];

  return (
    <ProjectGallery
      number="02"
      title="Gas GP"
      strategy="Identidad visual"
      year="2023"
      location="Acapulco, Gro."
      descriptions={descriptions}
      mainQuote="Facilitar el acceso seguro y confiable de Gas LP."
      images={images}
    />
  );
};

export default GasGP;
