import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/slices/productSlice";

function App() {
  const products = useSelector((store) => store.productSlice.products);
  const dispatch = useDispatch();
  console.log(products);

  const onClickGetProducts = () => {
    dispatch(fetchProducts());
  };

  
  return (
    <>
      <button onClick={onClickGetProducts}>Get Products</button>
     
      {products?.map((product, index) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width={200} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
