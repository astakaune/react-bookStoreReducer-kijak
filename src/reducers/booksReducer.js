import { GET_ALL_FROM_SERVER } from "../constants/actionsBook";
// import actionGetAllFromServer from "../actions/books";


function booksReducer(state, action) {
	//gauname is serverio payload - books sarasa
	//state nekompleksinis, o yra tiesiog masyvai
	//perduodam, pasetinam, returninam
	let books = { ...state }; //busimasis statas

    //visus reducerius kombinuosime vienam reducerio faile, isskaidant i atskirus blokus (main, sort, filter, pager). Labai svarbu yra eiliskumas.
	//---------- Main --------------//
	switch (action.type) {
		case GET_ALL_FROM_SERVER:
			books = {
				showBooks: [...action.payload],
				masterBooks: [...action.payload],
			};
			break;
		default:
	}

    //----------Sort----------------// reduceris


	//--------Filters--------------// reduceris


    //-------Pager Filter----------// reduceris




	return books;
}

export default booksReducer;
