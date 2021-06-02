import { Link } from 'react-router-dom'
import { useState } from "react"

import Table from "./../Table/Table.js"
import AddDriverModal from "./../AddDriversModal/AddDriverModal"

import './OrdersTable.scss'

import LocationIcon from "./../Lib/Svgs/Location"
import MoreDots from "./../Lib/Svgs/MoreDots"

function OrdersTable() {

   const [modal, setModal] = useState(false)

   const [prevBtnActive, setPrevBtnActive] = useState(false)
   const [nextBtnActive, setNextBtnActive] = useState(false)

   return(
      <>
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
                     <td colSpan="1"><button onClick={() => setModal(true)} className="order-driver-btn">not selected</button></td>
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
                  <td colSpan="10">
                     <div className="prev-next">
                     <button onClick={() => {
                        setNextBtnActive(false)
                        setPrevBtnActive(true)
                     }} className={prevBtnActive ?  "prev-next-btn prev-btn-active " : "prev-next-btn"}   aria-label="prev"></button>
                     <button onClick={() => {
                        setNextBtnActive(true)
                        setPrevBtnActive(false)
                     }} className={nextBtnActive ? "prev-next-btn next-btn next-btn-active" : "prev-next-btn    next-btn"} aria-label="next"></button>
                     </div>
                  </td>
              </tr>
               </tbody>
            </Table>

            {modal &&  <AddDriverModal modal={modal} setModal={setModal} />}
      </>
   )
}

export default OrdersTable
