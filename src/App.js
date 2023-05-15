import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavBar from './components/HomeNavBar';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { CookiesProvider } from "react-cookie";
import uuid from 'react-uuid';

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    setCookie("user", uuid(), {path: "/"});
    console.log(cookie.user);
  }, [])

  return (
    <CookiesProvider>
      <HomeNavBar cookie={cookie.user}/>
    </ CookiesProvider>
  );
}

export default App;
