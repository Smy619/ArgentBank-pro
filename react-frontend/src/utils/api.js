const API_BASE_URL = process.env.REACT_APP_API_URL;

/*Login user with email and password*/
export async function login(email, password) {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Login failed: ${response.status}`);
  }

  return await response.json();
}

/*get user profile with token*/
export async function getProfile(token) {
  const response = await fetch(`${API_BASE_URL}/user/profile`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Fetching profile failed: ${response.status}`);
  }

  return  await response.json();
  
}

/*update user profile (userName only)*/
export async function updateProfile(userName, token) {
  const response = await fetch(`${API_BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Updating profile failed: ${response.status}`);
  }

  return await response.json();
}



