import "./App.css";
import { RegularList } from "./ListAndListItems/RegularList";
import { SmallPersonListItem } from "./ListAndListItems/people/SmallPersonListItem";
import { LargePersonListItem } from "./ListAndListItems/people/LargePersonListItem";
import {NumberedList} from './ListAndListItems/NumberedList'
import { LargeProductListItem } from "./ListAndListItems/products/LargeProductListItem";
import { SmallProductListItem } from "./ListAndListItems/products/SmallProductListItem";
import { Modal } from "./ModalComponents/Modal";
const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "cycyling", "reading", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 26,
    hairColor: "black",
    hobbies: ["gymnastics", "video games", "reading", "cycyling"],
  },
  {
    name: "Jane Garcia",
    age: 18,
    hairColor: "white",
    hobbies: ["reading", "gymnastics", "swimming", "mathematics"],
  },
  {
    name: "Big Show",
    age: 34,
    hairColor: "blue",
    hobbies: ["cycyling", "golf", "gymnastics", "swimming"],
  },
];

const products = [
  {
    name: "Flat-Screen Tv",
    price: "$300",
    desc: "Huge LCD screem, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    desc: "Just Like the Pros Use",
    rating: 4.9,
  },
  {
    name: "Running Shoes",
    price: "$120",
    desc: "State-of-the-art technology for optimum",
    rating: 4.2,
  },
];

function App2() {
  return (
    <>
     <Modal>
         <LargeProductListItem product={products[0]} />
     </Modal>
    </>
  );
}

export default App2;
