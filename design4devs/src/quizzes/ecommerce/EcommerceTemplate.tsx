/**
 * E-Commerce Website Template
 */

import {
  ShoppingCart, Heart, Share2, ChevronRight, Star, Shield, Truck, 
  RotateCcw, Clock, Check, Minus, Plus, ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Zone, ZoneContent, useZoneContext } from "../../components/quiz/ZoneRenderer";

export function EcommerceTemplate() {
  const { fixedZones } = useZoneContext();
  const totalZones = 8;
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className={`min-h-[500px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-white dark:bg-slate-900 ${
      fixedZones.size === totalZones ? "border-emerald-400 shadow-emerald-500/20" : "border-slate-200 dark:border-slate-700"
    }`}>
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-slate-800 dark:text-white">ShopStyle</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-slate-700"><Heart className="w-5 h-5" /></button>
            <button className="relative text-slate-500 hover:text-slate-700">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[10px] rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 py-2 text-sm text-slate-500 flex items-center gap-1">
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
        <span>Clothing</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-800 dark:text-white">Premium Jacket</span>
      </div>

      {/* Product Section */}
      <div className="p-4 sm:p-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Product Image */}
          <Zone id="product-images">
            <ZoneContent
              zoneId="product-images"
              broken={
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="w-3/4 h-3/4 bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Low-res image</span>
                    </div>
                  </div>
                </div>
              }
              fixed={
                <div className="space-y-3">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4/5 h-4/5 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">JACKET</span>
                      </div>
                    </div>
                    <button className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 rounded-lg text-sm font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      🔍 Zoom
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer border-2 ${i === 1 ? 'border-emerald-500' : 'border-transparent'}`} />
                    ))}
                  </div>
                </div>
              }
            />
          </Zone>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Title & Reviews */}
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">Premium Leather Jacket</h1>
              <Zone id="reviews-section">
                <ZoneContent
                  zoneId="reviews-section"
                  broken={
                    <p className="text-sm text-slate-400">Product #JK-2024</p>
                  }
                  fixed={
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">4.8</span>
                      <span className="text-sm text-slate-500">(256 reviews)</span>
                      <button className="text-sm text-emerald-600 hover:underline">See all</button>
                    </div>
                  }
                />
              </Zone>
            </div>

            {/* Price */}
            <Zone id="price-display">
              <ZoneContent
                zoneId="price-display"
                broken={
                  <div className="text-slate-600 dark:text-slate-400">$299.00</div>
                }
                fixed={
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">$249.00</span>
                    <span className="text-lg text-slate-400 line-through">$299.00</span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-medium">Save 17%</span>
                  </div>
                }
              />
            </Zone>

            {/* Stock Status */}
            <Zone id="stock-status">
              <ZoneContent
                zoneId="stock-status"
                broken={
                  <div className="text-xs text-slate-400">In Stock</div>
                }
                fixed={
                  <div className="flex items-center gap-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <div>
                      <span className="font-medium text-amber-800 dark:text-amber-200">Only 3 left in stock!</span>
                      <p className="text-sm text-amber-600">Order within 2h 34m for next-day delivery</p>
                    </div>
                  </div>
                }
              />
            </Zone>

            {/* Options */}
            <Zone id="product-options">
              <ZoneContent
                zoneId="product-options"
                broken={
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-slate-400">Color</label>
                      <select className="w-full mt-1 p-2 border rounded text-sm">
                        <option>Black - BLK-001</option>
                        <option>Brown - BRN-002</option>
                        <option>Navy - NVY-003</option>
                        <option>Tan - TAN-004</option>
                        <option>Burgundy - BRG-005</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Size</label>
                      <select className="w-full mt-1 p-2 border rounded text-sm">
                        <option>XS - Extra Small (32-34)</option>
                        <option>S - Small (34-36)</option>
                        <option>M - Medium (38-40)</option>
                        <option>L - Large (42-44)</option>
                        <option>XL - Extra Large (46-48)</option>
                        <option>XXL - Double XL (50-52)</option>
                      </select>
                    </div>
                  </div>
                }
                fixed={
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Color: <span className="capitalize">{selectedColor}</span></span>
                      </div>
                      <div className="flex gap-2">
                        {["black", "brown", "navy"].map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-10 h-10 rounded-full border-2 transition-all ${
                              selectedColor === color ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-slate-200'
                            }`}
                            style={{ backgroundColor: color === "navy" ? "#1e3a5f" : color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Size: {selectedSize}</span>
                        <button className="text-sm text-emerald-600 hover:underline">Size Guide</button>
                      </div>
                      <div className="flex gap-2">
                        {["S", "M", "L", "XL"].map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-12 h-10 rounded-lg font-medium transition-all ${
                              selectedSize === size 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            </Zone>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Zone id="buy-button" className="flex-1">
                <ZoneContent
                  zoneId="buy-button"
                  broken={
                    <button onClick={handleAddToCart} className="w-full py-2 text-sm text-emerald-600 border border-emerald-600 rounded">
                      add to cart
                    </button>
                  }
                  fixed={
                    <button onClick={handleAddToCart} className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-500/25">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart — ${(249 * quantity).toFixed(2)}
                    </button>
                  }
                />
              </Zone>

              <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                <Heart className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Cart Feedback */}
            <Zone id="cart-feedback">
              <ZoneContent
                zoneId="cart-feedback"
                broken={<></>}
                fixed={
                  addedToCart ? (
                    <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg animate-in slide-in-from-top duration-300">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium text-emerald-800 dark:text-emerald-200">Added to cart!</span>
                      <button className="ml-auto text-sm text-emerald-600 hover:underline">View Cart →</button>
                    </div>
                  ) : null
                }
              />
            </Zone>

            {/* Trust Badges */}
            <Zone id="trust-badges">
              <ZoneContent
                zoneId="trust-badges"
                broken={<></>}
                fixed={
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col items-center text-center">
                      <Truck className="w-6 h-6 text-emerald-500 mb-1" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Free Shipping</span>
                      <span className="text-[10px] text-slate-500">Orders $100+</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <RotateCcw className="w-6 h-6 text-emerald-500 mb-1" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Easy Returns</span>
                      <span className="text-[10px] text-slate-500">30-day policy</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Shield className="w-6 h-6 text-emerald-500 mb-1" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Secure Payment</span>
                      <span className="text-[10px] text-slate-500">SSL Encrypted</span>
                    </div>
                  </div>
                }
              />
            </Zone>
          </div>
        </div>
      </div>
    </div>
  );
}
