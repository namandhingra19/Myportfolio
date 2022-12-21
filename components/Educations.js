export const Education = (props) => {
  return (
    <div className="row">
    <div className="col-1 d-flex justify-content-center">
        <div className="h-100"
            style={{ width: "0.2rem",backgroundColor:'#8656DA'}}
            data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="1000"
            ></div>
      </div>
    <div
      className="col-11 px-4 mb-3"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
        <div className="border border-secondary px-3 pt-3 border rounded-top rounded-bottom">
          <p className="h4">{props.content.title}</p>
          <p className="h6">{props.content.college}</p>
          <ul>
            {props.content.points.map((x, i) => {
              return <li key={i}>{x}</li>;
            })}
          </ul>
          {props.content.subjects.map((x, i) => {
            return (
              <p
                className="d-inline-block rounded-top rounded-bottom px-2 me-2"
                style={{ backgroundColor: `black`, color: `white` }}
                key={i}
              >
                {x}
              </p>
            );
          })}
        </div>
    </div>
    </div>
  );
};
