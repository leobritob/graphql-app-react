import { useQuery } from '@apollo/client'

import { GetUsersQuery } from '../graphql/users'

export const UsersList = () => {
  const { loading, data } = useQuery(GetUsersQuery)

  return (
    <div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {data.users.map((user, index) => (
            <li key={index}>{user.first_name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
