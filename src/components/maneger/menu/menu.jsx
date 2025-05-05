import { Outlet, useNavigate } from "react-router-dom"
import './menu.css'
export const MenuManeger=()=>{
   
const navigate=useNavigate()
  return <div className='body'>
        <div className='menu'>
            <section style={{ color: "rgb(27, 176, 225)"  }} className='a' > שלום למנהל</section>
            <section className='a' onClick={() => navigate("suppliers")}>ספקים</section>
            <section className='a' onClick={() => navigate("products")} >מוצרים</section>
            <section className='a' onClick={() => navigate("customers")}>לקוחות</section>
            <section className='a' onClick={() => navigate("orders")}>הזמנות קרובות</section>
        </div>
        <Outlet/>
        </div>
}