import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column justify-content-between gap-2 mt-4 p-4 border-adresses'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3'>
                <ListElement>Санкт-Петербург, Невский проспект, 28</ListElement>
                <ListElement>Санкт-Петербупг, Казанская улица, 7</ListElement>
                <PrimaryButton>Добавиь файл</PrimaryButton>
            </div>
        </div>
    );
}

export default Addresses;

