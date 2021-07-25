import React, { FC } from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { RootState } from "./store/store";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Notification from "./components/Notification";

const App: FC = () => {
  const notificationMessage = useSelector(
    (state: RootState) => state.notification.message
  );

  return (
    <div className="App">
      <Header
        title="Task List App"
        subtitle="Create some lists and add some tasks to each list"
      ></Header>

      <div className="container px-5">
        <div className="columns">
          <Sidebar />
        </div>
      </div>

      <Notification msg={notificationMessage} />
    </div>
  );
};

export default App;
