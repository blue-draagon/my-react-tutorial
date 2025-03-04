import {ProductRow} from "./ProductRow.jsx";
import {ProductCategoryRow} from "./ProductCategoryRow.jsx";

export function ProductTable({products}) {
    const tables = []
    let lastCategory = ""
    products.forEach(product => {
        if (lastCategory !== product.category) {
            tables.push(
                <ProductCategoryRow
                    key={product.category}
                    name={product.category}
                />
            )
        }
        tables.push(
            <ProductRow
                key={product.name}
                product={product}
            />
        )
        lastCategory = product.category
    })
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {tables}
                </tbody>
            </table>
        </div>
    )
}