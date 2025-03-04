import {Input} from "./forms/Input.jsx";
import {Checkbox} from "./forms/Checkbox.jsx";
import {Range} from "./forms/Range.jsx";

export function SearchBar({
                              showStockOnly, onStockOnlyChange,
                              search, onSearch,
                              maxPrice, onMaxPriceChange}) {
    return (<div className="mb-3">
            <div className="mb-2">
                <Input
                    value={search}
                    onChange={onSearch}
                    placeholder="Search..."
                />
            </div>
            <div className="mb-2">
                <Checkbox
                    id="stocked"
                    label="Show only product in stock"
                    checked={showStockOnly}
                    onChange={onStockOnlyChange}
                />
            </div>
        <div className="mb-2">
            <Range
                min={0}
                max={10}
                maxPrice={maxPrice}
                onMaxPriceChange={onMaxPriceChange}
            />
        </div>
        </div>)
}