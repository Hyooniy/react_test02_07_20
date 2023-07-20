import ProductList from './components/ProductList';
import data from './productList.json';
import './App.css';
import { useState } from "react";


function Option({etc,sortItem}){
  const etcChange = (e) => {
    return sortItem(e.target.value);
  }
  function Change(){
    return(
      <select defaultValue={etc} onChange={etcChange}>
      <option value="Sergeant">Sergeant</option>
      <option value="Dolly">Dolly</option>
    </select>
    )
  }
  return(
    <p className="form">
    <select defaultValue={etc} onChange={etcChange}>
    <option value="Sergeant">All</option>
      <option value="Sergeant">Sergeant</option>
      <option value="Dolly">Dolly</option>
    </select>
    <Change />
</p>
  )
}

export default function App() {
  const [order,SetOrder] = useState('id');
  const [items,SetItmes] = useState(data);
  const sortItems = items.sort((a,b) => b[order]-a[order]);
  const priceClick = () => SetOrder('price');
  const bestClick = () => SetOrder('ration'); 
  

  const DeleteItem = (id) => {
    const newItem = items.filter((item) => item.id !== id)
    SetItmes(newItem);
  }

  //option
  const [etc,SetEtc] = useState('');
  let subData = data;

  const sortItem = (a) =>{
    console.log(a)
    const newItems = subData.filter((item) => {return item.kind === a});
    console.log(newItems);
    SetEtc(a);
    SetItmes(newItems)
  }

  console.log(subData)
  return (
    <div id='wrap'>
      <div className='btn'>
        <button type="button"
        onClick={priceClick}>가격</button>
        <button type="button"
        onClick={bestClick}>인기순</button>
      </div>
      <ProductList 
      items = {sortItems}
      onDelete = {DeleteItem}/>
      <div className='option'>
        <Option 
        etc={etc} sortItem={sortItem}/>
        </div>
    </div>
  );
}