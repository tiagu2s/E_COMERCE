import "./collections-overview.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection/preview-collection";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionOverView = ({ dataCollection }) => {
  return (
    <div className="collections-overview ">
      {" "}
      {dataCollection.map(({ id, ...otherData }) => (
        <PreviewCollection key={id} {...otherData} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  dataCollection: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverView);
