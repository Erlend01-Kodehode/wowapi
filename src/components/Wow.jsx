function Wow({ wow }) {
  return (
    <div className="ResultCard">
      <h2>{wow.movie}</h2>
      <p>{wow.full_line}</p>
      <div>
        <img src={wow.poster} alt="Movie Poster" />
        <video src={wow.video["480p"]} controls></video>
      </div>
    </div>
  );
}

export default Wow;
