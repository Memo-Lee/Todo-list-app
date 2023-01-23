import React from 'react';
import styles from './styles.module.css';
import { Button} from 'antd';
import {Link} from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext'

function Navbar() {
    const {loggedIn,user} = useAuth();
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">Logo</Link>
                </div>
            </div>
            <div className={styles.right}>
               {!loggedIn &&(
                <>
                    <Link to="/signin">
                        <Button type="primary" danger>Sigin</Button>
                    </Link> 
                    <Link to="/signup">
                        <Button type="primary" danger>Signup</Button>
                    </Link> 
                </>
                )}
                
                {loggedIn &&(
                <>
						{user?.role === "user" && (
							<Link to={"/user/todos"}>
								<Button colorScheme={"pink"} variant={"ghost"}>
									Todos
								</Button>
							</Link>
						)}
						<Link to={"/profile"}>
							<Button colorScheme={"pink"}>Profile</Button>
						</Link>
                    
                </>
                )}
            </div>
        </nav>
    )
}

export default Navbar
