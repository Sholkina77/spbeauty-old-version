import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column justify-content-between col ms-5 p-4 gap-5 border-adresses'>
            <div className='title'>Адреса заведений</div>
            <ListElement>Санкт-Петербург, Невский проспект, 28</ListElement>
            <ListElement>Санкт-Петербупг, Казанская улица, 7</ListElement>
            <div className='mt-auto'><SecondaryButton>Добавить файл</SecondaryButton>
                   
            </div>
        </div>
        );
}

export default Addresses;

