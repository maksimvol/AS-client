import React from "react";
import { IUser } from "../../types/types";

const DisplayUserInfo: React.FC<{user: IUser}> = ({ user }) => {
    return(
        <div>
            <h2>User Information</h2>
            <p>User ID: {user.userId}</p>
            <p>User Group Id: {user.userGroupId}</p>
        </div>
    );
};

export default DisplayUserInfo;