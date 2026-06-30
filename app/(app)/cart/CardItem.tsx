import { CartItem } from '@/lib/interfaces';
import React from 'react'
interface cartItemProps {
    item:CartItem,
    insteadImage:string,
    setIsOpen: (open: boolean) => void;
    setCartItem: (item: any) => void
}
const CardItem = ({item,insteadImage,setIsOpen,setCartItem}:cartItemProps) => {
  return (
              <div 
                className="flex items-center gap-4 bg-card p-4 rounded-2xl border border-sky-500/5 shadow-xs hover:border-sky-500/15 transition-colors duration-200"
              >
                {/* Ingredient Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-sky-500/[0.02] rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-sky-500/10">
                  {item.ingredientImgUrl ? (
                    <img 
                      src={item.ingredientImgUrl || insteadImage} 
                      alt={item.ingredientName} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = insteadImage;
                      }}
                    />
                  ) : (
                    /* Fallback Icon if image missing */
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>

                {/* Ingredient Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground/80 text-base sm:text-lg truncate">
                    {item.ingredientName}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Qty: <span className="font-medium text-foreground/70">{item.quantity}</span> 
                    <span className="mx-2 text-sky-500/20">|</span> 
                    Price: <span className="font-medium text-foreground/70">${item.price.toFixed(2)}</span>
                  </p>
                  
                  {/* Remove button for mobile view */}
                  <button onClick={()=> {
                    setIsOpen(true);
                    setCartItem(item)
                  }} className="sm:hidden text-xs font-semibold text-rose-500 hover:text-rose-600 mt-3 block cursor-pointer">
                    Remove
                  </button>
                </div>

                {/* Total Price & Remove Button (Desktop view) */}
                <div className="hidden sm:flex flex-col items-end justify-between h-20 py-1">
                  <span className="font-bold text-lg text-foreground/80">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button onClick={()=> {
                    setIsOpen(true);
                    setCartItem(item)
                  }} className="text-xs font-medium text-muted-foreground/50 hover:text-rose-500 transition-colors cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
          )
}

export default CardItem