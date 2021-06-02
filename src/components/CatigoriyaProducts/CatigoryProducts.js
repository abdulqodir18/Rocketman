import "./CatigoryProduct.scss";
import Table from "../Table/Table";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { modalCtx } from "../../context/Cotigory";
import AddModal from "./Modals/AddModal";
import EditModal from "./Modals/ModalEdit";
import DelateModal from "./Modals/Delate";

function CatigoryProduct() {

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
                to="/"
              >
                kategoriya/
              </NavLink>
            </li>
            <li className="table-top__item">
              <NavLink
                className="table-top__link"
                to="/"
              >
                 fast food /
              </NavLink>
            </li>
            <li className="table-top__item">
              <NavLink
                className="table-top__link"
                activeClassName="table-top__item-acv"
                to="/product"
              >
                 Evos
              </NavLink>
            </li>
          </ul>
          <button className="table-top__btn" onClick={()=> setAddModal(true)} >Qo’shish</button>
        </div>
        <div className="table-wraper">
          <Table>
            <thead>
              <tr>
                <th colSpan="1">id</th>
                <th colSpan="1">tovar</th>
                <th colSpan="1">tovar soni</th>
                <th colSpan="1">holat</th>
                <th colSpan="1">tahrirlash</th>
                <th colSpan="1">o’chirish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="1">1</td>
                <td colSpan="1">
                  <NavLink className="table-wraper__navLink" to="products/item/products">Lavash</NavLink>
                </td>
                <td colSpan="1">5</td>
                <td colSpan="1">
                  <span className="state state--disabled">delated</span>
                </td>
                <td colSpan="1">
                  <button className="edit" aria-label="edit" onClick={()=> setEditModal(true)}></button>
                </td>
                <td colSpan="1">
                  <button className="delate" aria-label="delate" onClick={()=> setDelateModal(true)}></button>
                </td>
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
  );
}

export default CatigoryProduct;
