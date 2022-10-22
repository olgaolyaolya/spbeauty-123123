import styled from "styled-components";
import SearchIcon from "../../../../Icons/SearchIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const WrapperInput = styled.div`
  position: relative;
  width: 216px;
`;

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #94a3b8;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 0px; /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
  top: 50%;
  transform: translateY(-50%);
`;

function SearchField() {
  return (
    <WrapperInput className="d-inline-flex">
      {" "}
      {/* Устанавливает ширину поля и включает относительное положение */}
      <Input className="px-3 py-2 gap-2" placeholder="Найти" />
      <SearchIconWrapper className="px-3 py-2 gap-2">
        {" "}
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<SearchIcon />} />
      </SearchIconWrapper>
    </WrapperInput>
  );
}

export default SearchField;
