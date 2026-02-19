import ProjectGallery from '../components/ProjectGallery';

const DGSeguros = () => {
  const images = [
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/DG%20SEGUROS/PROYECTO-08.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/DG%20SEGUROS/PROYECTO-09.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/DG%20SEGUROS/PROYECTO-10.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/DG%20SEGUROS/PROYECTO-11.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/DG%20SEGUROS/PROYECTO-12.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/DG%20SEGUROS/PROYECTO-13.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/DG%20SEGUROS/PROYECTO-14.jpg',
  ];

  const descriptions = [
    'DG Seguros entiende que proteger lo que se valora es una decisión que va más allá de contratar una póliza. Es un acto de confianza, responsabilidad y previsión que brinda tranquilidad para enfrentar lo inesperado.',
    'Con años de experiencia y un compromiso constante, ofrecen soluciones de aseguro claras, personalizadas y accesibles para personas y empresas que buscan respaldo.',
  ];

  return (
    <ProjectGallery
      number="03"
      title="DG Seguros"
      strategy="Identidad visual"
      year="2025"
      location="Puebla, Pue."
      descriptions={descriptions}
      mainQuote="Construir lazos basados en un compromiso duradero."
      images={images}
    />
  );
};

export default DGSeguros;
