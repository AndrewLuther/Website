import pic from "../images/Headshot.png"
function BioModal(props) {

    function closeHandler() {
        props.onClose()
    }

    return (
        <div className='modal'>
            <h2>Bio</h2>
            <div>
                <img src={pic} alt="Headshot" width="100" height="100"></img>
            </div>
            <br></br>
            <p>My name is Andrew Luther and I am a computer science student eager
                to contribute to collaborative success through hard work, attention
                to detail and strong organizational skills. </p>
            <button className='btn btn--alt' onClick={closeHandler}>
                Close
            </button>
        </div>
    );
}

export default BioModal;