import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "./ProductCard";

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onClearCart: () => void;
}

export function ShoppingCart({
  isOpen,
  onClose,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}: ShoppingCartProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-green-600" />
            <h2>Shopping Cart</h2>
            {totalItems > 0 && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">
                Add some groceries to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 border-b pb-4 last:border-b-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm">{item.product.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      ${item.product.price.toFixed(2)} / {item.product.unit}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 border rounded-md">
                        <Button
                          onClick={() => onRemoveFromCart(item.product.id)}
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          onClick={() => onAddToCart(item.product.id)}
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <span className="text-green-700">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>Subtotal ({totalItems} items)</span>
              <span className="text-xl text-green-700">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Proceed to Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={onClearCart}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
