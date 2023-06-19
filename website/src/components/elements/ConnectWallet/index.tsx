import { useConnect } from 'wagmi'
import { t } from "i18next";
import Alert from '../Alert';

function ConnectWallet() {
  const { connect, connectors, error } = useConnect()

  return (
    <div>
      <a href="#" className="text-base font-semibold leading-6 text-blue-500" onClick={() => connect({ connector: connectors[0] })}>
        {t("signIn", { ns: "header" })}{" "}
        <span aria-hidden="true">&rarr;</span>
      </a>
      <Alert error={error}/>
    </div>
  )
}

export default ConnectWallet;