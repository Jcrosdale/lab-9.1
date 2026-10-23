import type { ProductDisplayProps } from '../../types';

export const ProductDisplay = ({
    product,
    showDescription = false,
    showStockStatus = false,
    onAddToCart,
    children,
}: ProductDisplayProps) => {
    return (
        <div className="p-4 border rounded shadow flex flex-col gap-2">
            {product.imageUrl && (
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                />
            )}

            <h3 className="text-x1 font-bold">{product.name}</h3>
            <p className="text-lg">${product.price.toFixed(2)}</p>

            {showDescription && <p className="text-gray-600">{product.description}</p>}

            {showStockStatus && (
                <p className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
            )}

            {onAddToCart && (
                <button
                    onClick={() => onAddToCart(product.id)}
                    disabled={!product.inStock}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Add to Cart
                </button>
            )}

            {children}
        </div>
    );
}; 
   