export const ErrorFetchingGames: React.FC<{ error: any }> = ({ error }) => {
  console.error(error);

  return (
    <div className="text-center py-3">
      Looks like we are having trouble gathering your games. Please try again
      later or refresh the page to try again.
    </div>
  );
};
