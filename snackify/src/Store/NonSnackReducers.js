import {
    BEGIN_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    BEGIN_UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    BEGIN_GET_USER_INFO,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    BEGIN_LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    BEGIN_GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    BEGIN_DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
  } from "./NonSnackActions";
  
  const initState = {
    user: {
        name: '',
        email: '',
        password: '',
        signUpCode: '',
        companyName: '',
    },
  
    users: [
      {
        id: 0,
        email: "admin@admin.com",
        name: "John Smith",
        password: "I<3Lambda",
        signUpCode: "admins",
        companyName: "Admin Inc."
      },
    ],
  
    order: [],
    
    isAuthenticating: false,
    loggedIn: false,
    authenticationError: "",
  
    isUpdating: false,
    updateError: "",
    updateSuccess: "",
  
    isGettingUserInfo: false,
    userInfoError: "",
  
    isLoggingOut: false,
    logoutError: "",
    logoutResponse: "",
  
    isGettingUsers: false,
    gettingUsersError: "",
  
    isDeletingUser: false,
    deletingUserError: ''
  };
  
  export const NonSnackReducer = (state = initState, action) => {
    switch (action.type) {
      //HANDLE LOGIN DATA
      case BEGIN_LOGIN:
        return {
          ...state,
          isAuthenticating: true
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticating: false,
          loggedIn: true,
          user: {
            ...state.user,
            name: action.payload.name,
            user_id: action.payload.user_ID,
            email: action.payload.email,
            company: action.payload.company_name,
            company_id: action.payload.company_ID,
            admin: action.payload.admin,
            img_url: action.payload.img_url
          }
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          authenticationError: action.payload,
          isAuthenticating: false
        };
  
      //HANDLE UPDATE USER DATA
      case BEGIN_UPDATE_USER:
        return {
          ...state,
          isUpdating: true
        };
  
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          isUpdating: false,
          updateSuccess:
            "You have successfully updated your account information.",
          user: {
            ...state.user,
            name: action.payload.name,
            user_id: action.payload.user_ID,
            email: action.payload.email,
            company: action.payload.company_name,
            company_id: action.payload.company_ID,
            admin: action.payload.admin,
            img_url: action.payload.img_url
          }
        };
  
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          updateError: action.payload,
          isUpdating: false
        };
  
      //HANDLE GET USER INFO
      case BEGIN_GET_USER_INFO:
        return {
          ...state,
          isGettingUserInfo: true
        };
  
      case GET_USER_INFO_SUCCESS:
        return {
          ...state,
          isGettingUserInfo: false,
          loggedIn: true,
          user: {
            name: action.payload.name,
            user_id: action.payload.user_ID,
            email: action.payload.email,
            company: action.payload.company_name,
            company_id: action.payload.company_ID,
            admin: action.payload.admin,
            img_url: action.payload.img_url
          }
        };
  
      case GET_USER_INFO_FAILURE:
        return {
          ...state,
          isGettingUserInfo: false,
          userInfoError: action.payload
        };
  
      // HANDLE LOGOUT DATA
      case BEGIN_LOGOUT:
        return {
          ...state,
          isLoggingOut: true
        };
  
      case LOGOUT_SUCCESS:
        return {
          ...state,
          user: initState.user,
          isLoggingOut: false,
          loggedIn: false
        };
  
      case LOGOUT_FAILURE:
        return {
          ...state,
          isLoggingOut: false,
          logoutError: action.payload
        };
  
      case BEGIN_GET_USERS:
        return {
          ...state,
          isGettingUsers: true
        };
  
      case GET_USERS_SUCCESS:
        return {
          ...state,
          isGettingUsers: false,
          users: [...action.payload.users]
        };
  
      case GET_USERS_FAILURE:
        return {
          ...state,
          isGettingUsers: false,
          getUsersError:action.payload,
        };
  
      case BEGIN_DELETE_USER:
          return{
              ...state,
              isDeletingUser: true,
          };
  
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          isDeletingUser: false,
          users: state.users.filter(user => user.id !== action.payload)
        };
  
      case DELETE_USER_FAILURE:
          return{
              ...state,
              isDeletingUser: false,
              deletingUserError: action.payload,
          }
  
      default:
        return { ...state };
    }
  };