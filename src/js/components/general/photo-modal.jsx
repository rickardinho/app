import React from 'react';

const PhotoModal = ({ handleDeletePhoto, handleSharePhoto }) => {

    const closeModal = (e) => {
        document.getElementsByClassName('photo-modal-container')[0].style.display = 'none';
    };

    return (
        <div className="photo-modal-container">
            <i className="fa fa-times" onClick={ closeModal } ariaHidden="true" />
            <div className="share" onClick={ (e) => console.log("handleSharePhoto") }>Share to Facebook</div>
            <div className="delete" onClick={ (e) => console.log("handleDeletePhoto") }>Delete</div>
        </div>
    );
};

export default PhotoModal;
