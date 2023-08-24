import Skeleton from "@/components/layout/skeleton/skeleton"
import Category from "@/components/products/category/category"

const Loading = () => {
    return (
        <div className="g-container mt-7 mb-7">
            <Category />
            <Skeleton />
        </div>
    )
}

export default Loading