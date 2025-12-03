import { Search } from "lucide-react";

function SearchBar({handleSearch}) {
    return (
        <form className="flex flex-row items-center gap-1 border border-[#191919] border-solid p-1 rounded-lg" onSubmit={(e) => e.preventDefault()}>
            <Search size={15} className="text-white" /> <input type="text" className=""  placeholder="Search tools ..." onChange={(e) => handleSearch(e.target.value)}/>
        </form>
    )
}

export default SearchBar