const star = ({ star, rating, hover, color, ratingClick, hoverEnter }) => {
  return (
    <span
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={() => hoverEnter(0)}
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
};
export default star;
