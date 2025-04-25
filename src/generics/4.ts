type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  const deafaultUser: User = {
    name: "Yurii",
    surname: "Vol",
    email: "Yurii@ex.com",
    password: "123456789",
  };
  return {...deafaultUser, ...initialValues}
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
