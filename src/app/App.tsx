import { useState } from "react";
import { ShoppingCart as ShoppingCartIcon, Search, Menu } from "lucide-react";
import { ProductCard, Product } from "./components/ProductCard";
import { ShoppingCart } from "./components/ShoppingCart";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";

const products: Product[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 3.99,
    unit: "lb",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY3MjM2NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fresh, locally grown organic tomatoes",
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: 5.49,
    unit: "box",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0c3xlbnwxfHx8fDE3NjcyNDg2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sweet and juicy strawberries",
  },
  {
    id: 3,
    name: "Whole Milk",
    price: 4.29,
    unit: "gallon",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NzI1MjYyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Farm fresh whole milk",
  },
  {
    id: 4,
    name: "Artisan Bread",
    price: 4.99,
    unit: "loaf",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1674770067314-296af21ad811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGJha2VyeXxlbnwxfHx8fDE3NjcyODI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Freshly baked sourdough bread",
  },
  {
    id: 5,
    name: "Organic Chicken Breast",
    price: 8.99,
    unit: "lb",
    category: "Meat",
    image: "https://images.unsplash.com/photo-1633862033814-180f66b0bf76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwcHJvdGVpbnxlbnwxfHx8fDE3NjczNDA5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium organic chicken breast",
  },
  {
    id: 6,
    name: "Mixed Nuts",
    price: 6.99,
    unit: "bag",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1677735299557-0fc0cbffa093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFja3MlMjBoZWFsdGh5fGVufDF8fHx8MTc2NzM0MDkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Healthy roasted mixed nuts",
  },
  {
    id: 7,
    name: "Fresh Carrots",
    price: 2.49,
    unit: "lb",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY3MjM2NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Crisp and sweet carrots",
  },
  {
    id: 8,
    name: "Organic Bananas",
    price: 1.99,
    unit: "lb",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0c3xlbnwxfHx8fDE3NjcyNDg2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Perfectly ripe organic bananas",
  },
  {
    id: 9,
    name: "Greek Yogurt",
    price: 5.99,
    unit: "pack",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NzI1MjYyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Protein-rich Greek yogurt",
  },
  {
    id: 10,
    name: "Croissants",
    price: 3.99,
    unit: "pack",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1674770067314-296af21ad811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGJha2VyeXxlbnwxfHx8fDE3NjcyODI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Buttery French croissants",
  },
  {
    id: 11,
    name: "Ground Beef",
    price: 7.49,
    unit: "lb",
    category: "Meat",
    image: "https://images.unsplash.com/photo-1633862033814-180f66b0bf76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwcHJvdGVpbnxlbnwxfHx8fDE3NjczNDA5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "85% lean ground beef",
  },
  {
    id: 12,
    name: "Granola Bars",
    price: 4.49,
    unit: "box",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1677735299557-0fc0cbffa093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFja3MlMjBoZWFsdGh5fGVufDF8fHx8MTc2NzM0MDkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Healthy oat granola bars",
  },
];

const categories = ["All", "Vegetables", "Fruits", "Dairy", "Bakery", "Meat", "Snacks"];

export default function App() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const cartItems = Object.entries(cart).map(([productId, quantity]) => ({
    product: products.find((p) => p.id === parseInt(productId))!,
    quantity,
  }));

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <ShoppingCartIcon className="w-5 h-5 text-white" />
              </div>
              <h1 className="hidden sm:block">FreshMart</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Cart Button */}
            <Button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-green-600 hover:bg-green-700"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="ml-2 hidden sm:inline">Cart</span>
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-green-600 hover:bg-green-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2>
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredProducts.length} products available
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartQuantity={cart[product.id] || 0}
              onAddToCart={() => addToCart(product.id)}
              onRemoveFromCart={() => removeFromCart(product.id)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found</p>
          </div>
        )}
      </main>

      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}
