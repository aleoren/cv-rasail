import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./ris-style.css";
import Form from "./components/form";
import FavColor from "./components/favColor";
export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Form />
      <FavColor />

    </section>
  );
}