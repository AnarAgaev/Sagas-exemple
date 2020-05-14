const requestDog = () => {
  return {
    type: 'REQUESTED_DOG'
  }
};

const requestDogSuccess = (data) => {
  return {
    type: 'REQUESTED_DOG_SUCCEEDED',
    url: data.message
  }
};

const requestDogError = () => {
  return {
    type: 'REQUESTED_DOG_FAILED'
  }
};

const fetchDog = (dispatch) => {
  dispatch( requestDog() );

  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(
      data => dispatch( requestDogSuccess(data) ),
      err => dispatch( requestDogError() )
    );
};


export default fetchDog;