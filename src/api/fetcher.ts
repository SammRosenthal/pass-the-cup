export const fetcher = async (url: string) => {
  return fetch(url).then(
    (res) => {
      return res.json();
    },
    (e) => {
      console.error(e);
      throw Error(e);
    }
  );
};

export default fetcher;
