import ProjectGallery from '../components/ProjectGallery';

const AlferdEnchapados = () => {
  const images = [
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ALFERD/ALFERD-29.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ALFERD/ALFERD-30.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ALFERD/ALFERD-31.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ALFERD/ALFERD-32.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ALFERD/ALFERD-33.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ALFERD/ALFERD-34.jpg',
    'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ALFERD/ALFERD-35.jpg',
  ];

  const descriptions = [
    'Alferd es uno de los principales fabricadores de enchapados, siendo los proveedores de esta materia prima para todo tipo de proyecto interiorismo.',
    'Ayudan a crear eficiencia en el trabajo de sus clientes en la búsqueda y apoyo para conseguir nuevos materiales o espacios. Así mismo está al tanto en darle soluciones rápidas a los proyectos de sus usuarios.',
  ];

  return (
    <ProjectGallery
      number="01"
      title="Alferd Enchapados"
      strategy="Identidad visual"
      year="2020"
      location="CDMX"
      descriptions={descriptions}
      mainQuote="Proyectar una nueva imagen de la empresa a sus clientes."
      images={images}
    />
  );
};

export default AlferdEnchapados;
