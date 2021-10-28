import React from 'react'
import { useParams } from 'react-router';

const ItemListContainer = ({children}) => {
    // const { categoryId } = useParams();
    // const [category, setCategory] = useState(null);

    // useEffect(() => {
    //     if (categoryId) {
    //       fetch(`https://rickandmortyapi.com/api/character/${itemId}`)
    //         .then((response) => {
    //           return response.json();
    //         })
    //         .then((result) => {
    //           setCategory(result);
    //         });
    //     }
    //   }, [categoryId]);
    
    //   if (!category) {
    //     return null;
    //   }

    return (
        <div>
            {children}
        </div>
    );
};

export default ItemListContainer;
