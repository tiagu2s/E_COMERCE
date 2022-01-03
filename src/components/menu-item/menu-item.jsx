import "./menu-item.styles.scss";
function MenuItem(props) {
  const { title, imageUrl, size } = props;
  return (
    <div className={`${size} menu-item`}>
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

export default MenuItem;
