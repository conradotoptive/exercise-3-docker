import { connect, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { useState } from "react";
import { registerUser } from "../../store/slices/user/action";

const Register = ({ user }) => {

    const newUser = user;
    const router = useRouter();
    const dispatch = useDispatch();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        setMail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleUserNameChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    }

    const onClickRegister = async (e) => {
        e.preventDefault();
        if (!mail || !password || !userName) {
            alert("Please, complete all the fields");
        } else {
            const state = await dispatch(registerUser(userName, mail, password));
            if (state === 404) {
                alert("This user already exists")
                return
            } else {
                alert("Register successfully");
                return router.replace('/home');
            }   
        }
    }

    return (
        <>
            <form>
                <input
                className='input-credentials'
                    value={mail}
                    type='text'
                    placeholder="E-mail"
                    onChange={handleEmailChange}
                />
                <p/>
                <input
                    className='input-credentials'
                    value={userName}
                    type='text'
                    placeholder="User Name"
                    onChange={handleUserNameChange}
                />
                <p/>
                <input
                    className='input-credentials'
                    value={password}
                    type='password'
                    placeholder="Password"
                    onChange={handlePasswordChange}
                />
                <p/>
                <button className='general-button' onClick={onClickRegister}>
                    Register
                </button>
            </form>
        </>
    )

}

const mapStateToProps = (state) =>{
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Register);