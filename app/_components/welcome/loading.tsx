
export const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <div className={`bg-teal-500 absolute top-0 bottom-0 right-0 left-0 transition-all duration-300 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none '}`}>
      <h2>Loading</h2>
    </div>
  )
}