import { Route, Switch } from "react-router"
import Catigoriya from "../../components/Catigoriya/Catigoriya"
import CatigoriyaProduct from "../../components/CatigoriyaProducts/CatigoryProducts"
import CatigoryItem from "../../components/CatigoryItem/CatigoryItem"
import { MadalPrv } from "../../context/Cotigory"
function Products() {
    return (
      <>
      <Switch>
        <Route exact path="/products">
            <MadalPrv>
              <Catigoriya/>
            </MadalPrv>
        </Route>
        <Route exact path="/products/item">
          <MadalPrv>
            <CatigoryItem />
          </MadalPrv>
        </Route>
        <Route exact path="/products/product">
          <MadalPrv>
            <CatigoriyaProduct />
          </MadalPrv>
        </Route>
      </Switch>
      </>
    )
}
export default Products