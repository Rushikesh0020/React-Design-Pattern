// Loading Data from localStorage

import axios from "axios";
import { DataSource } from "./ContainerComponents/DataSource";
import { UserInfo } from "./ContainerComponents/UserInfo";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

//Browser Local Storage
const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App6() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/126")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("mymessage")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App6;
