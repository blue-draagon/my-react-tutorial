/**
 * Line of product with  column name / price
 * @param {{name: string, stocked: boolean, price: number}} product
 */
export function ProductRow({product}) {
    const style = product.stocked ? undefined : {color: "red"}

    throw new Error("Error loading ProductRow")
    return (
        <tr>
            <td style={style}>{product.name}</td>
            <td>${product.price}</td>
        </tr>
    )
}