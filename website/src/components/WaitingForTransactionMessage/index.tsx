interface IProps {
  txHash: any
}

export function WaitingForTransactionMessage({ txHash }: IProps) {
  return (
    <div className="alert alert-info" role="alert">
      Waiting for transaction <strong>{txHash}</strong> to be mined
    </div>
  );
}
