function Wow({ wow }) {
  return (
    <div>
      <h2>{wow.movie}</h2>
      <p>{wow.full_line}</p>
      <img src={wow.poster} alt="Movie Poster" />
      <video src={wow.video["480p"]} controls></video>
    </div>
  );
}

export default Wow;
