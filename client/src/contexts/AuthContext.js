import { useState,createContext,useContext,useEffect} from "react";
import {fetchMe,fetchLogout} from '../api';

const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const [loggedIn,setLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true);
    const [isUser,setIsUser] = useState(false);

    useEffect(() => {
		(async () => {
			try {
				const me = await fetchMe();

				setLoggedIn(true);
				setUser(me);
				setLoading(false);
                console.log("me",me);
			} catch (e) {
                console.log(e);
				setLoading(false);
			}
		})();
	}, []);

    const login = async (data) =>{
        setLoggedIn(true);
        setUser(data.user);
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        if (user.role !== "admin") {
            setIsUser(true);
        }
    };

    const logout = async (callback) => {
		setLoggedIn(false);
		setUser(null);

		await fetchLogout();

		localStorage.removeItem("access-token");
		localStorage.removeItem("refresh-token");

    callback()
	};



    const values = {
        user,
        loggedIn,
        login,
        logout,
        isUser,
    };

    if (loading) {
        return(
            <>
            </>
        )
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
const useAuth = () => useContext(AuthContext);

export {AuthProvider,useAuth};
