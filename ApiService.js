/* eslint no-console: 0 */

const BASE_URL = 'http://localhost:3001';

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.error(
        `Error fetching [${options ? options.method : 'GET'}]${path}`,
      );
      console.log('err', err);
    });
}

async function getBudgets() {
  return await fetchRequest('/budgets');
}
async function getTransactions() {
  return await fetchRequest('/transactions');
}
// async function getKids() {
//   return await fetchRequest('/kids');
// }

async function getKids(accessToken) {
  return await fetchRequest('/kids', {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function postBudget(body) {
  return fetchRequest('/budgets', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

function editBudget(id, body) {
  return fetchRequest(`/budgets/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

function deleteBudget(id) {
  return fetchRequest(`/budgets/${id}`, {
    method: 'DELETE',
  });
}

function login(user) {
  return fetchRequest('/login', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
}

module.exports = {
  getBudgets,
  postBudget,
  getTransactions,
  deleteBudget,
  editBudget,
  getKids,
  login,
};
