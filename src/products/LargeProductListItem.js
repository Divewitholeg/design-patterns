export const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average rating: {rating}</p>
    </>
  );
};
