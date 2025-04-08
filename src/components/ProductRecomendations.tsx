import React, { useEffect, useState } from "react";
interface Product {
    id: string;
    displayTitle: string;
    url: string;
    imageUrl: string;
}
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.displayTitle} />
            <h3>{product.displayTitle}</h3>
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="view-button">
                View Product
            </a>
        </div>
    );
};
const ProductCarousel: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://api.wizybot.com/products/demo-product-list")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="carousel">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCarousel;