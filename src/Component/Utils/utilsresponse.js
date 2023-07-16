import { getToken } from "./utils";

const token = getToken();
const response = await fetch('http://localhost:5000/api/v1/user/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` // Add Authorization header with token
  }
});
