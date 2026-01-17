import React, { useEffect, useState } from 'react'

function ApiData(WrappedComponent, url) {
  return function EnhancedComponent() {

    const [user, setUser] = useState([]);

    useEffect(() => {
      const fetchPost = async () => {
        const response = await fetch(url)
        const res = await response.json()
        setUser(res);
      }

      fetchPost();
    }, [])

    return <WrappedComponent user={user} />

  }
}

export default ApiData