import axios from 'axios';

const updateUser = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_USER',
    });

    const response = await fetch('/api/v1/logged_in');

    const info = await response.json();

    await dispatch({
      type: 'RECEIVED_USER',
      payload: info,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_USER',
      payload: error,
    });
  }
};

export default updateUser;
