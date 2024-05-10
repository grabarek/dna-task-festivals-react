import { useEffect, useState } from "react";
import QrCode from "qrcode";
import { navigate, useStoreDispatch } from "../store";
import { Screen } from "../components";
import { useIsUserLoggedIn } from "../hooks";
import "./HomePage.css";

export const HomePage = () => {
  const user = useIsUserLoggedIn();
  const dispatch = useStoreDispatch();
  const [qrCode, setQrCode] = useState<string>();

  useEffect(() => {
    if (!user) {
      return;
    }

    const getQrCode = async () => {
      const qrCode = await QrCode.toDataURL(user.id, {
        errorCorrectionLevel: "H",
      });
      setQrCode(qrCode);
    };
    getQrCode().catch(console.error);
  }, [user]);

  if (!user) {
    return null;
  }

  const actions = [
    { label: "top up", callback: () => dispatch(navigate("/top-up")) },
    { label: "logout", callback: () => dispatch(navigate("/")) },
  ];

  const balance = user.balance.toFixed(2);

  return (
    <Screen
      title="Home"
      content={
        <div>
          <p>Your account balance: {balance}</p>
          <p>Your QR code</p>
          {qrCode && <img src={qrCode} alt="QR code" className="qr" />}
        </div>
      }
      actions={actions}
    />
  );
};
