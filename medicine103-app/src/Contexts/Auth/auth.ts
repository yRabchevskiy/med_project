const AppAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    AppAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    AppAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { AppAuthProvider };