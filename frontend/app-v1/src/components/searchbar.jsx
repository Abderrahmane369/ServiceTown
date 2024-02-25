import { Input } from "antd";

const { Search } = Input;

export default function SearchBar() {
    return (
        <div
            className="searchbar"
            style={{ display: "flex", alignItems: "center" }}
        >
            <Search
                placeholder="Search for a service"
                allowClear
                onSearch={alert}
            />
        </div>
    );
}
