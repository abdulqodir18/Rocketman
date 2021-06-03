import { useContext } from "react";
import { modalCtx } from "../../../context/Cotigory";
import Close from "../../Lib/Svgs/Close";
// import "./Modals.scss";

function AddModal() {
  const { setAddModal } = useContext(modalCtx);
  return (
    <>
      <div
        className="add-modal "
        onClick={(e) => {
          if (e.target.className === "add-modal") setAddModal(false);
        }}
      >
        <div className="add-modal__wrapper add-modal__wrapper--bigest">
          <button
            className="add-modal__close"
            type="button"
            aria-label="close"
            onClick={() => setAddModal(false)}
          >
            <Close />
          </button>
          <h2 className="add-modal__title">Qo'shish</h2>


          <form className="add-modal__form">
            <div className="modal-inner">
              <img className="modal-inner__img" src="https://via.placeholder.com/250" alt="test" width="250" height="250" />
              <div className="modal-inner__left">
                <label className="add-modal__label">
                  Tovar nomi
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="masalan: Lavash Big"
                  />
                </label>
                <label className="add-modal__label">
                Narxi
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="masalan: 20 000"
                  />
                </label>
                <span className="add-modal__span">Holat</span>

                <div className="add-modal__radio-wrp">
                  <label className="add-modal__radio-lbl">
                    <input
                      className="add-modal__radio"
                      type="radio"
                      name="state"
                      value="on"
                    />
                    on
                  </label>
                  <label className="add-modal__radio-lbl">
                    <input
                      className="add-modal__radio "
                      type="radio"
                      name="state"
                      value="off"
                    />
                    off
                  </label>
                </div>
              </div>
              <div className="modal-inner__rigth">
                <label className="add-modal__label">
                  Ma’lumot
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="info..."
                  />
                </label>
                <label className="add-modal__label">
                  <span>Rasmga link</span>
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="Rasmga link"
                  />
                </label>

                <button className="add-modal__btn" type="submit">
                Saqlash
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddModal;
