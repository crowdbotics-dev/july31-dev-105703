import axios from "axios";
const julydevAPI = axios.create({
  baseURL: "https://july31-dev-105703.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return julydevAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return julydevAPI.post(`/api/v1/login/`, payload);
}

function api_v1_signup_create(payload) {
  return julydevAPI.post(`/api/v1/signup/`, payload);
}

function modules_articles_article_list(payload) {
  return julydevAPI.get(`/modules/articles/article/`);
}

function modules_articles_article_create(payload) {
  return julydevAPI.post(`/modules/articles/article/`, payload);
}

function modules_articles_article_retrieve(payload) {
  return julydevAPI.get(`/modules/articles/article/${payload.id}/`);
}

function modules_articles_article_update(payload) {
  return julydevAPI.put(`/modules/articles/article/${payload.id}/`, payload);
}

function modules_articles_article_partial_update(payload) {
  return julydevAPI.patch(`/modules/articles/article/${payload.id}/`, payload);
}

function modules_articles_article_destroy(payload) {
  return julydevAPI.delete(`/modules/articles/article/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return julydevAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_retrieve(payload) {
  return julydevAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return julydevAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return julydevAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return julydevAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return julydevAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return julydevAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return julydevAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return julydevAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return julydevAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return julydevAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};