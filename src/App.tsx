import { AlertBox } from "./components/AlertBox/AlertBox"
import { useState } from 'react';
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard"
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

export function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarURL: 'https://example.com/avatar.jpg'
  };

  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://example.com/headphones.jpg',
    inStock: true
};

// Render
  return (
    <div className="p-4">
      {showAlert && (
        // AlertBox Display
        <AlertBox
        type="success"
        message="Product added to cart!"
        onClose={() => alert('Alert closed')}
        >
          <p className="text-sm">You can now continue using the application.</p>
        <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* UserProfileCard Display */}
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>

        {/* Product Display */}
        <ProductDisplay product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
      </div>
    </div>
  );
};

export default App;

