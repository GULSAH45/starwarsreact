import Form from "react-bootstrap/Form";
interface RadioParams {
  homeworld: string;
  homefilterchange: (e: string) => void;
}
function RadioButtons({ homeworld, homefilterchange }: RadioParams) {
  return (
    <div key={`default-${homeworld}`} className="mb-3">
      <Form.Check
        onChange={() => homefilterchange(homeworld)}
        type="radio"
        name="group1"
        id={`default-${homeworld}`}
        label={` ${homeworld}`}
      />
    </div>
  );
}

export default RadioButtons;
