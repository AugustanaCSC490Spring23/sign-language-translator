import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFlashcardsCollectionById } from "../../services/flashcardsService";
import requireAuth from "../../hoc/requireAuth";

const FlashcardsPage = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState();
  useEffect(() => {
    getFlashcardsCollectionById(slug)
      .then((response) => {
        setCollection(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  if (!collection) return <div>Loading...</div>;
  return <div>{collection.title}</div>;
};

export default requireAuth(FlashcardsPage);
