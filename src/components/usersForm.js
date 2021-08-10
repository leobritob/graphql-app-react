import { useMutation } from '@apollo/client'
import { createRef } from 'react'

import { CreateUserQuery, GetUsersQuery } from '../graphql/users'

export const UsersForm = () => {
  let firstName = createRef()
  let lastName = createRef()

  const [createUser, { loading, error }] = useMutation(CreateUserQuery, {
    refetchQueries: [GetUsersQuery, 'GetUsers'],
  })

  const handleSubmitForm = (e) => {
    e.preventDefault()

    createUser({
      variables: { firstName: firstName.value, lastName: lastName.value },
    })

    firstName.value = ''
    lastName.value = ''
  }

  return (
    <div>
      {error && <p>Houve algum erro: {error}</p>}
      {loading && <p>Carregando...</p>}

      <form onSubmit={handleSubmitForm}>
        <input
          id="first_name"
          name="first_name"
          placeholder="First name"
          ref={(e) => (firstName = e)}
        />
        <input
          id="last_name"
          name="last_name"
          placeholder="Last name"
          ref={(e) => (lastName = e)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
