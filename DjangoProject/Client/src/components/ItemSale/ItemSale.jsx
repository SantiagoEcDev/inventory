import "./ItemSale.css"
export const ItemSale = ({title, description, price, available, sell}) => {
  return (
    <article className='item-sale'>
        <h1 className='item-sale-title'>{title}</h1>
        <p className='item-sale-description'>{description}</p>
        <div className="footer">
            <p className='footer-price'>{price}</p>
            <p className='footer-available'>{available}</p>
            <button className='footer-button'>Unidad vendida</button>
        </div>
    </article>
  )
}
