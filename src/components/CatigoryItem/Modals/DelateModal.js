import { useContext } from "react"
import { modalCtx } from "../../../context/Cotigory"

function DlateModal() {
    const {setDelateModal } = useContext(modalCtx)
    return (
      <>
        <div className="add-modal">
          <div className="add-modal__wrapper">
            <h2 className="add-modal__title--small">Haqiqatdan ham o’chirmoqchimisiz?</h2>
            <div className="add-modal__btn-wrp">
              <button  className="add-modal__buttun" type="button" onClick={()=> setDelateModal(false)}>YO’Q</button>
              <button className="add-modal__buttun" type="button" onClick={()=> setDelateModal(false)}>HA</button>
            </div>
          </div>
        </div>
      </>
  )
}
export default DlateModal