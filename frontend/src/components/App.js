import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes/Routes';
import { UserContext } from './context/UserContext';
import { CardContext } from './context/CardContext';

function App() {
  const [user, setUser] = useState(null);
  const [shopCard, setShopCard] = useState(null);

  //useMemo Create
  const valueUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  const valueCard = useMemo(
    () => ({ shopCard, setShopCard }),
    [shopCard, setShopCard]
  );

  return (
    <CardContext.Provider value={valueCard}>
      <UserContext.Provider value={valueUser}>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.component />}
              ></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </CardContext.Provider>
  );
}

export default App;
