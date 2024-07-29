import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const List = ({ petList }) => {
  const navigate = useNavigate();

  useEffect(() => {
    petList.forEach((_, ind) => {
      new Carousel(`#carouselExampleFade-${ind}`);
    });
  }, [petList]);

  const viewMore = (id) => {
    navigate(`/petDetails/${id}`);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {petList?.map((val, ind) => (
              <div
                key={ind}
                className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex"
              >
                <div className="card h-100 w-100">
                  <div
                    id={`carouselExampleFade-${ind}`}
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {val.images.map((image, imgInd) => (
                        <div
                          key={imgInd}
                          className={`carousel-item ${imgInd === 0 ? 'active' : ''}`}
                        >
                          <img
                            src={image}
                            className="d-block w-100 h-100"
                            alt={`Image of ${val.name}`}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carouselExampleFade-${ind}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carouselExampleFade-${ind}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Animal: {val.animal}</h5>
                    <p className="card-text mb-0">Name: {val.name}</p>
                    <p className="card-text mb-0">Breed: {val.breed}</p>
                    <p className="card-text mb-0">State: {val.state}</p>
                    <p className="card-text">City: {val.city}</p>
                    <p className="card-text">Description: {val.description}</p>
                    <div className="btn-container mt-auto">
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => viewMore(val.id)}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
