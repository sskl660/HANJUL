import Loader from "react-loader-spinner";
import SpinConatainer from 'react-loader-spinner'
import './Loading.css'

function Loading() {
  return (
    <div class="loading-container">
      <h1 className="loadingText">Loading ...</h1>
      <SpinConatainer className="loading">
        <Loader
          type="1val"
          color="#CE957E"
          height={30}
          width={30}
          timeout={50000}
        />
      </SpinConatainer>
    </div>
  );
}

export default Loading
