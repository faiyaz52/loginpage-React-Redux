export function getEmployee() {
    console.log('called');
    return dispatch => {
        return dispatch({
            type: 'GET_EMPLOYEE'
        });
    }
};
