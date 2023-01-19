import React from 'react'
import {useState, useEffect} from 'react'



const Card = ({taste, size, storage}) => {

    const [picked, setPicked] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [type, setType] = useState('default')

    useEffect(()=>{
        if(storage.amount < size){
            setType("disabled")
        }else if(storage.amount >= size && (picked || hovered)){
            setType("picked")
        }else(
            setType("default")
        )

    }, [storage.amount, picked, hovered])
  

    let pickCard = () => {
        setPicked(!picked)
    }
    let hoverCard = () => {
        setHovered(true)
    }
    let unHoverCard = () => {
        setHovered(false)
    }

    window.onscroll = ()=>{
        if(!picked && hovered){setHovered(false)}
    }

    

  return (
    <div className={`cardContainer ${type}CardContainer grid center`}>
    <div className={`card ${type}Card`} onClick={pickCard} onMouseEnter={hoverCard} onMouseLeave={unHoverCard}>
        <div className='multiHor grid' id='cardHeaderContainer'>
            <div id='scewElement'></div>
            <div id='cardHeaderElement'><h5>Сказочное заморское явство</h5></div>
        </div>
        <div className='cardBodyElement'>
            <div className="cardBodyTextContent">
            <h1><strong>Нямушка</strong></h1>
            <h2><strong>{storage.taste}</strong></h2>

            <div className='cardBodyParams'>
                <p><strong>{size}</strong> порций</p>
                {size <= 10 ? <p>мышь в подарок</p> : 
                size <= 40 ? <p><strong>2 </strong>мыши в подарок</p> :
                <><p><strong>5</strong> мышей в подарок</p> <p>заказчик доволен</p></>}
            </div>
            </div>

            <div className="cardBodyObject">
                <img src="/pics/Photo.png" alt="" />
                <div className={`infoCircle ${type}Circle grid`}>
                    <h1><strong>{(size*50)/1000}</strong></h1>
                    <h3>КГ</h3>
                </div>
            </div>         


        </div>
        
    </div>
    <div className='actionComment'>
    {type === "disabled" ? <p>Печалька, {storage.taste} закончился.</p>:
            type === "default" ? <p>Чего сидишь? Порадуй котэ, <a href="#">купи</a></p>:
            type === "picked" ? <p>{storage.desc}</p> :
            <></>}
    </div>
    </div>

   
    
  )
}

export default Card