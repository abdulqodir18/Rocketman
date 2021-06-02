import { useContext } from "react";
import { modalCtx } from "../../../context/Cotigory";
import Close from "../../Lib/Svgs/Close";
import "./Modals.scss";

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
        <div className="add-modal__wrapper add-modal__wrapper--big">
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
              <div className="modal-inner__left">
                <label className="add-modal__label">
                  Do’kon nomi
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="masalan: Evos"
                  />
                </label>
                <label className="add-modal__label">
                  Long
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="masalan: 41.32554974771851"
                  />
                </label>
                <label className="add-modal__label">
                  Manzil
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="masalan: To’ytepa"
                  />
                </label>
              </div>
              <div className="modal-inner__rigth">
                <label className="add-modal__label">
                  Telefon raqami
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="+998 _ _  _ _ _  _ _  _ _"
                  />
                </label>
                <label className="add-modal__label">
                  <span>Lang</span>
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="masalan: 41.32554974771851"
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
            </div>
            <button className="add-modal__btn" type="submit">
              Qo’shish
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddModal;
