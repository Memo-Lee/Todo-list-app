import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext';

import { Text, Button } from "@chakra-ui/react";

function Profile() {
  const {logout,user} = useAuth();
  let navigate = useNavigate();

  const handleLogout = async () =>{
      logout(()=>{
          navigate("../");
      });
  }
  return (
    <div>
        <Text fontSize={"22"}>
          <code>{JSON.stringify(user)}</code>
        </Text>
        <Button colorScheme={"pink"} variant="solid" onClick={handleLogout}>
				    Logout
			  </Button>
    </div>
  )
}
export default Profile
    