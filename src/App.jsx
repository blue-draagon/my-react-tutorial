import {useState} from "react";
import {SearchBar} from "./components/SearchBar.jsx";
import {ProductTable} from "./components/product/ProductTable.jsx";
import {ErrorBoundary} from "./components/ErrorBundary.jsx";

const PRODUCTS = [
    {category: "Fruits", price: 1, stocked: true, name: "Apple"},
    {category: "Fruits", price: 1, stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: 2, stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: 2, stocked: true, name: "Spinach"},
    {category: "Vegetables", price: 4, stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: 1, stocked: true, name: "Peas"}
]

function App() {
    const [showStockOnly, setShowStockOnly] = useState(false);
    const [search, setSearch] = useState("")
    const [maxPrice, setMaxPrice] = useState(5)

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockOnly && !product.stocked) {
            return false;
        }
        if (maxPrice < product.price) {
            return false;
        }
        return !(search && !product.name.toLowerCase().includes(search.toLowerCase()));
    });

    return (
        <div className="container my-3">
            <SearchBar
                showStockOnly={showStockOnly}
                onStockOnlyChange={setShowStockOnly}
                search={search}
                onSearch={setSearch}
                maxPrice={maxPrice}
                onMaxPriceChange={setMaxPrice}
            />
            <ErrorBoundary
                fallback={
                    <p className="alert alert-danger">
                        Failed to load the products
                    </p>
                }
            >
                <ProductTable products={visibleProducts}/>
            </ErrorBoundary>
        </div>
    )
}


export default App
