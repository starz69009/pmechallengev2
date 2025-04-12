
import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bienvenue {user?.email}</h1>
      <p className="mt-2">Voici votre tableau de bord étudiant.</p>
    </div>
  );
}

export default Dashboard;
