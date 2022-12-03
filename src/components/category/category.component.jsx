import "./category.component.scss";

const Category = ({ category: { title, imageUrl } }) => {
  return (
    <div className="category">
      <div
        className="category__background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>

      <div className="category__heading">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default Category;
