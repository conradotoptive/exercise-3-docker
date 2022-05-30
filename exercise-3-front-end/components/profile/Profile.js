import {useRouter} from "next/router";
import { connect } from "react-redux";

const Profile = ({ user }) => {

    const router = useRouter();
    const loggedUser = user.user;

    return (
        <>
            <div className="item-box">
                <p> User name: {loggedUser.userName} </p>
                <p> E-mail:  {loggedUser.mail} </p>
                <p> Wallet: ${loggedUser.wallet} </p>
            </div>
        </>
    )
}



const mapStateToProps = (state) =>{
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Profile);