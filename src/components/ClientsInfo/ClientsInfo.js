import './ClientsInfo.scss';

import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { useState } from "react"

import Table from "./../Table/Table.js"
import AddDriverModal from "./../Orders/AddDriverModal";

import ArrowLeft from '../Lib/Svgs/ArrowLeft';
import Call from '../Lib/Svgs/Call';
import LocationIcon from "./../Lib/Svgs/Location"
import MoreDots from "./../Lib/Svgs/MoreDots"

function ClientsInfo() {
	const [modal, setModal] = useState(false)

   const [prevBtnActive, setPrevBtnActive] = useState(false)
   const [nextBtnActive, setNextBtnActive] = useState(false)

	return (
		<section className='clients-info'>
			<Container>
				<div className='clients-info__top'>
					<div className='clients-info__author'>
						<Link className='clients-info__back-button' to='/clients'>
							<ArrowLeft />
						</Link>

						<h2 className='clients-info__fullname'>Dimitri Mirko</h2>
					</div>

					<select className='clients-info__select' name='' id=''>
						<option value='all' selected>
							Barchasi
						</option>
						<option value='ordered'>Buyurtma</option>
						<option value='accepted'>Tasdiqlandi</option>
						<option value='preparing'>Tayyorlanmoqda</option>
						<option value='delivering'>Yetkazish</option>
						<option value='finished'>Yakunlandi</option>
						<option value='cancel'>Bekor</option>
					</select>

					<div className='clients-info__count'>
						<h3 className='clients-info__count-total-heading'>Jami:</h3>
						<p className='clients-info__count-total'>4 ta buyurtma</p>
					</div>

					<a className='clients-info__tel' href='tel: +998975657173'>
						<Call className='clients-info__call-icon' /> +998 97 565 71 73
					</a>
				</div>

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
			</Container>
		</section>
	);
}

export default ClientsInfo;
