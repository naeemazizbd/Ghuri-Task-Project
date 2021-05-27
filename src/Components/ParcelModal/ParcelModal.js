/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import parcelData from '../../data/PercelData.json';
import './ParcelModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const ParcelModal = ({ modalIsOpen, closeModal, orderId }) => {
    const parcelItem = parcelData.find((item) => item.trackId === orderId) || 0;
    const [progressWidth, setProgressWith] = useState(0);

    useEffect(() => {
        setProgressWith(16.66 * parcelItem?.id - 8.33);
    }, [parcelItem.id]);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="modal__container">
                <FaTimes className="close__icon" onClick={closeModal} />

                <h6 className="text-center py-3 f ">Delivery on Progress by GHURI</h6>

                <div className="col-ms-11 mx-auto">
                    <div className="progress__wrapper w-100">
                        <div
                            className="progress__bar progress__color"
                            style={{ width: `${progressWidth}%` }}
                        />
                        <img
                            className="progress__img"
                            src="https://ghuriexpress.com/static/media/logo7.dd562101.svg"
                            alt=""
                            style={{ left: `${progressWidth - 2}%` }}
                        />
                    </div>
                </div>

                <div className="parcelTrack__container">
                    {parcelData.map((parcel, index) => (
                        <div
                            className={`parcelTrack__item ${index + 1 === parcelItem.id && 'boxShadow'
                                } `}
                            key={parcel.id}
                        >
                            <div className="parcelTrack__icon">
                                <img src={parcel.icon} alt="" />
                                <span className="parcelTrack__status"> {parcel.status} </span>
                            </div>
                            <p className="parcelTrack__date"> {parcel.date} </p>
                            <p className="parcelTrack__comment"> {parcel.comment} </p>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default ParcelModal;
