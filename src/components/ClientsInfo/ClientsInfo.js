import './ClientsInfo.scss';

import OrdersTable from "./../OrdersTable/OrdersTable"
import Container from '../Container/Container';

import { Link } from 'react-router-dom';

import ArrowLeft from '../Lib/Svgs/ArrowLeft';
import Call from '../Lib/Svgs/Call';


function ClientsInfo() {

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

				<OrdersTable />
			</Container>
		</section>
	);
}

export default ClientsInfo;
