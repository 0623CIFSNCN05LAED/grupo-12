import PropTypes from "prop-types";

function CategoryItem({ name }) {
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action text-center"
    >
      {name}
    </button>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
