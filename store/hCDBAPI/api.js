import axios from "axios"
const hCDBAPI = axios.create({
  baseURL: "https://hc-db-37880-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function rest_auth_login_create(payload) {
  return hCDBAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_providerpractices_partial_update(payload) {
  return hCDBAPI.patch(`/api/v1/providerpractices/${payload.id}/`, payload.data)
}
function api_v1_providerpractices_read(payload) {
  return hCDBAPI.get(`/api/v1/providerpractices/${payload.id}/`)
}
function api_v1_providerpractices_delete(payload) {
  return hCDBAPI.delete(`/api/v1/providerpractices/${payload.id}/`)
}
function api_v1_providerpractices_update(payload) {
  return hCDBAPI.put(`/api/v1/providerpractices/${payload.id}/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return hCDBAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_logout_create(payload) {
  return hCDBAPI.post(`/rest-auth/logout/`)
}
function rest_auth_logout_list(payload) {
  return hCDBAPI.get(`/rest-auth/logout/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return hCDBAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function api_v1_login_create(payload) {
  return hCDBAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return hCDBAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return hCDBAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_read(payload) {
  return hCDBAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return hCDBAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return hCDBAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function api_v1_providerpractices_create(payload) {
  return hCDBAPI.post(`/api/v1/providerpractices/`, payload.data)
}
function api_v1_providerpractices_list(payload) {
  return hCDBAPI.get(`/api/v1/providerpractices/`)
}
function rest_auth_password_reset_create(payload) {
  return hCDBAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return hCDBAPI.post(`/rest-auth/registration/`, payload.data)
}
export const apiService = {
  rest_auth_login_create,
  api_v1_providerpractices_partial_update,
  api_v1_providerpractices_read,
  api_v1_providerpractices_delete,
  api_v1_providerpractices_update,
  rest_auth_password_change_create,
  rest_auth_logout_create,
  rest_auth_logout_list,
  rest_auth_password_reset_confirm_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_partial_update,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_registration_verify_email_create,
  api_v1_providerpractices_create,
  api_v1_providerpractices_list,
  rest_auth_password_reset_create,
  rest_auth_registration_create
}
