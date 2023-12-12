import PropTypes from 'prop-types';

const cardData = [
    { title: 'Total Categorias', metric: 25 },
    { title: 'Stock Bicicletas', metric: 50 },
    { title: 'Total Usuarios', metric: 75 },
    { title: 'Total Vendidas', metric: 40
 },
    
  ];


function Card ({ title, metric }){
    return (
        <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-metric">{metric}</p>
    </div>
      );
    }
    Card.propTypes = {
        title: PropTypes.string.isRequired,
        metric: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      };
        
        
      export default function MainComponent() {
        return (
          <div className="card-container">
        
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} metric={card.metric} />
              
            ))}
          </div>
        );
      }
