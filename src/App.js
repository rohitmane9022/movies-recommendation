import { useState } from "react";
import "./styles.css";

const books = {
  Thriller: [
    {
      name: "ALL OF US ARE DEAD",
      rating: "7.5/10",
      desc:
        "The series mostly takes place at a high school in South Korea as a zombie apocalypse suddenly breaks out and threatens the safety of the students. "
    },
    {
      name: "MONEY HEIST",
      rating: "8.2/10",
      desc:
        "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan. "
    },
    {
      name: "ELITE",
      rating: "7.4/10",
      desc:
        "The conflict between three working-class teenagers and the wealthy students at an exclusive private school in Spain results in murder."
    }
  ],
  Comedy: [
    {
      name: "Kota Factory",
      rating: "9.2/ 10",
      desc:
        "Kota factory is a youth comedy entertainer web-shows that received amazing response from the public as well as critics."
    },
    {
      name: "Panchayat",
      rating: "8.8/10",
      desc:
        "The story starts with Jitendra Kumar who is a graduate engineer. After completing his graduation, he struggles to find a job but can’t get a suitable job."
    },
    {
      name: "Phir Hera Pheri",
      rating: "7.1/10",
      desc:
        "Baburao, Raju and Shyam are living happily after having risen from rags to riches. Still, money brings the joy of riches and with it the greed to make more money. And so, with a don as an unknowing investor, Raju initiates a new game."
    }
  ],
  Adventure: [
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      rating: " 8.8/10",
      desc:
        "The book provides strategies on how to successfully use value investing in the stock market "
    },
    {
      name: "DC League of Super-Pets",
      rating: "7.5/10",
      desc:
        "Krypto the Super-Dog and Superman are inseparable best friends, sharing the same superpowers and fighting crime side by side in Metropolis. However, Krypto must master his own powers for a rescue mission when Superman is kidnapped."
    },
    {
      name: "Jurassic World Dominion",
      rating: "5.7/10",
      desc:
        "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects."
    }
  ],
  Science_fiction: [
    {
      name: "Stranger Things",
      rating: "8.7/10",
      desc:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
    },
    {
      name: "Locke & Key",
      rating: "7.3/10",
      desc:
        "After their father is murdered under mysterious circumstances, the three Locke siblings and their mother move into their ancestral home, Keyhouse, which they discover is full of magical keys that may be connected to their father's death."
    },
    {
      name: "Lost in Space",
      rating: "7.3/10",
      desc:
        "After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers."
    }
  ]
};

var book = Object.keys(books);

export default function App() {
  var [count, setcount] = useState("Science_fiction");
  return (
    <div className="App">
      <h1>Movies Recommendation</h1>
      <h2> Checkout my favourite Movies. Select the Perfect to get started.</h2>
      <div className="movies">
        {book.map((type) => {
          return (
            <button className="btn" key={type} onClick={() => setcount(type)}>
              {type}
            </button>
          );
        })}
      </div>
      <div className="allbooks">
        <ul>
          {books[count].map((books) => (
            <li key={books.name}>
              <div style={{ fontSize: "larger" }}> {books.name} </div>
              <div style={{ fontSize: "smaller", margin: "5px" }}>
                Ratings: {books.rating}
              </div>
              <div style={{ fontSize: "smaller" }}> {books.desc} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
