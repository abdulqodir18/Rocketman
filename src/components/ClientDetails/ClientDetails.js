import "./ClientDetails.scss"

import Container from "../Container/Container"

function ClientDetails () {
    return (
        <>
            <Container>
                <div className="details-section">
                    <table className="order-details">
                        <thead>
                            <tr className="detail-table-heading">
                                <th colSpan="1">Do’kon nomi</th>
                                <th colSpan="1">Mahsulotlar</th>
                                <th colSpan="1">Soni</th>
                                <th colSpan="1">Narxi</th>
                                <th colSpan="1">Jami</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td colSpan="1">KFC</td>
                                <td colSpan="1">Tovuq qanoti</td>
                                <td colSpan="1">5</td>
                                <td colSpan="1">35 000</td>
                                <td colSpan="1">35 000</td>
                            </tr>
                            <tr>
                                <td colSpan="1">Oqtepa</td>
                                <td colSpan="1">Burger lavash</td>
                                <td colSpan="1">1</td>
                                <td colSpan="1">19 000</td>
                                <td colSpan="1">19 000</td>
                            </tr>
                            <tr>
                                <td colSpan="5">
                                    <span>Jami:</span>
                                    <span>54 000 so’m</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    )
}

export default ClientDetails