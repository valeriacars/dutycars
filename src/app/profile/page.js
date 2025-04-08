'use client'; 

import { useEffect, useState } from 'react';
import createClientForBrowser from '../../../utils/supabase/client';
import Menu from '../components/Menu';
import styles from "../page.css";
import VehiculoList from '../components/VehiculoCard';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClientForBrowser();
      const { data: session } = await supabase.auth.getSession();

      if (session?.session) {
        setUser(session.session.user);
      }
    };

    fetchUser();

    const { data: authListener } = createClientForBrowser().auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (!user) {
  
    return (
      <div className="profile-container">
       <div className="login-reminder">
  <div className="reminder-content">
    <svg className="warning-icon" viewBox="0 0 24 24">
      <path d="M13 14h-2v-4h2m0 6h-2v-2h2M1 21h22L12 2 1 21z"/>
    </svg>
    <p className="message-text">No has iniciado sesión</p>
    <a href="/" className="login-button">Iniciar Sesión</a>
  </div>
</div></div> 
    )
  }

  return (
  <>
  <Menu/>
  <div className="profile-container">
  <div className="profile-card">
    <div className="avatar-wrapper">
    <img 
        src={user.user_metadata.avatar_url || '/user.svg'} 
        alt="Avatar" 
        className="profile-avatar"
        onError={(e) => {
          e.target.src = '/user.svg';
          e.onerror = null;
        }}
      />
      <div className="avatar-gradient"></div>
    </div>
    
    <h2 className="profile-name">{user.user_metadata.full_name}</h2>
    
    <p className="profile-email">
      <svg className="email-icon" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
      {user.email}
    </p>
    
       
  </div>
  <VehiculoList/>
</div>
</>
  );
}