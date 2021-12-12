// ResourceLoader Component

import { CurrentUserLoader } from "./ContainerComponents/CurrentUserLoader";
import { ProductInfo } from "./ContainerComponents/ProductInfo";
import { ResourceLoader } from "./ContainerComponents/ResourceLoader";
import { UserInfo } from './ContainerComponents/UserInfo';
import { UserLoader } from './ContainerComponents/UserLoader';


const userIds = ["124", "125", "126", "127"];
function App4() {
    return (
        <>
          <ResourceLoader resourceUrl={"/users/124"} resourceName="user">
            <UserInfo />      
        </ResourceLoader>
        <ResourceLoader resourceUrl={"/products/2345"} resourceName="product">
            <ProductInfo />      
        </ResourceLoader>
        </>
        
       
    )}

export default App4;