import { createContext, useEffect } from 'react'
import UseLocalStorageState from '../hooks/useLocalStorage';

const WatchedContext = createContext({
    watched: [],
    wantToWatch: [],
    setWatched: JSON.parse(localStorage.getItem('watched') || '[]'),
    setWantToWatch: JSON.parse(localStorage.getItem('wantToWatch') || '[]'),
});

type watchProps = {
    children?: React.ReactNode;
    watched?: [],
    wantToWatch?: [],
    setWatched?: JSON,
    setWantToWatch?: JSON
}

const WatchedLocalStorage = JSON.parse(localStorage.getItem('watched') || '[]')
const WantToWatchLocalStorage = JSON.parse(localStorage.getItem('wantToWatch') || '[]')

export const WatchedContextProvider = (props: watchProps) => {
  const [watched, setWatched] = UseLocalStorageState('watched', WatchedLocalStorage);
  const [wantToWatch, setWantToWatch] = UseLocalStorageState('wantToWatch', WantToWatchLocalStorage);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])

  useEffect(() => {
    localStorage.setItem('wantToWatch', JSON.stringify(wantToWatch))
  }, [wantToWatch])

  const context = {
    watched,
    wantToWatch,
    setWatched,
    setWantToWatch
  }

  return (
      <WatchedContext.Provider value={context}>
          {props.children}
      </WatchedContext.Provider>
  )
}

export default WatchedContext;