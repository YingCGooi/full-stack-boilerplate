import apiClient from '../apiClient';

export const loadAveragesRequest = () => (
  { type: 'LOAD_AVERAGES_REQUEST' }
)

export const loadAveragesSuccess = (data) => (
  { type: 'LOAD_AVERAGES_SUCCESS', data }
)

export const loadAveragesFailure = (data) => (
  { type: 'LOAD_AVERAGES_SUCCESS', data }
)

export function fetchLoadAverages() {
  return (dispatch) => {
    dispatch(loadAveragesRequest());

    apiClient.fetchLoadAverages()
      .then(response => {
        dispatch(loadAveragesSuccess(response.data))
      })
      .catch(error => {
        dispatch(loadAveragesFailure(error.response.data))
      });
  }
}