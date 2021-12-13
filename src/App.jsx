import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useReducer, useRef, useEffect } from "react";
import BooksContext from "./contexts/BooksContext";
import List from "./components/List";
import NotFound from "./components/NotFound";
import Book from "./components/Book";
import actionGetAllFromServer from "./actions/books";
import booksReducer from "./reducers/booksReducer";


function App() {
	//parsisiunciame is serverio knygas ir sudedame i sandeli masterCopy. padarysime kaip referenca. turesime knygas, kurias atvaizduosime ekrane show. padarysime kaip useReducer. books rodomi ekrane, jei isfiltruota ir tuscia, tai state bus tuscias masyvas
	// const [state, dispatch] = useReducer(reducer, initialState, init)
	const [books, dispachBooks] = useReducer(booksReducer, { showBooks: [], masterBooks: [] });
	//parsiuntus knygas, jas irasome state su reducu ir read only, kad filtruojant nesusigadintu vaizdas
	//visa koda, kuris nera vizualas, perkeliame i kitus failus. Jei turime asinchronini koda (pvz, reikia laukti, kol is serverio parsiuis koda ar pan.), galima ji perkelti i kita faila. Bet reactas visus async/await pats handlina, todel nereikia nei vieno async/awaito. Jie koda perkeliame i kita js faila, reactas i ta koda neilenda ir mums patiems tada vis reikia suhandlinti.
	const masterBooks = useRef([]);

	useEffect(() => {
		//useEffect turi callback, kuris yra axios kreipimiasis metodu get
		axios.get("https://in3.dev/knygos/").then((res) => {
			masterBooks.current = [...res.data];
			dispachBooks(actionGetAllFromServer(res.data));
		});
	}, []);

	return (
		<BooksContext.Provider value={books}>
			<BrowserRouter>
				<div className="App col top">
					<div className="books">
						<h1>Book store</h1>
						<Routes>
							<Route path="/" element={<List></List>}></Route>
							<Route path="/book/:id" element={<Book></Book>}></Route>
							<Route path="*" element={<NotFound></NotFound>}></Route>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</BooksContext.Provider>
	);
}

export default App;
