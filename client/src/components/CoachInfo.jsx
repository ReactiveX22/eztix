const CoachInfo = ({ coach }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-base font-bold'>Created Coach Info</h1>
      <div className='flex flex-col gap-2 text-start text-sm'>
        <p>CaochID: {coach?.id}</p>
        <p>RouteID: {coach?.route_id}</p>
        <p>DepartureTime: {coach?.departure_time}</p>
      </div>
    </div>
  );
};
export default CoachInfo;
