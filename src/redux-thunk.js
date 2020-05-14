import {
  requestDog,
  requestDogSuccess,
  requestDogError
} from "./action-creators";

const fetchDog = () => {
  return (dispatch, getState) => {

    /*
     * redux-thunk передает в возвращаемые функции
     * методы dispatch и getState из хранилища (store)
     * как параметры, таким образом появляется возможность
     * диспатчить любые экшены и использовать состояние (state)
     * для реализации дополнительной логики и workflow.
     */
    console.log(getState());

    dispatch( requestDog() );

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        data => dispatch( requestDogSuccess(data) ),
        err => dispatch( requestDogError() )
      );
  }
};


export default fetchDog;