const SmallCard = ({ marca, nombre, precio, rodado  }) => {
    return (
<div className="info-box">
      <div className="box-icon">
        <i
          className={marca}
          style={{
            fontSize: "1.5rem",
            nombre: nombre,
          }}
        ></i>
      </div>

      <div className="box-content">
        <span className="big">{precio}</span>
        {rodado}
      </div>
    </div>
        );
    };
    SmallCard.propTypes = {
        rodado: PropTypes.string.isRequired,
        precio: PropTypes.string.isRequired,
        marca: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
      };

export default SmallCard;