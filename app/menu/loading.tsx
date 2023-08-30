import ProductCategory from "@/components/productCategory"
import SearchBar from "@/components/searchBar"
import Skeleton from "@/components/skeleton/menu-pages"

const Loading = () => {
    return (
        <>
            <SearchBar />
            <ProductCategory />
            <Skeleton />
        </>
    )
}

export default Loading