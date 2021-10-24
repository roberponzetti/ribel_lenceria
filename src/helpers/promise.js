export const promise = (
    product,
    setIsLoading,
    setCurrentProduct
  ) => {
    const productsResponse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });
  
    productsResponse
      .then((result) => {
        setCurrentProduct(result);
      })
      .catch((error) => {
        
        alert(`Error: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
};  