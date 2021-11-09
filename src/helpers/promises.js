export const promises = (
    products,
    setIsLoading,
    setCurrentProducts
  ) => {
    const productsResponse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  
    productsResponse
      .then((result) => {
        setCurrentProducts(result);
      })
      .catch((error) => {
        
        alert(`Error: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
};  