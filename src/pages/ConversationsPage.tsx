import {Page} from "../utils/styles";
import {ConversationsSidebar} from "../components/conversations/ConversationsSidebar";
import {Outlet} from "react-router-dom";
import conversations from "../__moks__/conversations";

export const ConversationsPage = () => {
  // const {id} = useParams();
  return <Page>
    <ConversationsSidebar conversations={conversations}/>
    <Outlet/>
  </Page>
}