const ListMovies = ({ movieArr }) => {
  return (
    <div>
      {movieArr.map((item) => {
        return (
          <div>
            <h1> {item.MovieTitle} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default ListMovies;
