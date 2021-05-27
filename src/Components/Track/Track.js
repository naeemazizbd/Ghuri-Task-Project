import { useState } from 'react';
import parcelData from '../../data/PercelData.json';
import ParcelModal from '../ParcelModal/ParcelModal';
import './Track.css';

const Track = () => {
    const [orderId, setOrderId] = useState('');
    const [isValidOrderId, setIsValidOrderId] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const orderSubmitHandler = (event) => {
        event.preventDefault();

        const hasId = parcelData.find((order) => order.trackId === orderId);
        if (hasId) {
            setIsValidOrderId(true);
            openModal();
        } else {
            window.alert('Not found Id');
            setIsValidOrderId(false);
        }
    };

    return (
        <div className="container">
            <div className="track__wrapper mx-5 py-3">
                <h6 className="py-3">Enter parcel tracking number to track your parcel</h6>
                <form onSubmit={orderSubmitHandler} className="track__field">
                    <input
                        onChange={(event) => setOrderId(event.target.value.trim())}
                        type="text"
                        name=""
                        id=""
                        className="track__input form-control"
                    />
                    <button type="submit" className="track__button btn btn-dark px-3">
                        Track
                    </button>
                </form>
                {isValidOrderId && (
                    <ParcelModal
                        modalIsOpen={modalIsOpen}
                        openModal={openModal}
                        closeModal={closeModal}
                        orderId={orderId}
                    />
                )}
            </div>
        </div>
    );
};

export default Track;
