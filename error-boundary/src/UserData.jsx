import React, { Component } from 'react'

export default class UserData extends Component {
  render() {
    const {user} = this.props
    return (
      <div>
        <h1>User Details</h1>

        <p>Name: {user.userName}</p>
        <p>Age: {user.age}</p>
      </div>
    )
  }
}


// import React from 'react'

// function UserData({user}) {
//   return (
//      <div>
//         <h1>User Details</h1>

//         <p>Name: {user.userName}</p>
//         <p>Age: {user.age}</p>
//       </div>
//   )
// }

// export default UserData