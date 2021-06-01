import './Orders.scss';
import Container from '../Container/Container';

//Svg icons:
import ArrowLeft from '../Lib/Svgs/ArrowLeft';
import Call from '../Lib/Svgs/Call';

function Orders() {
	return (
		<section className='orders'>
			<Container>
				<div className='orders__top'>
					<div className='orders__author'>
						<button className='orders__back-button'>
							<ArrowLeft />
						</button>

						<h2 className='orders__fullname'>Dimitri Mirko</h2>
					</div>

					<select className='orders__select' name='' id=''>
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

					<div className='orders__count'>
						<h3 className='orders__count-total-heading'>Jami:</h3>
						<p className='orders__count-total'>4 ta buyurtma</p>
					</div>

					<a className='orders__tel' href='tel: +998975657173'>
						<Call className='orders__call-icon' /> +998 97 565 71 73
					</a>
				</div>
			</Container>
		</section>
	);
}

export default Orders;
