import { signIn, signOut } from '~/auth'
import { Signout } from './Signout'

export default function Home() {
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await signIn('github')
        }}
      >
        <button type='submit'>Signin with GitHub</button>
      </form>
      <Signout />
    </div>
  )
}
