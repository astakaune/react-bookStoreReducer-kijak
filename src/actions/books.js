import { GET_ALL_FROM_SERVER } from "../constants/actionsBook";

function actionGetAllFromServer(books) {
	// returnina objekta
	return {
		type: GET_ALL_FROM_SERVER,
		payload: books,
	};
}

export default actionGetAllFromServer;
