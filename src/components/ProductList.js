
import './ProductList.css'

function ListItem({item,onDelete}){
  return(
    <figure>
      <img src={item.imageUrl} alt={item.name} />
      <figcaption>
        <dl>
            <dt>{item.name}</dt>
            <dd>{item.detail}</dd>
            <dd>{item.price}</dd>
            <dd>{item.ration}</dd>
            <dd>{item.kind}</dd>
            <dd>
            <button type="button" onClick={()=> onDelete(item.id)}>delete</button>
            </dd>
          
        </dl>
      </figcaption>
    </figure>
  );
}

export default function ProductList({items,onDelete}){
  return(    
    <ul>
      {items.map((item) =>{return <li key={item.id}>
        <ListItem item={item} onDelete={onDelete} />
        </li>})}
      </ul>
  )
}