import { Link } from 'react-router-dom';

import Table from "./../Table/Table.js"
import Container from "../Container/Container"

import './Clients.scss'

function Clients() {
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
                <td className="pg-column" colSpan="6">
                  <button
                    className="pg-column__btn pg-column__btn--actv"
                    aria-label="prev"
                  ></button>
                  <button
                    className="pg-column__btn pg-column__btn--left"
                    aria-label="next"
                  ></button>
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
