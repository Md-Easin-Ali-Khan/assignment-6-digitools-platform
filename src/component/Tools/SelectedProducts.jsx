import React from 'react';


const SelectedProducts = ({ selectedProduct, setSelectedProduct }) => {
    const total = selectedProduct.reduce((sum, item) => sum + Number(item.price), 0);

    return (
        <div>
            <h1 className='font-bold text-2xl'>Your Cart</h1>
            {selectedProduct.length === 0 ? (
                <div className='flex justify-center items-center'><img src="no-product.png" alt="" /></div>
            ) : (
                selectedProduct.map((item) => (

                    <div key={item.id}>
                        <div className='flex justify-between p-5'>
                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 flex justify-center items-center text-2xl border border-indigo-200 p-3.5 rounded-full'>
                                    {item.icon}
                                </div>

                                <div className='space-y-2'>
                                    <h3 className='font-semibold text-gray-900 text-xl'>{item.name}</h3>
                                    <p className='text-gray-500'>{item.price}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => setSelectedProduct(selectedProduct.filter((p) => p.id !== item.id))} className='btn font-bold text-red-500'>
                                    Remove
                                </button>
                            </div>
                        </div>

                    </div>
                ))
            )}
            <div className='flex justify-between mb-7'>
                <p className='text-gray-500'>Total:</p>
                <p className='font-bold text-2xl'>${total}</p>
            </div>

            <button
                className="btn font-bold w-full py-4 bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] rounded-full text-white">Proceed to Checkout
            </button>
        </div>
    );
};

export default SelectedProducts;