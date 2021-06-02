import OrdersTable from "./../OrdersTable/OrdersTable"
import Container from "../Container/Container"

import './Orders.scss'

function Orders() {

   return(
      <>
         <Container>

            <select className="clients-status-select" id="" name="">
               <option value='all' selected>Barchasi</option>
					<option value='ordered'>Buyurtma</option>
					<option value='accepted'>Tasdiqlandi</option>
					<option value='preparing'>Tayyorlanmoqda</option>
					<option value='delivering'>Yetkazish</option>
					<option value='finished'>Yakunlandi</option>
					<option value='canceled'>Bekor</option>
            </select>

            <OrdersTable />
         
            
         </Container>
      </>
   )
}

export default Orders
