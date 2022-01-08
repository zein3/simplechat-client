const Alert = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div class="bg-red-600 rounded p-3 m-4 text-center text-white">
      <span class="text-lg font-semibold">{message}</span>
    </div>
  )
}

export default Alert;
