import React, { useState } from "react";
import Management from "../Management";
import Marketing from "../Marketing";
import Developers from "../Developers";

import "./styles.css";

const Time = () => {
    const [selectedComponent, setSelectedComponent] = useState("management");
    const [loading, setLoading] = useState(false);

    const handleButtonClick = (component) => {
        setLoading(true);
        setTimeout(() => {
            setSelectedComponent(component);
            setLoading(false);
        }, 400); // 300 milissegundos de atraso
    };

    return (
        <div className="services-main-container time-container" id="time-section">
            <div className="switch-service-container">
                <button
                    className={`switch-service-button ${selectedComponent === "management" ? "active" : ""
                        }`}
                    onClick={() => handleButtonClick("management")}
                >
                    Direção
                </button>
                <button
                    className={`switch-service-button ${selectedComponent === "marketing" ? "active" : ""
                        }`}
                    onClick={() => handleButtonClick("marketing")}
                >
                    Marketing
                </button>
                <button
                    className={`switch-service-button ${selectedComponent === "developers" ? "active" : ""
                        }`}
                    onClick={() => handleButtonClick("developers")}
                >
                    Desenvolvedores
                </button>
            </div>
            <div className={`services-container ${loading ? "fade-out" : "fade-in"}`}>
                {
                    {
                        management: <Management />,
                        marketing: <Marketing />,
                        developers: <Developers />,
                    }[selectedComponent]
                }
            </div>
        </div>
    );
};

export default Time;
