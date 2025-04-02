
export default async function ProfilePage() {


  if (!user) {
    return (
      <div>
        <h1>No estás autenticado</h1>
        <p>Por favor, inicia sesión para ver tu perfil.</p>
      </div>
    )
  }

  return (
    <div className="profile-container">
      <h1>Tu Perfil</h1>
      <div className="profile-info">
        <img
          src={user?.user_metadata?.avatar_url || '/default-avatar.png'}
          alt="Foto de perfil"
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        />
        <p><strong>Nombre:</strong> {user?.user_metadata?.full_name || 'Sin nombre'}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  )
}