import { Check } from 'lucide-react';
import { useState } from 'react';

const Products = ({ products, onAddToCart, selectedProduct }) => {

  const [isBuy, setisBuy] = useState([]);

  const handleBuy = (product) => {
    if (!isBuy.includes(product.id)) {
      setisBuy([...isBuy, product.id])
      onAddToCart(product);
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-5 pb-28'>
      {products.map((product) => (
        <div key={product.id} className="group bg-[#F2F2F2] card space-y-4 shadow-sm p-6 relative">

          <div className='flex justify-between'>
            <div className='w-12 h-12 flex justify-center items-center text-2xl border border-indigo-200 p-3.5 rounded-full'>
              {product.icon}
            </div>

            <div className={`font-semibold absolute top-2.5 right-2.5 badge ${product.tag === "Best Seller"
              ? "badge-soft badge-secondary"
              : product.tag === "Popular"
                ? "badge-soft badge-warning"
                : "badge-soft badge-accent"
              }`}>{product.tag}</div>
          </div>

          <h2 className='font-bold text-2xl text-gray-900 text-center md:text-left'>{product.name}</h2>
          <p className='text-gray-500 text-center md:text-left'>{product.description}</p>

          <h3 className="font-bold text-2xl text-gray-900 text-center md:text-left">$
            {product.price}
            <span className="text-lg text-gray-500">
              {product.period}
            </span>
          </h3>

          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-500 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#30B868]" />
                {feature}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => handleBuy(product)}
            className="btn bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] rounded-full text-white text-sm md:text-base" disabled={isBuy.includes(product.id)}>
            {isBuy.includes(product.id) ? "Added to Cart" : "Buy Now"}
          </button>

        </div>
      ))}
    </div>
  )
};

export default Products;