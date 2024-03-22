import React, { useEffect, useState } from 'react'

export const ProductList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<string[]>([]);

    // call the server to fetch products
    useEffect(() => {
        console.log('fetching products ...', category);
        setProducts(['Clothing', 'Household']);
    }, [category]);

    return (
        <div>ProductList</div>
    )
}
