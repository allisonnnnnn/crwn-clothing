import React from "react";

import "/Users/mengting/lighthouse/crwn-clothing/src/components/menu-item/menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
