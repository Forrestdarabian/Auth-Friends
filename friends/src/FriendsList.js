import { axiosWithAuth } from "./AxiosAuth";

 class FriendsList extends React.Component {

    state = {
        friendsList:[]
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('res', res)
            this.setState({
                friends: res.data.data
            })
        })
        .catch(err => console.log(err.response))
    }
 }