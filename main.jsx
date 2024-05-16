import React from 'react';
import ReactDOM from 'react-dom';
import { UserCard } from './UserCard';
// import "./index.css";
import "./QrCode.css";
import { QrCode } from './QrCode';
// import App from './component/App';

ReactDOM.createRoot(document.getElementById("root")).render (
<React.StrictMode>
    {/* <UserCard/> */}
    <QrCode/>
</React.StrictMode>)