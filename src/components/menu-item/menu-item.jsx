import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";
function MenuItem(props) {
  const { title, imageUrl, size, history, linkUrl, match } = props;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Comprar</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
