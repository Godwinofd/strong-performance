import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../CartContext';
import { Plus, Minus, ShoppingCart, ArrowLeft, Check } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-obsidian text-white">
        <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Product Not Found</h2>
        <Link to="/shop" className="text-scarlet font-bold tracking-wide uppercase border-b-2 border-scarlet hover:text-white transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image, product.hoverImage || product.image];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: `${product.name} - Size ${selectedSize}`,
      price: product.price,
      quantity,
      type: 'product'
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="pt-24 bg-obsidian text-white min-h-screen">
      <div className="container mx-auto px-6 pt-12 pb-24">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-steel hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-wide">Back to Shop</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Images */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/5 border border-white/10">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-contain p-12 transition-all duration-700"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx
                    ? 'border-scarlet scale-105'
                    : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain bg-white/5 p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <span className="text-scarlet font-bold tracking-wider uppercase text-sm">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-steel text-lg leading-relaxed">
                {product.description || "Premium training apparel designed for performance."}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 pt-4 border-t border-white/10">
              <span className="text-5xl font-black text-white">£{product.price}</span>
            </div>

            {/* Size Selection */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wide mb-3 block">
                Select Size
              </label>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-xl font-bold text-sm transition-all ${selectedSize === size
                      ? 'bg-scarlet text-white scale-110'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wide mb-3 block">
                Quantity
              </label>
              <div className="flex items-center bg-white/5 rounded-full border border-white/10 w-fit px-6 py-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:text-scarlet transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="mx-8 font-black text-xl min-w-[3ch] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:text-scarlet transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4 pt-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-scarlet text-white py-4 px-8 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-scarlet/90 transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Collection
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-white text-black py-4 px-8 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white/90 transition-all hover:scale-105"
              >
                Buy Now
              </button>
            </div>

            {/* Specifications */}
            {product.specs && product.specs.length > 0 && (
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Specifications</h3>
                <ul className="space-y-3">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-steel">
                      <Check className="w-5 h-5 text-scarlet flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;