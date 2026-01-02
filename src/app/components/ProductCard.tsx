import { Plus, Minus } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  cartQuantity: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

export function ProductCard({ 
  product, 
  cartQuantity, 
  onAddToCart, 
  onRemoveFromCart 
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs text-green-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="mt-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg text-green-700">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
          </div>
          {cartQuantity === 0 ? (
            <Button 
              onClick={onAddToCart}
              size="sm"
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          ) : (
            <div className="flex items-center gap-2 border border-green-600 rounded-md">
              <Button
                onClick={onRemoveFromCart}
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-green-50"
              >
                <Minus className="w-4 h-4 text-green-700" />
              </Button>
              <span className="min-w-[20px] text-center">{cartQuantity}</span>
              <Button
                onClick={onAddToCart}
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-green-50"
              >
                <Plus className="w-4 h-4 text-green-700" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
