import ProjectGallery from '../components/ProjectGallery';

const PuntoCinco = () => {
  const images = [
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/PUNTO%20CINCO/PROYECTO-01.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/PUNTO%20CINCO/PROYECTO-02.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/PUNTO%20CINCO/PROYECTO-03.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/PUNTO%20CINCO/PROYECTO-04.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/PUNTO%20CINCO/PROYECTO-05.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/PUNTO%20CINCO/PROYECTO-06.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/PUNTO%20CINCO/PROYECTO-07.jpg',
  ];

  const descriptions = [
    'Estudio creativo interdisciplinar que fusiona la identidad de marca con el diseño de entornos. Su propósito es crear experiencias coherentes y completas que generen un impacto poderoso y memorable que las personas puedan ver, sentir y vivir.',
    'Además de crear una conexión emocional significativa y una narrativa que el usuario pueda vivir y sentir en un entorno físico memorable.',
  ];

  return (
    <ProjectGallery
      number="05"
      title="Punto Cinco"
      strategy="Identidad visual"
      year="2025"
      location="Puebla, Pue."
      descriptions={descriptions}
      mainQuote="Comunicación de la forma, espacio y la dimensión."
      images={images}
    />
  );
};

export default PuntoCinco;
