'use server'

import { createClientForServer } from './server'
import { redirect } from 'next/navigation'

const signInWith = provider => async () => {
  const supabase = await createClientForServer()

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: '/',
    },
  })

  console.log(data)

  if (error) {
    console.log(error)
  }

  redirect(data.url)
}

const signinWithGoogle = signInWith('google')

const signOut = async () => {
  const supabase = await createClientForServer()
  await supabase.auth.signOut()
}

export { signinWithGoogle, signOut }