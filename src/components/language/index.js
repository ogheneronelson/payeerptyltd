import React from "react";
import "./style.css";
import Engish from "../../images/england.png";
import French from "../../images/france.png";
import Germany from "../../images/germany.png";
import Spanish from "../../images/spain.png";
import Italy from "../../images/italy.png";
import Russia from "../../images/russia.png";
import Netherland from "../../images/netherland.png";
import Portugal from "../../images/portugal.png";
import Greece from "../../images/greece.png";
import { Select } from "antd";

const { Option } = Select;

const Language = () => {
  const handleSelect = (value) => {
    localStorage.setItem("lang", value);
    window.location.reload();
  };
  const lang = localStorage.getItem("lang") || "en";
  return (
    <div className="language-container">
      <div>
        <Select
          name="lang"
          optionFilterProp="children"
          onChange={handleSelect}
          value={lang}
          className="lang-select"
        >
          <Option value="en">
            <img className="lang-img" src={Engish} alt="England" /> English
          </Option>
          <Option value="fr">
            <img className="lang-img" src={French} alt="France" /> French
          </Option>
          <Option value="ge">
            <img className="lang-img" src={Germany} alt="Germany" /> German
          </Option>
          <Option value="ru">
            <img className="lang-img" src={Russia} alt="Russian" /> Russian
          </Option>
          <Option value="es">
            <img className="lang-img" src={Spanish} alt="Spain" /> Spanish
          </Option>
          <Option value="it">
            <img className="lang-img" src={Italy} alt="Italy" /> Italiano
          </Option>
          <Option value="pg">
            <img className="lang-img" src={Portugal} alt="Portugal" />{" "}
            Portuguese
          </Option>
          <Option value="dt">
            <img className="lang-img" src={Netherland} alt="Netherland" /> Dutch
          </Option>
          <Option value="gk">
            <img className="lang-img" src={Greece} alt="Greece" /> Greek
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default Language;
