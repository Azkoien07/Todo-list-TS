import UserType from '@type/userType';
export default function UserCard({ name, age }: UserType) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-gray-500'>Edad: {age}</p>
    </div>
  );
}