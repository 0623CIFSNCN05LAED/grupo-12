import SmallCard from "./SmallCards";

const myStats = [
  {
    id: 2,
    marca: "specialized",
    nombre: "E-MTB",
    rodado: "27.5",
    tamaño: "m",
    categoria: "electrica",
    precio: 5138500,
    descripcion: "La bicicleta E-MTB cuenta con asistencia eléctrica. Te permite recorrer terrenos mucho más complejos y realizar recorridos más largos sin tanto desgaste físico. La mejor parte: desde el punto de vista ambiental son inofensivas, ya que no contaminan, no generan ruido ni emisiones. VELOCIDAD MÁXIMA: 25km/hAUTONOMÍA DE BATERÍA: 40kmTIEMPO DE CARGA: 5-6HS POTENCIA: 240W, 36V",
    img: "/images/products/Electrica-1.jpg"
  },
  {
    id: 3,
    marca: "everyday",
    nombre: "Everyday Tyron",
    rodado: "20",
    tamaño: "s",
    categoria: "freestyle",
    precio: 200500,
    descripcion: "Para realizar tus mayores aventuras. Y con potencia de sobra para llevarte a la oficina. Equipada para pedalear por la ciudad. Muévete de una forma más rápida y sostenible.",
    img: "/images/products/Freestyle.jpg"
  },
 
]

export default function Statistics() {
    return (
      <section className="content">
        <h2 className="mt-3">Estadísticas</h2>
    
    <div className="info-boxes">
          {myStats.map((stat) => (
            <SmallCard
              key={stat.id}
              marca={stat.marca}
              nombre={stat.nombre}
              precio={stat.precio}
              //icon={stat.icon}
              rodado={stat.rodado}
            />
          ))}
        </div>
      </section>
      ); 
    }
   
  