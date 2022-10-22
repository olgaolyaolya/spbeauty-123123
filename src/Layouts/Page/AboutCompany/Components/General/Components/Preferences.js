import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
function Preferences() {
    return (
        <div className='d-inline-flex flex-column gap-4 mt-5 me-5'>
            <div className='d-inline-flex flex-column gap-3'>
            <TitledTextInput title='Название компании' def='SPBEAUTY'/>
            <TitledSelector title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            <TitledTextInput title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
            </div>
            <PrimaryButton>Сохранить</PrimaryButton>
        </div>
    );
}

export default Preferences;
