import "./App.css";
import { includeUser } from "./components/include-user";
import { BookInfo } from "./components/book-info";

const UserInfoWidthLoader = includeUser(BookInfo, "4");

function App() {
  return <>
    <UserInfoWidthLoader  />
  </>;
}

export default App;
