import React from 'react';
import glass from '../assets/svgs/magnifying-glass.svg'
import downArrow from '../assets/svgs/down-arrow.svg'

const InventoryList = () => {
    return (
        <div className='main-container'>
            <div className="inventory-top">
                <div className="title-small padding-0">
                    Inventorius
                </div>
                <div className="search">
                    <div className="searchbar">
                        <input type="text" name="search" id="searchInput" placeholder='Paieška' />
                        <div className="search-button hover-darken">
                            <img src={glass} alt="magnifying glass" className="svg bell clickable"/>
                        </div>
                    </div>
                    <div className="filters clickable hover-darken">
                        <div className="filter">
                            Filtrai
                        </div>
                        <img src={downArrow} alt="down arrow" className="svg bell hover-darken clickable"/>
                    </div>
                </div>
                <p className='clickable' id='history'>istorija</p>
            </div>
        </div>
    );
}

export default InventoryList;