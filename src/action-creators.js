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

export {
  requestDog,
  requestDogSuccess,
  requestDogError
};