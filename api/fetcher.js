import { v4 as uuidv4 } from "uuid";
import config from "./config";

const fetcher = async (url, { method = "POST", headers = {}, body = {} }) => {
  try {
    const appHeaders = {
      "Content-Type": "application/json",
      RequestId: uuidv4(),
    };

    // if user is not authenticated
    if (url !== "LOGIN_URL" && url !== "LOGOUT_URL") {
      appHeaders["sessionId"] = localStorage.getItem("sessionId");
      appHeaders["x-auth-token"] = localStorage.getItem("token");
    }

    const fetcherOptions = {
      method,
      headers: {
        ...appHeaders,
        ...headers,
      },
    };

    if (method !== "GET") {
      fetcherOptions["body"] = JSON.stringify(body);
    }
    console.log("fetcher",fetcherOptions)
    
    const res = await fetch(`${config.endpoint}${config[url]}`, fetcherOptions);
    if(url === "LOGIN_URL"){
     
      localStorage.setItem(
        "token",
        JSON.stringify(res.headers.get("x-auth-token").split(" ")[1])
      );
      console.log("sessionid",res.headers.get("sessionId"))
      localStorage.setItem(
        "sessionId",
        JSON.stringify(res.headers.get("sessionId"))
        
      );

    }
    const result = res.json();
    return result;
  } catch (error) {
    console.log(" Found Error ", error);
    return {};
  }
};

export default fetcher;
