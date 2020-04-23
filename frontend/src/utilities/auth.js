export const checkAuthorization = (fail) => {
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token");
  const scope = localStorage.getItem("scope");
  const token_type = localStorage.getItem("token_type");
  const expiry_date = localStorage.getItem("expiry_date");
  if (
    !access_token ||
    !refresh_token ||
    !scope ||
    !token_type ||
    !expiry_date
  ) {
    if (
      !access_token &&
      !refresh_token &&
      !scope &&
      !token_type &&
      !expiry_date
    )
      return;
    return fail();
  } else {
    return {
      access_token,
      refresh_token,
      scope,
      token_type,
      expiry_date,
    };
  }
};
export const setAuthorization = ({
  access_token,
  refresh_token,
  scope,
  token_type,
  expiry_date,
}) => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
  localStorage.setItem("scope", scope);
  localStorage.setItem("token_type", token_type);
  localStorage.setItem("expiry_date", expiry_date);
};

export const clearAuthorization = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("scope");
  localStorage.removeItem("token_type");
  localStorage.removeItem("expiry_date");
};
