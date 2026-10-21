import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'astavakra_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch {}
  }, [items])

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.slug === product.slug)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return next
      }
      return [...prev, {
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        qty,
      }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }, [])

  const updateQty = useCallback((slug, qty) => {
    setItems((prev) => prev.map((i) => {
      if (i.slug !== slug) return i
      const q = Math.max(1, Number(qty) || 1)
      return { ...i, qty: q }
    }))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = items.reduce((s, i) => s + i.qty, 0)
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)

  const value = {
    items, count, subtotal,
    addItem, removeItem, updateQty, clearCart,
    isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
