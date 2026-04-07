import { use, useState } from 'react';
import Products from './Tools/Products';
import SelectedProducts from './Tools/selectedProducts';

export const headingStyle = "font-extrabold text-center text-3xl sm:text-4xl md:text-5xl text-gray-900"
export const contentStyle = "text-gray-500 text-center text-sm sm:text-md"

const MainSection = ({ productPromise, selectedProduct, setSelectedProduct }) => {
  const products = use(productPromise);

  const [product, setProduct] = useState("mainPage")

  const handleAddToCart = (item) => {
    if (!selectedProduct.find((p) => p.id === item.id)) {
      setSelectedProduct([...selectedProduct, item]);
    }
  };

  return (
    <div className='px-10 lg:px-20'>
      <div className="flex flex-col items-center space-y-4 mb-10">
        <h1 className={headingStyle}>Premium Digital Tools</h1>
        <p className={contentStyle}>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
        <div>
          <button
            onClick={() => { setProduct("mainPage") }}
            className={`btn rounded-full ${product === "mainPage" ? "bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] text-white text-sm md:text-base" : ""}`}>Products
          </button>

          <button
            onClick={() => { setProduct("selected") }}
            className={`btn rounded-full ${product === "selected" ? "bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] text-white bg-amber-300 text-sm md:text-base" : ""}`}>Cart ({selectedProduct.length})
          </button>
        </div>
      </div>

      {product === "mainPage"
        ? <Products products={products} onAddToCart={handleAddToCart} selectedProduct={selectedProduct} />
        : <SelectedProducts
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />}
    </div>
  );
};

export default MainSection;