export const ProductInfo = ({product}) => {
    const {name, price, desc, rating} = product || {};
    return product ? (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description: </h3>
            <p>{desc}</p>
            <p>Average Rating: {rating}</p>
        </>
    ) : <p>Loading...</p>;
}