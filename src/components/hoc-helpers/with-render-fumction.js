import React from "react";

const withRenderFunction = (fn) => (Wraper) => {
    return (props) => {
        return (<Wraper { ...props }>{ fn }</Wraper>);
    }
};

export default withRenderFunction;