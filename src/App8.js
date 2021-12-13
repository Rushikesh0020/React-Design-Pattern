// Loading Data from localStorage

import axios from "axios";
import { DataSource } from "./ContainerComponents/DataSource";
import { DeveloperInfo } from "./ContainerComponents/developers/DeveloperInfo";
import { UserInfo } from "./ContainerComponents/UserInfo";
import { DeveloperContainer } from "./ContainerComponents/developers/style";
import styled from "styled-components";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

//Browser Local Storage
const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

const developerIds = ["211", "212", "213"];

const AppScreen = ({ className }) => {
  return (
    <div className={className}>
      <div className="wholebody">
          {
              developerIds.map(devId => (
                  <DataSource key={devId} getDataFunc={getServerData("/developers/"+devId)} resourceName="developer">
                             <DeveloperContainer>
                                 <DeveloperInfo />
                             </DeveloperContainer>
                  </DataSource>
               ) )
          }
            {
              developerIds.map(devId => (
                  <DataSource key={devId} getDataFunc={getServerData("/developers/"+devId)} resourceName="developer">
                             <DeveloperContainer>
                                 <DeveloperInfo />
                             </DeveloperContainer>
                  </DataSource>
               ) )
          }
        
      </div>
    </div>
  );
};

const App8 = () => {
  return <AppContainer />;
};

export default App8;

export const AppContainer = styled(AppScreen)`
  .my {
    font-weight: bold;
    color: red;
  }

  .wholebody {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
  }
  
`;
