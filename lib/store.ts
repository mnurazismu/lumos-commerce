/**
 * LUMOS Commerce - Transparent Tech E-Commerce
 * Zustand State Management (Cart & Wishlist)
 *
 * @author Muhammad Nur Azis Mujiono
 * @github https://github.com/mnurazismu
 * @year 2026
 *
 * Licensed under MIT. See LICENSE file for full terms.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './data';

interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    incrementItem: (productId: string) => void;
    decrementItem: (productId: string) => void;
    clearCart: () => void;
    isOpen: boolean;
    toggleCart: () => void;
}

interface WishlistStore {
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            addItem: (product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === product.id);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                        isOpen: true,
                    });
                } else {
                    set({ items: [...currentItems, { ...product, quantity: 1 }], isOpen: true });
                }
            },
            removeItem: (id) =>
                set({ items: get().items.filter((item) => item.id !== id) }),
            incrementItem: (id) =>
                set({
                    items: get().items.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                }),
            decrementItem: (id) => {
                const item = get().items.find((i) => i.id === id);
                if (item && item.quantity <= 1) {
                    set({ items: get().items.filter((i) => i.id !== id) });
                } else {
                    set({
                        items: get().items.map((i) =>
                            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                        ),
                    });
                }
            },
            clearCart: () => set({ items: [] }),
            toggleCart: () => set({ isOpen: !get().isOpen }),
        }),
        {
            name: 'lumos-cart-storage',
        }
    )
);

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const exists = get().items.find((item) => item.id === product.id);
                if (!exists) {
                    set({ items: [...get().items, product] });
                }
            },
            removeItem: (id) =>
                set({ items: get().items.filter((item) => item.id !== id) }),
            isInWishlist: (id) => get().items.some((item) => item.id === id),
        }),
        {
            name: 'lumos-wishlist-storage',
        }
    )
);
