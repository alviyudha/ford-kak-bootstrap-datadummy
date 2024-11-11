import { fordKAKLogo } from "../assets/images/importImage";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <img src={fordKAKLogo} alt="" className="img-fluid" />
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
