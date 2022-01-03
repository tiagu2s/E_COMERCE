import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";

import SECTIONS_DATA from "../../utils/data/sections.data";

function Directory() {
  const sections = SECTIONS_DATA;
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;
