import {supabase} from './supabaseClient';
import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import './supabaseTable.css';


function Library() {
 
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table className="bookTable">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
        </tr>
      </thead>
      <tbody>
        {myBooks.map(b => (
        <tr key="{b.ISBN}">
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.ISBN}</td>
        </tr>
        ))}
      </tbody>
    </table>
    );
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
};

const magazines = [
  { id: 1, title: 'Computer Science', theme: 'Class', isAvailable: false },
  { id: 2, title: 'Software Developer', theme: 'Job', isAvailable: true },
  { id: 3, title: 'Michigan State University', theme: 'College', isAvailable: false },
];


function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function ReactLogo() {
  return (
    <img
      src={logo}
      alt="React Logo"
    />
  );
}


function MichiganState(){
  return (
    <img
      src="https://i.imgur.com/BquAFVY.png"
      alt="Michigan State"
    />
  );
}


function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'red' : 'green'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
    alert('Are you not entertained?');
  }

  return (
    <button onClick={doMagic}>
      Magic {count} times
    </button>
  );
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library/>
        <ZineRack/>
        <ReactLogo/>
        <Bookshelf/>
        <MagicButton/>
        <MichiganState/>
      </header>
    </div>
  );
}

export default App;
