import { useContext } from "react";
import { modalCtx } from "../../context/Cotigory";
import { NavLink } from "react-router-dom"
import Container from "../Container/Container"
import Table from "../Table/Table"
import AddModal from "./Modals/AddModal";
import EditModal from "./Modals/EditModal";
import DelateModal from "./Modals/DelateModal";

function CatigoryItem() {

  const { addModal, setAddModal, editModal, setEditModal, delateModal, setDelateModal} = useContext(modalCtx)

  return (
        <>
      <Container>
        <div className="table-top">
          <ul className="table-top__list">
            <li className="table-top__item">
              <NavLink className="table-top__link" to="/">
                home/
              </NavLink>
            </li>
            <li className="table-top__item">
              <NavLink
                className="table-top__link"
                to="/products"
              >
                kategoriya /
              </NavLink>
            </li>
            <li className="table-top__item">
              <NavLink
                className="table-top__link"
                activeClassName="table-top__item-acv"
                to="/products"
              >
                fast food
              </NavLink>
            </li>
          </ul>
          <button className="table-top__btn" onClick={()=> setAddModal(true)}>Qo’shish</button>
        </div>
        <div className="table-wraper">
          <Table>
            <thead>
              <tr>
                <th colSpan="1">id</th>
                <th colSpan="1">DO’konlar</th>
                <th colSpan="1">tovar soni</th>
                <th colSpan="1">telefon raqam</th>
                <th colSpan="1">manzil</th>
                <th colSpan="1">holat</th>
                <th colSpan="1">tahrirlash</th>
                <th colSpan="1">o’chirish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="1">1</td>
                <td colSpan="1">
                  <NavLink className="table-wraper__navLink" to="products/item">Evos</NavLink>
                </td>
                <td colSpan="1">5</td>
                <td>
                  <a className="table-wraper__navLink" href="tel:998901234567">+998901234567</a>
                </td>
                <td colSpan="1">Qo’shtepa</td>
                <td colSpan="1">
                  <span className="state state--disabled">delated</span>
                </td>
                <td colSpan="1">
                  <button className="edit" aria-label="edit" onClick={() => setEditModal(true)}></button>
                </td>
                <td colSpan="1">
                  <button className="delate" aria-label="delate" onClick={() => setDelateModal(true)}></button>
                </td>
              </tr>
              <tr>
                <td className="pg-column" colSpan="8">
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

      {
        addModal && <AddModal/>
      }
      {
        editModal && <EditModal/>
      }
      {
        delateModal && <DelateModal/>
      }
    </>
  )
}

export default CatigoryItem