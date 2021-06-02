import "./AddDriver.scss"

import Close from "../Lib/Svgs/Close"

function AddDriverModal() {

  return (
    <>
        <div className="modal">
            <div className="modal-wrapper">
                <h2 className="modal-drivers-title">Tahrirlash</h2>
                <button className="close-drivers-btn"><Close /></button>
                
                <div className="order-drivers-list">
                    <input className="order-drivers-radio" type="radio" id="johndoe" name="order-driver" value="johndoe"/>
                    <label className="order-drivers-item" for="johndoe">
                        <p className="order-drivers-name">John Doe</p>
                        <p className="order-drivers-number">20 A 333 CC</p>
                        <a className="order-drivers-phone" href="tel:+998901234567">+998901234567</a>
                    </label>
                </div>
                
               <div className="order-drivers-list">
                    <input className="order-drivers-radio" type="radio" id="shuhrat" name="order-driver" value="shuhrat"/>
                    <label className="order-drivers-item" for="shuhrat">
                        <p className="order-drivers-name">Shuhrat Sanjarov</p>
                        <p className="order-drivers-number">20 A 777 CC</p>
                        <a className="order-drivers-phone" href="tel:+998907656567">+998907656567</a>
                    </label>
                </div>
            
                <button className="order-drivers-select-btn">Tanlash</button>
            </div>
        </div>
    </> 
  )
}

export default AddDriverModal