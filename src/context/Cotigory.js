import { createContext, useState } from "react"

const modalCtx = createContext()

function MadalPrv({children}) {
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [delateModal, setDelateModal] = useState(false)

    return (
      <modalCtx.Provider value={{addModal, setAddModal, editModal, setEditModal, delateModal, setDelateModal}}>
        {children}
      </modalCtx.Provider>
    )
}

export {
  modalCtx,
  MadalPrv
}