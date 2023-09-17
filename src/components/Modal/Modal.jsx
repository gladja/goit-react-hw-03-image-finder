export const Modal = ({toggelModal, largeImageURL}) => {
  return (
    <div onClick={toggelModal} className="overlay">
      <div className="modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  )
}
