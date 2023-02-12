import React, { useEffect, useState } from 'react'
import Card from './Card'
import lsp from './images/lsp.png'
import cow from './images/cow.png'
import rat from './images/rat.png'
import owl from './images/owl.png'
import cubes from './images/cubes.png'
import ice from './images/ice.png'
import BMO from './images/BMO.png'
import friends from './images/friends.png'

let cards = [
    {color: 'bg-purple',name:'Lumpy Space Princess',img:lsp},
    {color: 'bg-brown',name:'Mannish Man',img:cow},
    {color: 'bg-swamp',name:'Mouse Wizard',img:rat},
    {color: 'bg-gold',name:'Cosmic Owl',img:owl},
    {color: 'bg-skin',name:'Time Cuber',img:cubes},
    {color: 'bg-blue',name:'Ice King',img:ice},
    {color: 'bg-BMO',name:'BMO',img:BMO},
    {color: 'bg-grass',name:'Finn and Jake',img:friends},
]
let names = [];

const Content = ({setScore,score,setMessage,setHidden,reset}) => {
  const [random,setRandom] = useState([]);
  const randomNums = () => {
    let arr = [];
    while(true){
        let x = Math.floor(Math.random() * 10);
        if(!arr.includes(x) && x < 8){
            arr.push(x);
        }
        if(arr.length === 8){
            break
        }
    }
    return arr;
  }
  const handleClick = (name) => {
    if(!names.includes(name)){
        names.push(name);
        setScore(score + 1);
    }else{
        setMessage('You lose!');
        setHidden(false);
        window.scrollTo(0,0);
    }
    if(names.length === cards.length){
        setMessage('You won!');
        setHidden(false);
        window.scrollTo(0,0);
    }
    setRandom(randomNums());
  }
  useEffect(() => {
    setRandom(randomNums());
    names = [];
    setScore(0);
  },[reset])
  return (
    <div className='flex-[100%] px-28 py-24 grid grid-cols-4 gap-10'>
        {random.map((num,index)=>{
            const {color,name,img} = cards[num];
            return(
                <Card color={color} name={name} img={img} key={index} click={handleClick}/>
            )
        })}
    </div>
  )
}

export default Content