import "./Products.scss"
import Table from "../Table/Table"
import Container from "../Container/Container"
import TRow from "./TRow"

function Products() {
   return(
      <>
      <Container >
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
              <TRow  cat={'Texnika'} market={1} state={"enabled"} edit={"edit"} delate={'delate'}/>
              <TRow cat={'Texnika'} market={1} state={"enabled"} edit={"edit"} delate={'delate'}/>
              <TRow cat={'Texnika'} market={2} state={"disabled"} edit={"edit"} delate={'delate'}/>
              <TRow cat={'Texnika'} market={3} state={"enabled"} edit={"edit"} delate={'delate'}/>
              <TRow cat={'Texnika'} market={4} state={"disabled"} edit={"edit"} delate={'delate'}/>
               <tr>
                  <td className="pg-column" colSpan="6">
                     <button className="pg-column__btn pg-column__btn--actv" aria-label="prev"></button>
                     <button className="pg-column__btn pg-column__btn--left" aria-label="next"></button>
                  </td>
               </tr>
            </tbody>
         </Table>
         </div>
      </Container>
      </>
   )
}

export default Products
