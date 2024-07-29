import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiRequest } from '../utils/apiService';
const PetsDetials = () => {
  const { id } = useParams();
  const [petDetials, setPetDetials] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await apiRequest('get', `pets?id=${id}`);
      setPetDetials(data);
    } catch (error) {
      setPetDetials([]);
    }
  };
  return (
    <>
      <div className="container-fluid  d-flex justify-content-center align-items-center mt-5">
        <div className="container">
          <div className="row ">
            {petDetials?.pets?.map((val, ind) => (
              <div key={ind} className=" mb-4 d-flex">
                <div className="card h-100 w-100 d-flex flex-column flex-lg-row ">
                  <div className="col-lg-4  col-sm-12 col-md-6">
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
                              className="d-block w-100"
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
                  </div>
                  <div className="col-lg-8  col-sm-12  col-md-6">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">Animal: {val.animal}</h5>
                      <p className="card-text mb-0">Name: {val.name}</p>
                      <p className="card-text mb-0">Breed: {val.breed}</p>
                      <p className="card-text mb-0">State: {val.state}</p>
                      <p className="card-text">City: {val.city}</p>
                      <p className="card-text">
                        Description: {val.description}
                      </p>
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

export default PetsDetials;
