import { Link } from 'react-router-dom';
import { useState } from "react";

import Table from "./../Table/Table.js"
import Container from "../Container/Container"

import './Clients.scss'

function Clients() {

  const [prevBtnActive, setPrevBtnActive] = useState(false)
  const [nextBtnActive, setNextBtnActive] = useState(false)

   return(
      <>
      <Container>
         <div className="clients-table-wrapper">
         <Table>
            <thead>
              <tr>
                <th colSpan="1">id</th>
                <th colSpan="1">ism</th>
                <th colSpan="1">telefon raqam</th>
                <th colSpan="1">buyurtmalar</th>
              </tr>
            </thead>

            <tbody className="clients-table-body">
              <tr>
                <td colSpan="1">6</td>
                <td colSpan="1"><Link to="/:client-id">Bobur Mavlonov</Link></td>
                <td colSpan="1"><a href="tel:+998901234567">+998901234567</a>
                </td>
                <td colSpan="1">1</td>
              </tr>
              <tr>
                <td colSpan="1">5</td>
                <td colSpan="1"><Link to="/:client-id">Shuhratbek Qobulov</Link></td>
                <td colSpan="1"><a href="tel:+998901234567">+998901234567</a>
                </td>
                <td colSpan="1">2</td>
              </tr>


              <tr>
                <td colSpan="4">
                  <div className="prev-next">
                    <button onClick={() => {
                      setNextBtnActive(false)
                      setPrevBtnActive(true)
                    }} className={prevBtnActive ?  "prev-next-btn prev-btn-active " : "prev-next-btn"} aria-label="prev"></button>
                    <button onClick={() => {
                      setNextBtnActive(true)
                      setPrevBtnActive(false)
                    }} className={nextBtnActive ? "prev-next-btn next-btn next-btn-active" : "prev-next-btn next-btn"} aria-label="next"></button>
                  </div>
                </td>
              </tr>
            </tbody>
         </Table>
         </div>
      </Container>
      </>
   )
}

export default Clients
