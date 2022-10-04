import {Page} from "../utils/styles";
import {ConversationsSidebar} from "../components/conversations/ConversationsSidebar";
import {Outlet, useParams} from "react-router-dom";

export const ConversationsPage = () => {
  const {id} = useParams();
  return <Page>
    <ConversationsSidebar/>
    <Outlet/>
  </Page>
}