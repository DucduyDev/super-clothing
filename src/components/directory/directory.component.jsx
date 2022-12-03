import "./directory.component.scss";
import Category from "../category/category.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map(cat => (
        <Category category={cat} key={cat.id} />
      ))}
    </div>
  );
};

export default Directory;
