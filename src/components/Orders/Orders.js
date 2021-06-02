import { Link } from 'react-router-dom';

import Table from "./../Table/Table.js"
import Container from "../Container/Container"

import './Orders.scss'

import LocationIcon from "./../Lib/Svgs/Location"
import MoreDots from "./../Lib/Svgs/MoreDots"

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
         
            <Table>
               <thead>
                  <tr>
                     <th colSpan="1">id</th>
                     <th colSpan="1">sana</th>
                     <th colSpan="1">ism</th>
                     <th colSpan="1">telefon raqam</th>
                     <th colSpan="1">soni</th>
                     <th colSpan="1">narxi</th>
                     <th colSpan="1">manzil</th>
                     <th colSpan="1">driver</th>
                     <th colSpan="1">holat</th>
                     <th colSpan="1">batafsil</th>
                  </tr>
               </thead>

               <tbody className="clients-table-body">
                  <tr>
                     <td colSpan="1">6</td>
                     <td colSpan="1">May 22, 11:29</td>
                     <td colSpan="1"><Link to="/:client-id">Bobur Mavlonov</Link></td>
                     <td colSpan="1"><a href="tel:+998901234567">+998901234567</a></td>
                     <td colSpan="1">1</td>
                     <td colSpan="1">44 000</td>
                     <td colSpan="1"><Link to="/:client-address"><LocationIcon /></Link></td>
                     <td colSpan="1"><button className="order-driver-btn">not selected</button></td>
                     <td colSpan="1"> <button className="order-state order-initial">buyurtma</button></td>
                     <td colSpan="1"><Link to="/:client-order"><MoreDots /></Link></td>
                     </tr>
                  <tr>
                     <td colSpan="1">5</td>
                     <td colSpan="1">May 22, 11:29</td>
                     <td colSpan="1"><Link to="/:client-id">Shuhratbek Qobulov</Link></td>
                     <td colSpan="1"><a href="tel:+998901234567">+998901234567</a></td>
                     <td colSpan="1">2</td>
                     <td colSpan="1">63 000</td>
                     <td colSpan="1"><Link to="/:client-address"><LocationIcon /></Link></td>
                     <td colSpan="1"><button className="order-driver-btn">01 | S 777 JN</button></td>
                     <td colSpan="1"> <button className="order-state order-accepted">tasdiqlandi</button></td>
                     <td colSpan="1"><Link to="/:client-order"><MoreDots /></Link></td>
                  </tr>

                  <tr>
                     <td className="pg-column" colSpan="10">
                        <button className="pg-column__btn pg-column__btn--actv" aria-label="prev"></button>
                        <button className="pg-column__btn pg-column__btn--left" aria-label="next"></button>
                     </td>
                  </tr>
               </tbody>
            </Table>
         </Container>
      </>
   )
}

export default Orders
