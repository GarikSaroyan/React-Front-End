import React from "react";

export function MenuIcons(){

    return (
        <div className='menuIcons'>

            <div className='menuIconsItem '>
                <img src={require('../assets/icons/ICON - Search.png')}/>
            </div>

            <div className='menuIconsItem activeMenuClose'>
                <img src={require('../assets/icons/Group 46.png')}/>
            </div>


            <div className='menuIconsItem '>
                <img src={require('../assets/icons/Group 56.png')}/>
            </div>

            <div className='menuIconsItem '>
                <img src={require('../assets/icons/Group 54.png')} />
            </div>

            <div className='menuIconsItem '>
                <img src={require('../assets/icons/Group 53.png')}/>
            </div>

            <div className='menuIconsItem '>
                <img src={require('../assets/icons/Group 47.png')}/>
            </div>


        </div>
    )
}
