import { useContext } from "react";
import { APIContext } from "../context/APIContext";
import IconHeart from "./IconHeart";

const Gallery = (props) => {
  const { photos, setPhotos } = useContext(APIContext);
  const { favorites } = props;

  // se reemplaza el valor de like por el opuesto
  const toggleLike = (photo) => {
    // esto crea un nuevo array con los valores de photos
    const newPhotos = [...photos];
    // buscar indice dentro del array
    const index = newPhotos.indexOf(photo);
    // dentro del array, en el indice encontrado, cambiar el valor de liked
    newPhotos[index].liked = !newPhotos[index].liked;
    setPhotos(newPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos &&
        photos.map((photo) => {
          // la variable favorites indica si se va a filtrar, si está activa y la foto no tiene like se devuelve null
          if (favorites && !photo.liked) return null;

          return (
            <div
              className="photo"
              key={photo.id}
              onClick={() => toggleLike(photo)}
              style={{ backgroundImage: "url(" + photo.src.large + ")" }}
            >
              <IconHeart filled={photo.liked} />
            </div>
          );
        })}
    </div>
  );
};
export default Gallery;
