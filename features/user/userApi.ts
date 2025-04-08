export const fetchRegisterUsers = async (username: string, password: string) => {
  const response = await fetch("https://habits-tracker-backend-j2o5exg02-byrons-projects-a6702507.vercel.app/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "username": username,
      "password": password,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to register user");
  }
  return response;
};


export const fetchLoginUsers = async (username: string, password: string) => {
    const response = await fetch("https://habits-tracker-backend-j2o5exg02-byrons-projects-a6702507.vercel.app/users/login", {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to login  user");
    }
    return response;
  };
  
