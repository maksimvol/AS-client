import React from "react";
import { IUser } from "../../types/types";
import DisplayUserInfo from "./DisplayUserComponents";

const UserComponent: React.FC = () => {
    const user: IUser = {
        userId: 1,
        userGroupId: 1
    };
    return(
    <div>
        <h1>User Information</h1>
        <DisplayUserInfo user={user} />
    </div>
    );
};
export default UserComponent;