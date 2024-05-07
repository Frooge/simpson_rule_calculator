
export default function Members() {
  const members = [
    { id: 1, name: 'Erik Miguel Celdran', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTl7w-dTA9taNEEmQnS6McqlcAhfZ-n209EWJT0YMbmg&s' },
    { id: 2, name: 'Jade Andrie Rosales', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTl7w-dTA9taNEEmQnS6McqlcAhfZ-n209EWJT0YMbmg&s' },
    { id: 3, name: 'Marc Nathaniel Valeros', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTl7w-dTA9taNEEmQnS6McqlcAhfZ-n209EWJT0YMbmg&s' },
    // Add more members as needed
  ];

  return (
    <div className="flex justify-center h-screen w-3/4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Group 2 Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => (
            <div className="bg-secondary rounded-lg shadow-md p-4">
              <img src={member.image} alt={member.name} className="rounded-sm mx-auto mb-4" />
              <h2 className="text-lg font-bold text-center">{member.name}</h2>
            </div>
          ))}
          
        </div>
      </div>
    </div>
    
  );
}
