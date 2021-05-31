import "./Products.scss"
import Table from "../Table/Table"

function Products() {
   return(
      <>
         <Table>
            <thead>
               <tr>
                  <th>Salom</th>
                  <th>Salom</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>alik</td>
                  <td>alik</td>
               </tr>
               <tr>
                  <td className="pg-column" colSpan="2">
                     <button className="pg-column__btn" aria-label="prev"></button>
                     <button className="pg-column__btn" aria-label="next"></button>
                  </td>
               </tr>
            </tbody>
         </Table>
      </>
   )
}

export default Products
