import Estadisticas from "./Content/Estadisticas";
import Bikes from "./Content/Bikes";
import Generos from "./Content/Generos";

export default function ContentWrap() {
    return (
<main
className="content-wrap"
      style={{
        maxHeight: "calc(100vh - 6rem)",
      }}
    >
      <Bikes />
      <Estadisticas />
      <Generos />
    </main>

        );
    };