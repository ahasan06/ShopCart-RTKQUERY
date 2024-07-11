import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/features/apiSlice";
import './ProductDetails.css'
import ReviewCart from "../../components/ReviewSingleCart/ReviewCart";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { useGetReviewsByProductIdQuery } from "../../store/features/apiSlice";
const ProductDetails = () => {
    const { prodId } = useParams();
    const { data: product, error, isLoading } = useGetProductByIdQuery(prodId);
    const { data: review } = useGetReviewsByProductIdQuery(prodId)
    console.log("review", review);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;
    if (!product) return <div>No product found</div>;

    return (
        <div className="product__details">
            <div className="product__details_container">
                <div className="productDetails__header">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productDetails__body">
                    <div className="productDetails__content">
                        <h1>{product.name}</h1>
                        <p>$ {product.price}</p>
                        <p ><span>Description:</span>{product.description}</p>
                        <p className="description"><span>Details :</span>{product.longDescription}</p>
                        <p className="available"><span>Availability:</span> {product.available ? "Available" : "Not Available"}</p>
                    </div>
                </div>

            </div>
            <div className=" reviewForm">
                <ReviewForm  />
            </div>
            <div className="product__reviewSection">
                <h2>Total Product Reviews : {review?.length}</h2>
              
                {review && review.length > 0 ? review.map((review) => (
                    <ReviewCart key={review.id} review={review} />
                )) : <p>No reviews yet.</p>}
            </div>
        </div>
    );
};

export default ProductDetails;
