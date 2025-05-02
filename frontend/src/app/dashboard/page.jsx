'use client';

import React, { useEffect, useState } from 'react';

function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/user/admin');
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        const result = await response.json();
        setUsers(result.users);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        setMessage('Erreur lors du chargement des utilisateurs.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Es-tu sûr de vouloir supprimer cet utilisateur ?')) return;
    try {
      const response = await fetch(`http://localhost:5000/user/${id}`, { // <-- ✅ template string fixed
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la suppression');
      }

      setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
      setMessage('Utilisateur supprimé avec succès ✅');
      setTimeout(() => setMessage(''), 3000);

    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      setMessage(`Erreur lors de la suppression: ${error.message}`); // <-- ✅ correct quotes
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) {
    return <div className="text-center py-16 text-gray-700">Chargement...</div>;
  }

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-100 via-blue-200 to-indigo-300 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
        Dashboard des Utilisateurs
      </h1>

      {message && (
        <div className="bg-yellow-400 text-gray-800 p-4 rounded-lg mb-6 shadow-md">
          {message}
        </div>
      )}

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-4">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-indigo-400 to-blue-400 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Prénom</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-t hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4 text-gray-700">{user.firstName}</td>
                  <td className="px-6 py-4 text-gray-700">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
