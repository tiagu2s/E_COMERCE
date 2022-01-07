import PreviewCollection from "../../components/preview-collection/preview-collection";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const Shop = ({ dataCollection }) => {
  return (
    <div className="shop-page">
      {dataCollection.map(({ id, ...otherData }) => (
        <PreviewCollection key={id} {...otherData} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  dataCollection: selectCollections,
});

export default connect(mapStateToProps)(Shop);
