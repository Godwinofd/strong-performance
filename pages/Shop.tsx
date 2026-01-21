import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../CartContext';
import { ProductCategory } from '../types';

type CategoryFilter = 'All' | ProductCategory;

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const { addToCart } = useCart();

  const categories: CategoryFilter[] = ['All', 'T-Shirts', 'Tracksuits'];

  const filteredProducts = useMemo(() => {
    if (filter === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="pt-20 bg-obsidian min-h-screen">
      {/* Header Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-scarlet font-bold tracking-wider uppercase text-sm mb-4 block">Shop</span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-white">
              TRAINING <span className="text-scarlet italic serif-font">APPAREL</span>
            </h1>
            <p className="text-steel text-lg md:text-xl leading-relaxed max-w-2xl">
              Premium training apparel designed for performance and style.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-obsidian/95 backdrop-blur-xl border-y border-white/10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all whitespace-nowrap ${filter === cat
                  ? 'bg-scarlet text-white'
                  : 'bg-white/5 text-steel hover:bg-white/10 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-scarlet/50 transition-all hover:shadow-2xl"
              >
                {/* Product Image */}
                <Link to={`/product/${product.id}`} className="block relative aspect-square bg-white/5 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-contain p-8 transition-transform duration-500 ${product.category === 'Tracksuits' || !product.hoverImage ? 'group-hover:scale-110' : ''}`}
                  />
                  {product.category !== 'Tracksuits' && product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                </Link>

                {/* Product Info */}
                <div className="p-6">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-scarlet transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-white">£{product.price}</span>
                    <button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        type: 'product'
                      })}
                      className="bg-scarlet text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-scarlet/90 transition-all hover:scale-105 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-steel text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;