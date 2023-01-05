import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Card from "./Card";
import Buttons from "./Buttons";

export default function Info() {
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state);
    //const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({
        "id": "",
        "email": "user@xyz.com",
        "first_name": "User Name",
        "last_name": "",
        "avatar": "https://cdn5.vectorstock.com/i/1000x1000/49/29/man-glasses-male-avatar-person-people-icon-vector-10144929.jpg"
    });

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    
    const fetchList = async () => {
        setLoading(true);
        await timeout(1000);
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        //setUsers(json.data);
        dispatch({ type: "SET_USER_LIST", data: json.data });
        setLoading(false);
    };
    
    React.useEffect(() => {
        fetchList();
    }, []);

    const handleClick = async (event) => {
        console.log(event.target.id);
        const url = "https://reqres.in/api/users/" + event.target.id;
        const res = await fetch(url);
        const json = await res.json();
        setUserInfo(json.data);
    };

    console.log(userStore);

  return (
      <div className="Info">
          {loading && <Loading />}
          <Card userInfo={userInfo} />   
          <Buttons userStore={userStore} handleClick={handleClick} />
    </div>
  );
}
