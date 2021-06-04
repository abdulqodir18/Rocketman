import './BotInfo.scss'

function BotInfo() {
   return (
      <>
         <div className="bot-info">
            <h2 className="bot-info__heading">Change client info</h2>
            <form className="bot-info__form">
               <div className="bot-info__input-wrapper">
                  <label className="bot-info__label">Nomi</label>
                  <input className="bot-info__input" type="text" placeholder="Kompaniya nomi" required />
               </div>
               <div className="bot-info__input-wrapper">
                  <label className="bot-info__label">Media link</label>
                  <input className="bot-info__input" type="text" placeholder="Media uchun link kiriting" required />
               </div>
               <div className="bot-info__input-wrapper">
                  <label className="bot-info__label">Yetkazib berish narxi</label>
                  <input className="bot-info__input" type="text" placeholder="masalan: 10 000 so’m" required />
               </div>
               <div className="bot-info__input-wrapper">
                  <label className="bot-info__label">Katalog link</label>
                  <input className="bot-info__input" type="text" placeholder="Katalog uchun link kiriting" required />
               </div>
               <div className="bot-info__input-wrapper">
                  <label className="bot-info__label">Telefon raqam</label>
                  <input className="bot-info__input" type="text" placeholder="+998 _ _  _ _ _  _ _  _ _" required />
               </div>
               <button className="bot-info__btn">Yangilash</button>
            </form>
         </div>
      </>
   )
}

export default BotInfo
