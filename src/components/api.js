import axios from "axios";

// Create an axios Object with pre-configured setting
const backendApi = axios.create({
  baseURL: "http://localhost:5000",
  // send cookies to the backend on every request

  withCredentials: true
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    // console.log() error info for debugging
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }

  // Alert a generic messsage for the user
  alert("Sorry! Something went wrong. Try again later");

  // Cause the error again so the .then() won't be called

  throw err;
}

export function getMeetupList() {
  return backendApi.get("/api/meetup").catch(errorHandler);
}

export function getMeetupDetails(meetupId) {
  return backendApi
    .get(`/api/meetup/${meetupId}`)
    .catch(errorHandler);
}

export function addMeetup(newMeetupSubmission) {
  return backendApi
    .post(`/api/add-meetup`, newMeetupSubmission)
    .catch(errorHandler);
}

export function createGroup(newGroupSubmission) {
  return backendApi
    .post(`/api/create-group`, newGroupSubmission)
    .catch(errorHandler);
}

export function getGroupDetail(groupId) {
  return backendApi
    .get(`/api/group/${groupId}`)
    .catch(errorHandler);
}
export function postMemberDde(demand) {
  return backendApi
    .post("/api/process-member", demand)
    .catch(errorHandler);
}
export function getOnlyMyMeetup() {
  return backendApi
    .get(`/api/my-meetup`)
    .catch(errorHandler);
}
export function postGotToEvent(action) {
  return backendApi
    .post(`/api/process-goTo`, action)
    .catch(errorHandler);
}

export function getUserInfo() {
  return backendApi
    .get("/api/add-meetup")
    .catch(errorHandler);
}
// export function getProductByGender() {
//   return backendApi.get("/api/product/gender").catch(errorHandler);
// }
// export function addProduct(productId) {
//   return backendApi.post(`/api/add-product/${productId}`).catch(errorHandler);
// }

// export function getOrder() {
//   return backendApi.get("/api/check-out").catch(errorHandler);
// }

// export function deleteProduct(productId) {
//   return backendApi
//     .delete(`/api/check-out/${productId}/delete`)
//     .catch(errorHandler);
// }

// export function postPayment(token) {
//   return backendApi.post("/api/payment", token).catch(errorHandler);
// }

export function postSignup(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogIn(loginCredentials) {
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}

export function getLogOut() {
  return backendApi
    .delete("/api/logout")
    .catch(errorHandler);
}
