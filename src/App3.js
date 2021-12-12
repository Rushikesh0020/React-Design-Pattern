// Container Components

import { CurrentUserLoader } from "./ContainerComponents/CurrentUserLoader";
import { UserInfo } from './ContainerComponents/UserInfo';
import { UserLoader } from './ContainerComponents/UserLoader';


const userIds = ["124", "125", "126", "127"];
function App3() {
    return (
        <>
        {userIds.map(userId => (
            <UserLoader userId={userId}>
                <UserInfo />
            </UserLoader>
        ))}
        </>
       
    )}

export default App3;