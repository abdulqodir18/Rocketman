import "./Catigoriya.scss";
import Table from "../Table/Table";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AddModal from "./AddModal";
import { modalCtx } from "../../context/Cotigory";
import EditModal from "./ModalEdit";
import DelateModal from "./Delate";

function Catigoriya() {

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
                className="table-top__item"
                activeClassName="table-top__item-acv"
                to="/"
              >
                kategoriya
              </NavLink>
            </li>
          </ul>
          <button className="table-top__btn" onClick={()=> setAddModal(true)} >Qo’shish</button>
        </div>
        <div className="table-wraper">
          <Table>
            <thead>
              <tr>
                <th colSpan="1">kategoriya</th>
                <th colSpan="1">DO’konlar</th>
                <th colSpan="1">holat</th>
                <th colSpan="1">tahrirlash</th>
                <th colSpan="1">o’chirish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="1">Fast food</td>
                <td colSpan="1">1</td>
                <td colSpan="1">
                  <button className="state state--disabled">delated</button>
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

export default Catigoriya;
