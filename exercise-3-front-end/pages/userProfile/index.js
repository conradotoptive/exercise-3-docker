import { useRouter } from 'next/router';
import Profile from '../../components/profile/Profile';

const UserProfile = () => {

    const router = useRouter();
    
    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    This is your profile!
                </h1>
                <Profile/>
                <button className='general-button' onClick={() => router.push('home')}>
                    Go Back Home
                </button>
            </div>
        </>
    )
}

export default UserProfile
