import React from "react";
import './stylesItemListContainer.css'

const ItemListConainer = ({greeting}) => {
    return(
        <>
            <div className="greeting">
                <p>{greeting}</p>
            </div>

        </>
    );
};

export default ItemListConainer;