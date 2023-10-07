import Gallery from "../components/Gallery";

const Favorites = () => {
  // se reutiliza gallery con una varible para filtrar los favoritos
  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <Gallery favorites={true} />
    </div>
  );
};
export default Favorites;
