import React from "react";

import Header from "./Components/Header";
import CreateUserForm from "./Components/CreateUserForm";
import LoginForm from "./Components/LoginForm";
import DashboardContainer from "./Components/Dashboard/Container";

// The plus button (add sleep) is built out inside the Header component. My thoughts are to only show that when the user is logged in. I think the user should be shown the login page by default and everything else is protected.

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "lightGrey",
        paddingBottom: 100
      }}
    >
      <Header />
      <DashboardContainer />
      <CreateUserForm />
      <LoginForm />
    </div>
  );
}

export default App;
