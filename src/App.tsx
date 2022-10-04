import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {ConversationsPage} from "./pages/ConversationsPage";
import {ConversationChannelPage} from "./pages/ConversationChannelPage";
import {ConversationPanel} from "./components/conversations/ConversationPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="conversations" element={<ConversationsPage/>}>
          <Route index element={<ConversationPanel/>}/>
          <Route path=":id" element={<ConversationChannelPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
