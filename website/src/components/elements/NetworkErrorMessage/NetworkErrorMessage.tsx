interface IProps {
  message: any;
  dismiss: any;
}

export function NetworkErrorMessage({ message, dismiss }: IProps) {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={dismiss}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}