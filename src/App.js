import "./App.css";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { RegularList } from "./components/list/Regular";

import { authors } from './data/author';



function App() {
  return (
    <>
      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}/>
      <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}/>
    </>
  );
}

export default App;
