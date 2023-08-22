import useFetchData from './useFetchData';

const endpoint = `${import.meta.env.VITE_PB_API}/collections/products/records`;
console.log(endpoint);

function useProductList() {
  return useFetchData(endpoint);
}

export default useProductList;
