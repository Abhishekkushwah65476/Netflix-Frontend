import React, { useRef, useState } from 'react'
import Listitem from '../ListItem/Listitem'
import './List.scss'

function List({ list }) {

    const [slideNumber, setSlideNumber] = useState(0)
    const [isvisible, setIsvisible] = useState(true)

    // console.log("item",list)



    const listRef = useRef()

    const handleClick = async (direction) => {

        setIsvisible(true)
        //460 
        //distance 74 

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            let distance = await listRef.current.getBoundingClientRect().x - 50
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            // console.log("distance",distance)
        }
        if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            let distance = await listRef.current.getBoundingClientRect().x - 50
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            console.log(distance)
        }
        // console.log("direction",distance);
    }
    return (
        <>
            <div className='list'>
                <span className='listTitle'>{list.title}</span>
                <div className='wrapper'>

                    <span class='bx bx-chevron-left' onClick={() => handleClick('left')} style={{ display: !isvisible && 'none' }}></span>
                    <div className='wrapper-box' ref={listRef}>
                        {
                            list.Content.map((item, i) => {
                                // console.log("item", item)
                                return (<>
                                    <Listitem index={i} item={item} />
                                </>)
                            })
                        }
                    

                    </div>
                    <span class='bx bx-chevron-right' onClick={() => handleClick('right')}></span>
                </div>
            </div>
        </>
    )
}

export default List