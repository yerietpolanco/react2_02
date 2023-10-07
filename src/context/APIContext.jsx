import { createContext, useEffect, useState } from "react";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
    const PHOTO_URL = "../public/photos.json";
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(PHOTO_URL)
            .then((response) => response.json())
            .then((data) => setPhotos(data.photos));
    }, [])

    return (
        <APIContext.Provider value={{photos, setPhotos}}>
            {children}
        </APIContext.Provider>
    )
}

export default APIProvider;