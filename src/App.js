import logo from './logo.svg'
import './App.css'
import { matchPath, useMatch, PathPattern } from 'react-router'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
        <h1>Conditional Navigation</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/nonav'>No Nav</Link>
          </li>
          <li>
            <Link to='/oops'>Oops, bad link</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const Noop = () => null

const Home = () => {
  return (
    <main>
      <p>Welcome to our cool website home page.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam neque
        atque quo omnis aliquid natus laboriosam at quos repellat eos aspernatur
        saepe quidem fugiat pariatur earum veritatis vel officiis tempora, error
        sequi soluta? Sapiente, voluptatem?
      </p>
      <p>
        Sit culpa corporis exercitationem distinctio, doloremque, et iusto
        aperiam maiores quod perferendis iste, nemo eos dicta ab. Dolorum, iusto
        maxime aut ex expedita molestiae quae veniam non quasi assumenda id iure
        eligendi libero, minus perferendis.
      </p>
      <p>
        Amet ullam eos perferendis saepe, quo consequuntur quis neque
        accusantium. Earum, cupiditate optio. Sunt, reprehenderit fuga vel
        veritatis alias omnis officia enim magnam aliquid. Cupiditate molestiae
        cum, necessitatibus modi exercitationem minus eum cumque officia sit.
      </p>
      <p>
        In impedit asperiores voluptatem facere commodi fugit nemo veritatis
        modi voluptates sunt repellat veniam eos exercitationem nobis molestias
        recusandae rerum id quis error deserunt ullam, quam hic tempore
        doloremque. Quasi voluptates expedita officia iusto asperiores?
      </p>
      <p>
        Saepe minima atque et dolor, excepturi dolores cumque voluptate dolore
        id eum, incidunt odit, at quidem facere? Et, quae perspiciatis!
        Perferendis porro esse provident dolorum dolor saepe molestias, ex
        facere animi omnis, fugiat optio vel?
      </p>
    </main>
  )
}

const NoNav = () => {
  return (
    <main>
      <h1>No Navigation Is Shown on This Page</h1>
      <p>
        Nothing to see here, but you can{' '}
        <Link to='/'>go back to the homepage</Link>.
      </p>
    </main>
  )
}

const FourOhFour = () => (
  <main>
    <h2>404</h2>
    <p>Page not found</p>
  </main>
)

function App() {
  return (
    <BrowserRouter>
      {/* Header / Navigation */}
      <Routes>
        <Route path='nonav' element={<Noop />} />
        <Route path='*' element={<Nav />} />
      </Routes>
      {/* Page Content */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nonav' element={<NoNav />} />
        <Route path='*' element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
