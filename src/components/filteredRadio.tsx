import Form from "react-bootstrap/Form";

function RadioButtons({ homeworld }: { homeworld: string }) {
  return (
    <div key={`default-${homeworld}`} className="mb-3">
      <Form.Check
        onChange={(e) => {
          setIsFiltered(e.target.value);
        }}
        type="radio"
        name="group1"
        id={`default-${homeworld}`}
        label={` ${homeworld}`}
      />
    </div>
  );
}

export default RadioButtons;
