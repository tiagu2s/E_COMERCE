import "./category.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CategoryPage = ({ collection }) => {
  console.log("COLLECTION", collection);
  return (
    <div className="collection-page">
      <h2>Category Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownComponentProps) => ({
  collection: selectCollection(ownComponentProps.match.params.categoryId)(
    state
  ),
});

export default connect(mapStateToProps)(CategoryPage);
