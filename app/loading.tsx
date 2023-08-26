import Skeleton from "@/components/layout/skeleton/home-page"
import Category from "@/components/products/category/category"

const Loading = () => {
    return (
        <div className="g-container" style={{marginTop:"30px", marginBottom:"30px"}}>
            <Category />
            <Skeleton />
        </div>
    )
}

export default Loading