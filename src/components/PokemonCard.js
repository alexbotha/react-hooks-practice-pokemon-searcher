import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ filteredP }) {
  const [pokePic, setPokePic] = useState(true);

  function handleClick() {
    setPokePic(!pokePic);
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img
            alt={filteredP.name}
            src={pokePic ? filteredP.sprites.front : filteredP.sprites.back}
          />
        </div>
        <div className="content">
          <div className="header">{filteredP.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {filteredP.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
