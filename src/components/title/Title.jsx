import React from "react";

const Title = (pros) => {
    return (
        <div>
            <h2>{pros.title}</h2>
            <p>{pros.desc}</p>
        </div>
    );
};

export default Title;
