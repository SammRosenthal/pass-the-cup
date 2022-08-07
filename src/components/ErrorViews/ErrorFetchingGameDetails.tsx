export const ErrorFetchingGameDetails: React.FC<{ error: any }> = ({
  error,
}) => {
  console.error(error);

  return (
    <div className="text-center py-3">
      Looks like we are having trouble getting the details for this game. Please
      try again later or refresh your page to try again.
    </div>
  );
};

export default ErrorFetchingGameDetails;
