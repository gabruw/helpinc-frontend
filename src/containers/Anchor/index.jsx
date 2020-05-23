//#region Imports

import React, { Fragment } from 'react';

//#endregion

const Anchor = ({ className, id }) => {
    return (
        <Fragment>
            <div id={id} className={className}></div>
        </Fragment>
    );
};

export default Anchor;
