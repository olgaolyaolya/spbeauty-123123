import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  background-color: #f8fafc;
  color: #0f172a;
  &:hover {
    opacity: 0.8;
  }
`;

function TitledTextInput({ title, def }) {
  const Title =
    title === undefined ? <div></div> : <div className="caption"> {title}</div>;
  return (
    <div className="caption d-flex flex-column gap-2">
      {Title}
      <Input className="px-3 py-2 gap-2" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;