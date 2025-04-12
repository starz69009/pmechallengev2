
import React from 'react';

function TeacherDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bienvenue {user?.email}</h1>
      <p className="mt-2">Interface professeur – gestion des groupes et missions.</p>
    </div>
  );
}

export default TeacherDashboard;
