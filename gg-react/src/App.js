import React, { useContext, useEffect, useState } from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './components/Pages/Home';
import Favourites from './components/Pages/Favourites'
import Cart from './components/Modules/Cart';
import ThemeContext from './components/Context/ThemeContext';
import CartForm from './components/Modules/CartForm';
import CartContext from './components/Context/CartContext';
import GamesContext from './components/Context/GamesContext';
import SearchBlock from './components/Modules/SearchBlock';
import NotFound from './components/Pages/NotFound';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'
import PrivateRoute from './components/auth/PrivateRoute';
import GameInfo from './components/Pages/GameInfo';
import ScrollToTop from './components/Hooks/ScrollToTop';

function App() {
  const ThemeCtx = useContext(ThemeContext)
  const CartCtx = useContext(CartContext)
  const GamesCtx = useContext(GamesContext)
  const [searchBlockOpen, setSearchBlockOpen] = useState(false);
  const [user, setUser] = useState('user')
  const pathname = useLocation();

  const handleSearchBlock = (e) => {
      e.preventDefault()
      setSearchBlockOpen(!searchBlockOpen)
  }

  useEffect(() => {
      const listen = onAuthStateChanged(auth, (authUser) => {
        authUser ? setUser(authUser.email) : setUser('')
    })

    return () => {
        listen();
    }
  }, [])

  useEffect(() => {
    ScrollToTop()
  }, [pathname]);

  return (
    <>
        <Header handleSearchBlock={handleSearchBlock} />
        <Cart />
        {
          searchBlockOpen === true ? <SearchBlock handleSearchBlock={handleSearchBlock} />
          : ''
        }
        {
          CartCtx.cart.length ? <CartForm />
          : ''
        }
        <main className={ThemeCtx.theme === 'light' ? 'main light-mode': 'main'}>
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path='/home' element={
              <PrivateRoute user={user}>
                <Home />
              </PrivateRoute>
            }></Route>
            <Route path='/favourites' element={
              <PrivateRoute user={user}>
                <Favourites />
              </PrivateRoute>
            }></Route>
            {
              GamesCtx.game?.map((game, i) => {
                return <Route key={i} path={`/game/${game.id}`} element={<GameInfo
                key={i}
                name={game.name}
                image={game.image}
                id={game.id}
                genre={game.genre}
                price={game.price}
                video={game.video}
                text={game.text}
                />}>
              </Route>
              })
            }
          </Routes>
        </main>
        <Footer />
    </>
  );
}

export default App;
