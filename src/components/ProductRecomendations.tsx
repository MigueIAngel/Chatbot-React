import type React from "react"
import { useEffect, useState } from "react"

// Product interface definition
interface Product {
  id: string
  displayTitle: string
  url: string
  imageUrl: string
}

/**
 * ProductCard component displays a single product in the carousel
 * @param product - The product data to display
 */
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl || "/placeholder.svg"} alt={product.displayTitle} />
      <h3>{product.displayTitle}</h3>
      <a href={product.url} target="_blank" rel="noopener noreferrer" className="view-button">
        View Product
      </a>
    </div>
  )
}

/**
 * ProductCarousel component fetches and displays a random selection of products
 * Shows 3 random products from the API response
 */
const ProductCarousel: React.FC = () => {
  // State to store the selected products
  const [products, setProducts] = useState<Product[]>([])

  // Fetch products when component mounts
  useEffect(() => {
    fetch("https://api.wizybot.com/products/demo-product-list")
      .then((response) => response.json())
      .then((data) => {
        // Get 3 random products from the fetched data
        const shuffled = [...data].sort(() => 0.5 - Math.random())
        const randomThreeProducts = shuffled.slice(0, 3)
        setProducts(randomThreeProducts)
      })
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  return (
    <div className="carousel">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductCarousel
