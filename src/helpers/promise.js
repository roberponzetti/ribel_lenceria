export const promise = (
    products,
    itemId,
    setIsLoading,
    setItem
  ) => {
    const productsResponse = new Promise((resolve, reject) => {
      setTimeout(() => {
        const findItem = products.find(item => item.id === itemId)
        resolve(findItem);
      }, 2000);
    });
  
    productsResponse
      .then((result) => {
        setItem(result);
      })
      .catch((error) => {
        
        alert(`Error: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
};  