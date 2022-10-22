import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const AddressesBlock = styled.div`
    border: 1px solid #ECEEF1;
    border-radius: 8px;
`;

function Addresses() {
  return (
    <AddressesBlock className="col d-flex flex-column justify-content-between gap-2 mt-4 ms-4 mb-4 px-4 py-4">
      <div className="d-inline-flex flex-column gap-4">
        <div className="title">Адреса заведений</div>
        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
      </div>
      <SecondaryButton>Добавить филиал</SecondaryButton>
    </AddressesBlock>
  );
}

export default Addresses;