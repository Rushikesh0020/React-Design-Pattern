//DataSource Component

// ResourceLoader Component

import axios from "axios";
import { DataSource } from "./ContainerComponents/DataSource";
import { UserInfo } from './ContainerComponents/UserInfo';


const getServerData = (url) => async () =>  {
    const response = await axios.get(url);
    return response.data;
}

function App5() {
    return (
        <>
            <DataSource getDataFunc={getServerData("/users/126")} resourceName="user">
                <UserInfo />
            </DataSource>
        </>
        
       
    )}

export default App5;