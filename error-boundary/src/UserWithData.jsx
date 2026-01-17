import UserProfile from "./UserProfile";
import ApiData from "./ApiData"

const UserWithData = ApiData(UserProfile, 'https://jsonplaceholder.typicode.com/users')

export default UserWithData