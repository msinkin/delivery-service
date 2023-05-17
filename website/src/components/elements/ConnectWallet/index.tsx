import { useAppDispatch } from "hooks";
import { t } from "i18next";
import { connectWallet } from "stores/authSlice";

function ConnectWallet() {
  //const networkError = useAppSelector(state => state.auth.networkError);
  const dispatch = useAppDispatch();

  return (
    <a href="#" className="text-base font-semibold leading-6 text-blue-500" onClick={() => dispatch(connectWallet())}>
      {t("signIn", { ns: "header" })}{" "}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

export default ConnectWallet;