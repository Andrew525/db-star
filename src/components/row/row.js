import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6">
                { right }
            </div>
        </div>
    );
};


Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;

// PropTypes.node -> react component, object , string, ....
// PropTypes.element -> only react component

// View.propTypes = {
//     user: PropTypes.shape({
//         name: PropTypes.string,
//         role: PropTypes.oneOf(['USER', 'ADMIN'])
//     })
// };

// powerful lib -> airbnb/propTypes
